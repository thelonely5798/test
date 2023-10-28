from sqlalchemy import Column, Date, Integer, String, text
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Author(Base):
    __tablename__ = 'Author'

    author_id = Column(Integer, primary_key=True)
    author_name = Column(String(255))
    author_avatar = Column(String(255))
