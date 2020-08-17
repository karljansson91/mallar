import logging
from aiohttp import web
from src.client import api
from datetime import timezone, datetime

log = logging.getLogger(__name__)


async def handle(request):
    symbol = request.match_info['symbol']
    path = 'v1/stock/candle'
    params =  {
        'symbol': symbol,
        'resolution': 'D',
        'from': int(datetime.now(tz=timezone.utc).timestamp()) - 3600*24*31*12,
        'to': int(datetime.now(tz=timezone.utc).timestamp())
    }
    try:
        data, status = await api.get_finnhub(path, params=params)
        return web.json_response(parse_data(symbol, data), status=status)
    except Exception as e:
        log.error(e, exc_info=True)
        return web.json_response({'error': 'Failed to fetch data'}, status=500)


def parse_data(symbol, data):
    parsed_data = []
    for close_value, time in zip(data['c'], data['t']):
        parsed_data.append({
                'x': datetime.utcfromtimestamp(time).strftime('%Y/%m/%d'),
                'y': close_value
            }
        )
    return {
        'company': {
            'name': symbol
        },
        'data': parsed_data
    }