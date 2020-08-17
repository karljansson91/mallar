
from aiohttp import web
from .resources import stock, search, test, trends, eps

def setup_routes(app):
    app.add_routes(
        [
            web.get('/data/{symbol}/mock', test.handle),
            web.get('/data/{symbol}', stock.handle),
            web.get('/search/{query}', search.handle),
            web.get('/trends/{query}', trends.handle),
            web.get('/eps/{symbol}', eps.handle),
        ]
    )
