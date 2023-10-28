from sqlalchemy import Column, Date, Integer, String, text, Numeric
from sqlalchemy.orm import declarative_base,relationship

Base = declarative_base()



class Item(Base):
    __tablename__ = 'Item'

    item_id = Column(Integer, primary_key=True)
    theme_id = Column(Integer, nullable=False)
    tier_id = Column(Integer, nullable=False)
    author_id = Column(Integer, nullable=False)
    part_id = Column(Integer, nullable=False)
    item_name = Column(String(255))
    created = Column(Date, server_default=text('CURRENT_DATE'))
    updated = Column(Date, server_default=text('CURRENT_DATE'))
    item_price = Column(Numeric(10, 2))
    item_image = Column(String(255))

    