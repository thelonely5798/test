from sqlalchemy import select, create_engine
from sqlalchemy.orm import Session
from sqlalchemy import text



DB = create_engine("postgresql://postgres:123456789@db/mydatabase")


