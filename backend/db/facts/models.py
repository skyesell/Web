from tortoise import Tortoise, models, fields

from config import DBPaths

Tortoise.init_models(DBPaths.facts, 'models')


class Fact(models.Model):
    id = fields.BigIntField(pk=True)

    text = fields.TextField(default="", description='Текст')


