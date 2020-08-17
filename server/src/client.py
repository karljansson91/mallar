import aiohttp
import logging

log = logging.getLogger(__name__)

class API:
    def __init__(self):
        self.client = None
        self.finnhub_base_url='https://finnhub.io/api'
        self.finnhub_token = 'bqnpaavrh5reqlm31jk0'

    async def setup(self, app):
        self.client = aiohttp.ClientSession()

    async def stop(self, app):
        await self.client.close()
    
    async def get_finnhub(self, path, params={}):
        params['token'] = self.finnhub_token
        log.error(f'{self.finnhub_base_url}/{path}')
        log.error(params)
        async with api.client.get(f'{self.finnhub_base_url}/{path}', params=params) as resp:
            data = await resp.json()
            return data, resp.status

api = API()