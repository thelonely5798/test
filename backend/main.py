from typing import Annotated
from modules.item.controller import router  as item_controller
from modules.theme.controller import router  as theme_controller
from modules.tier.controller import router  as tier_controller
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [    
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(item_controller, prefix="/api/item", tags=["item"])
app.include_router(theme_controller, prefix="/api/theme", tags=["theme"])
app.include_router(tier_controller, prefix="/api/tier", tags=["tier"])


