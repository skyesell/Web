from fastapi import APIRouter
from db.tasks.routers.statistic import statistic_router
from db.tasks.routers.tasks import tasks_router as task_router

tasks_router = APIRouter()

tasks_router.include_router(statistic_router, prefix='/statistic', tags=['Статистика'])
tasks_router.include_router(task_router, prefix='/task', tags=['Задачи'])
