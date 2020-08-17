import logging
from aiohttp import web
from pytrends.request import TrendReq

log = logging.getLogger(__name__)


async def handle(request):
    query = request.match_info['query']
    pytrend = TrendReq()
    kw_list = [query]
    pytrend.build_payload(kw_list, cat=0, timeframe='today 12-m', geo='SE', gprop='')
    result = pytrend.interest_over_time()
    return web.json_response(parse_data(query, result), status=200)

def parse_data(query, data):
    data_dict = data.to_dict()
    parsed_data = []
    for date in data_dict[query].keys():
        parsed_data.append({
            'x': date.strftime("%Y/%m/%d"),
            'y': data_dict[query][date]
        })
    return parsed_data