# backend/src/models/data.py
from pydantic import BaseModel
from typing import List, Union, Dict, Any

class DataResponse(BaseModel):
    message: str
    data: List[Dict[str, Any]]