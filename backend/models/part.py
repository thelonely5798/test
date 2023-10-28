from sqlalchemy import Column, Date, Integer, String, text
from sqlalchemy.orm import declarative_base

Base = declarative_base()





class Part(Base):
    __tablename__ = 'Part'

    part_id = Column(Integer, primary_key=True)
    part_value = Column(String(255), nullable=False)

