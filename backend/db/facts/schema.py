from tortoise.contrib.pydantic import pydantic_model_creator

from db.facts.models import Fact

FactsScheme = pydantic_model_creator(Fact, include=('id', 'text'))
