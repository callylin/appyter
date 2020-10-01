import functools
import importlib
from queue import Queue
from collections import OrderedDict
from threading import Lock
from flask import Blueprint, request, current_app, jsonify
import logging
logger = logging.getLogger(__name__)

from appyter.orchestration.dispatcher.socketio import socketio

class ViewableQueue(Queue):
  def view(self):
    with self.mutex:
      return list(self.queue)

class LockedOrderedDict(OrderedDict):
  lock = Lock()

# NOTE: This is questionable, this queue may run
#       on a different thread or process; in the case of a thread it's fine
#       because Queue is thread-safe, but not in the case of a process
#       we'd need a monkey-patched redis-Queue.
#
dispatch_queue = ViewableQueue()
active = LockedOrderedDict()

core = Blueprint('__main__.dispatcher', __name__)

@core.route('/', methods=['GET', 'POST'])
def on_submit():
  if request.method == 'GET':
    with active.lock:
      return jsonify({ 'active': list(active), 'queued': dispatch_queue.view() })
  elif request.method == 'POST':
    dispatch_queue.put(dict(request.json, debug=current_app.config['DEBUG']))
    return jsonify(dispatch_queue.qsize())

def dispatcher(queued=None, active=None, dispatch=None):
  while True:
    while not queued.empty():
      job = queued.get()
      with active.lock:
        active[job['job']] = job
      try:
        dispatch(job=job)
      except:
        import traceback
        logger.error(f"dispatch error: {traceback.format_exc()}")
      with active.lock:
        del active[job['job']]
      queued.task_done()
    socketio.sleep(1)

@core.before_app_first_request
def init_disaptcher():
  print('Initializing dispatch...')
  from subprocess import Popen
  #
  dispatch = functools.partial(
    importlib.import_module(
      '..dispatch.{}'.format(current_app.config['DISPATCH']),
      __package__
    ).dispatch,
    Popen=Popen,
    debug=current_app.config['DEBUG'],
    namespace=current_app.config['KUBE_NAMESPACE'],
  )
  #
  print('Starting background tasks...')
  for _ in range(current_app.config['JOBS']):
    socketio.start_background_task(dispatcher, queued=dispatch_queue, active=active, dispatch=dispatch)

