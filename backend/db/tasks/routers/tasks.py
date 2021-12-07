from typing import List

from fastapi import APIRouter
from fastapi.params import Depends

from db.tasks.models import Task
from db.tasks.schemas import TaskGetScheme, TaskCreateScheme
from db.tasks.services.tasks import TaskService
from db.users.models import User
from db.users.services.services import fastapi_users_service

tasks_router = APIRouter()


# список задач
@tasks_router.get('/', response_model=List[TaskGetScheme])
async def get_all(user: User = Depends(fastapi_users_service.get_current_active_user)):
    service = TaskService(user.id)

    tasks = await service.get_tasks()

    return await TaskGetScheme.from_queryset(tasks)


# создание
@tasks_router.post('/', response_model=TaskGetScheme)
async def create(scheme: TaskCreateScheme, user: User = Depends(fastapi_users_service.get_current_active_user)):
    service = TaskService(user.id)

    task = await service.create_tasks(scheme.text)

    return await TaskGetScheme.from_tortoise_orm(task)


# удаление
@tasks_router.delete('/{task_id}')
async def delete(task_id: int, user: User = Depends(fastapi_users_service.get_current_active_user)):
    service = TaskService(user.id)
    task = await Task.get(id=task_id)

    await service.delete_task(task)


# завершение
@tasks_router.put('/{task_id}', response_model=TaskGetScheme)
async def put(task_id: int, user: User = Depends(fastapi_users_service.get_current_active_user)):
    service = TaskService(user.id)
    task = await Task.get(id=task_id)

    task = await service.check_task(task)

    return await TaskGetScheme.from_tortoise_orm(task)
