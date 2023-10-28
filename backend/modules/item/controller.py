from fastapi import APIRouter
from models.item import Item as ItemModel
from models.author import Author as AuthorModel
from models.part import Part as PartModel
from models.tier import Tier as TierModel
from models.theme import Theme as ThemeModel
from sqlalchemy.orm import Session
from sqlalchemy import and_
from core.db import DB
import random
import datetime
from core.response import ok_with_body
router = APIRouter()

@router.get("/get-all")
def get_all_item(q = None, offset = 0, limit = 20, from_price: float = None, to_price: float = None, 
                 theme = None, part = None, tier = None, order_by = None, range_day: int = None):
    items = []
    with Session(DB) as session:
        query = session.query(ItemModel, AuthorModel, TierModel)
        
        if q:
            search = "%{}%".format(q)
            query = query.filter(ItemModel.item_name.like(search))
        
        if from_price and to_price:
            query = query.filter(and_(ItemModel.item_price >= from_price, ItemModel.item_price <= to_price))
        elif to_price:
            query = query.filter(ItemModel.item_price <= to_price)
        elif from_price:
            query = query.filter(ItemModel.item_price >= from_price)

        if theme:
            query = query.filter(ItemModel.theme_id.__eq__(theme))

        if tier:
            query = query.filter(ItemModel.theme_id.__eq__(tier))

        if part:
            query = query.filter(ItemModel.theme_id.__eq__(part))
        
        if range_day:
            current_time = datetime.datetime.utcnow()
            ago  = current_time - datetime.timedelta(days= range_day)
            query = query.filter(ItemModel.created < ago)

        query = query.join(AuthorModel, AuthorModel.author_id == ItemModel.author_id)
        query = query.join(PartModel, PartModel.part_id == ItemModel.part_id)
        query = query.join(TierModel, TierModel.tier_id == ItemModel.tier_id)
        query = query.join(ThemeModel, ThemeModel.theme_id == ItemModel.theme_id)
        
        if order_by == "asc":
            query = query.order_by(ItemModel.item_price.asc())
        if order_by == "desc":
            query = query.order_by(ItemModel.item_price.desc())
        items = query.limit(limit).offset(offset).all()
    return ok_with_body(items)

