from sqlalchemy import Column, Date, Integer, String, text
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Tier(Base):
    __tablename__ = 'Tier'

    tier_id = Column(Integer, primary_key=True)
    tier_value = Column(String(255), nullable=False)