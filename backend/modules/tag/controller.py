from fastapi import APIRouter
from models.item import Item as ItemModel
from sqlalchemy.orm import Session
from core.db import DB
router = APIRouter()

@router.get("/get-all")
def get_all_item(q = None):
    print(q)
    with Session(DB) as session:
        pass
    return "123"