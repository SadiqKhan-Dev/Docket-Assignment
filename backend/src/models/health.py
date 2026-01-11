# backend/src/models/health.py
from pydantic import BaseModel
from typing import Optional

class HealthResponse(BaseModel):
    status: str
    timestamp: str
    version: Optional[str] = None