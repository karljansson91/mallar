

from aiohttp import web

from .cors import setup_cors
from .routes import setup_routes
from .client import api
from .db import db


app = web.Application()
app.on_startup.append(api.setup)
app.on_startup.append(db.setup)
setup_routes(app)
setup_cors(app)

app.on_cleanup.append(api.stop)



if __name__ == '__main__':
    web.run_app(app, port=8080)