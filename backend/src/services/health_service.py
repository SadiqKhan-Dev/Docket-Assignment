# backend/src/services/health_service.py

def get_health_status() -> str:
    """
    Returns the current health status of the system.
    """
    # In a real application, you might check database connectivity,
    # external service availability, etc.
    # For this example, we'll just return 'healthy'
    return "healthy"