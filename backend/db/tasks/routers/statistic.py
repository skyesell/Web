from fastapi import APIRouter
from fastapi.params import Depends

from db.tasks.schemas import StatisticScheme
from db.tasks.services.tasks import TaskService
from db.users.models import User
from db.users.services.services import fastapi_users_service

statistic_router = APIRouter()


@statistic_router.get('/', response_model=StatisticScheme)
async def get_statistic(user: User = Depends(fastapi_users_service.get_current_active_user)):
    service = TaskService(user.id)
    return await StatisticScheme.from_tortoise_orm(
        await service.get_statistic()
    )
