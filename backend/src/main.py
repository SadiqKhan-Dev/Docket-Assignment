# backend/src/main.py
from fastapi import FastAPI
from .routes.health import router as health_router
from .routes.data import router as data_router
from .middleware.error_handler import register_error_handlers

app = FastAPI(title="Full-Stack Web Application Backend", version="1.0.0")

# Register routers
app.include_router(health_router, prefix="/health", tags=["health"])
app.include_router(data_router, prefix="/api", tags=["data"])

# Register error handlers
register_error_handlers(app)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Full-Stack Web Application Backend"}