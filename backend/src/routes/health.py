# backend/src/routes/health.py
from fastapi import APIRouter
from datetime import datetime
from ..models.health import HealthResponse
from ..services.health_service import get_health_status

router = APIRouter()

@router.get("/", response_model=HealthResponse)
async def health_check():
    """
    Health check endpoint to verify the backend service is running.
    """
    status = get_health_status()
    timestamp = datetime.utcnow().isoformat() + "Z"
    
    return HealthResponse(status=status, timestamp=timestamp)