from random import choice
from fastapi import APIRouter

from config import CRUDRouter
from db.facts.models import Fact
from db.facts.schema import FactsScheme

facts_router = CRUDRouter(
    FactsScheme,
    Fact,
    prefix='/facts',
    tags=['Факты']
)

@facts_router.get('/get_random/', response_model=FactsScheme)
async def get_random():
    return await FactsScheme.from_tortoise_orm(
        choice(
            await Fact.all()
        )
    )