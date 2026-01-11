# backend/src/services/data_service.py
from typing import List, Dict, Any

def get_sample_data() -> List[Dict[str, Any]]:
    """
    Returns sample data for the frontend to display.
    """
    return [
        {
            "id": 1,
            "name": "Sample Item 1",
            "description": "This is a sample item"
        },
        {
            "id": 2,
            "name": "Sample Item 2",
            "description": "This is another sample item"
        }
    ]