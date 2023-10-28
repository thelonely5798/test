from fastapi import APIRouter
from models.theme import Theme as ThemeModel
from sqlalchemy.orm import Session
from core.db import DB
from core.response import ok_with_body

router = APIRouter()

@router.get("/get-all")
def get_all_item(q = None):    
    try:
        with Session(DB) as session:
            themes =  session.query(ThemeModel).all()
        return ok_with_body(themes)
    except Exception as e:
        return "Error"