import logging
from aiohttp import web
from src.client import api
from datetime import timezone, datetime

log = logging.getLogger(__name__)


async def handle(request):
    symbol = request.match_info['symbol']
    path = 'v1/stock/earnings'
    params =  {
        'symbol': symbol,
    }
    try:
        data, status = await api.get_finnhub(path, params=params)
        return web.json_response(parse_data(symbol, data), status=status)
    except Exception as e:
        log.error(e, exc_info=True)
        return web.json_response({'error': 'Failed to fetch data'}, status=500)


def parse_data(symbol, data):
    parsed_data = []
    log.error(data)
    for value in data:
        parsed_data.append({
                'x': value['period'].replace('-', '/'),
                'y': value['actual']
            }
        )
    return {
        'company': {
            'name': symbol
        },
        'data': parsed_data
    }