# backend/src/routes/data.py
from fastapi import APIRouter, HTTPException
from ..models.data import DataResponse
from ..services.data_service import get_sample_data

router = APIRouter()

@router.get("/data", response_model=DataResponse)
async def get_data():
    """
    Retrieve sample data for the frontend to display.
    """
    try:
        data = get_sample_data()
        return DataResponse(message="Sample data retrieved successfully", data=data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))