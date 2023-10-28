from sqlalchemy import Column, Date, Integer, String, text
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Theme(Base):
    __tablename__ = 'Theme'

    theme_id = Column(Integer, primary_key=True)
    theme_value = Column(String(255), nullable=False)
