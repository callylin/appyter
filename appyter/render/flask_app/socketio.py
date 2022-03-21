from appyter.ext.socketio import AsyncServer

import logging
logger = logging.getLogger(__name__)

socketio = AsyncServer(async_mode='aiohttp')

@socketio.on('connect')
async def _(sid, environ):
  request = environ['aiohttp.request']
  logger.debug(f"connect: {sid}")
  async with socketio.session(sid) as sess:
    sess['request_url'] = request_url = f"{request.scheme}://{request.host}{request.path}"
    if not request.app['config']['DEBUG']:
      public_url = request.app['config']['PUBLIC_URL']
      request_url = sess['request_url']
      if not request_url.startswith(public_url):
        logger.warning(f"This could cause issues in production:\n{request_url=} {public_url=}")
    sess['config'] = request.app['config']
    sess['executor'] = request.app['executor']

@socketio.on('disconnect')
async def _(sid):
  logger.debug(f"disconnect: {sid}")
