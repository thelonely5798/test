from fastapi import APIRouter
from models.tier import Tier as TierModel
from sqlalchemy.orm import Session
from core.db import DB
from core.response import ok_with_body

router = APIRouter()

@router.get("/get-all")
def get_all_item(q = None):    
    try:
        with Session(DB) as session:
            tiers =  session.query(TierModel).all()
        return ok_with_body(tiers)
    except Exception as e:
        return "Error"