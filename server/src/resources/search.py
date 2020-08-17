import logging
from aiohttp import web
from src.client import api
from src.db import db

log = logging.getLogger(__name__)

BASE_URL='https://www.alphavantage.co'
SECRET_TOKEN='apikey=G81NPMNMJPX5GS5O'

async def handle(request):
    query = request.match_info['query']
    search = {
        "$or": [
                { 'displaySymbol': { '$regex': query, '$options': 'i' } },
                { 'name': { '$regex': query, '$options': 'i' } }
            ]
    }
    result = []
    for entry in db.data.symbols.find(search, {'_id': False}).limit(5):
        result.append(entry)
    return web.json_response(result, status=200)