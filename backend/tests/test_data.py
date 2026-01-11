# backend/tests/test_data.py
import pytest
from fastapi.testclient import TestClient
from src.main import app

client = TestClient(app)

def test_data_endpoint():
    """Test the data endpoint returns correct structure"""
    response = client.get("/api/data")
    assert response.status_code == 200
    data = response.json()
    assert "message" in data
    assert "data" in data
    assert isinstance(data["data"], list)
    assert len(data["data"]) > 0
    
    # Check that each item in the data list has required fields
    for item in data["data"]:
        assert "id" in item
        assert "name" in item
        assert "description" in item