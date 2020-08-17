from pymongo import MongoClient
from src.client import api
from logging import getLogger

log = getLogger(__name__)

class DB:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.client = None
        self.data = None

    async def setup(self, app):
        log.error(f'host: {self.host}, port:{self.port}')
        self.client = MongoClient(
                host=self.host,
                port=self.port,
                username='admin',
                password='password',
            )
        self.data = self.client.data


db = DB('mongo-db', 27017)