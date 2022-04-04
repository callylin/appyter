import logging
logger = logging.getLogger(__name__)
from dataclasses import dataclass, asdict
from appyter.ext.urllib import join_url, parent_url

@dataclass(frozen=True,)
class InstanceInfo:
  instance: str
  metadata: dict = None

async def add_instance(data: InstanceInfo, auth=None, config=None):
  if not auth: raise PermissionError
  import aiohttp
  async with aiohttp.ClientSession(
    headers={
      'Authorization': f"Bearer {auth}",
    },
    # raise_for_status=True,
  ) as session:
    async with session.post(
      join_url(
        parent_url(config['PUBLIC_URL']),
        'postgrest/rpc/add_instance',
      ),
      json=asdict(data),
    ) as res:
      if res.status != 200:
        raise Exception(await res.text())
      return await res.json()
