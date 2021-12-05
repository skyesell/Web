from tortoise import Tortoise, models, fields

from config import DBPaths

Tortoise.init_models(DBPaths.tasks, 'models')


class Task(models.Model):
    id = fields.IntField(pk=True)
    user = fields.ForeignKeyField(
        'models.UserModel', related_name='task',
        on_delete=fields.CASCADE, description='Исполнитель'
    )
    text = fields.TextField(default="", description='Текст')
    finished = fields.BooleanField(default=False, description='Выполнено')

    class Meta:
        ordering = ["-id"]


class Statistic(models.Model):
    id = fields.IntField(pk=True)
    user = fields.OneToOneField(
        'models.UserModel', related_name='statistic',
        on_delete=fields.CASCADE, description='Статистика'
    )

    created = fields.IntField(default=0, description='Количество созданных')
    finished = fields.IntField(default=0, description='Количество завершенных')
    deleted = fields.IntField(default=0, description='Количество удаленных')