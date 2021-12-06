from tortoise.contrib.pydantic import pydantic_model_creator
from db.tasks.models import Statistic, Task

StatisticScheme = pydantic_model_creator(Statistic, include=('id', 'created', 'finished', 'deleted'))

TaskCreateScheme = pydantic_model_creator(Task, include=('text', ))
TaskGetScheme = pydantic_model_creator(Task, include=('id', 'text', 'finished'))
