from config import DB_URL, DBPaths
from tortoise.contrib.fastapi import register_tortoise
from fastapi import FastAPI

from db.users.endpoints import user_router
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title='ToDo List',
    description="API",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://127.0.0.1:3000'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(user_router, prefix="/users", tags=["Пользователи"])

app.mount("/static", StaticFiles(directory="static"), name="static")

register_tortoise(
    app,
    db_url=DB_URL,
    modules={"models": DBPaths.all_paths},
    generate_schemas=True,
    add_exception_handlers=True,
)
