# Containerized Full-Stack Web Application

This project implements a containerized full-stack web application with a Next.js frontend and FastAPI backend, deployed using Docker containers orchestrated via Docker Compose.

## Architecture

- **Frontend**: Next.js application with TypeScript
- **Backend**: FastAPI application serving REST APIs
- **Containerization**: Docker containers managed by Docker Compose
- **Communication**: HTTP/JSON between frontend and backend

## Prerequisites

- Docker (version 20.10 or later)
- Docker Compose (version 2.0 or later)

## Getting Started

1. Clone the repository
2. Navigate to the project directory
3. Run `docker-compose up --build` to start both services
4. Access the frontend at `http://localhost:3000`
5. The backend API will be available at `http://localhost:8000`

## Docker Setup Instructions

This application is designed to run in Docker containers. Follow these steps to get it running:

1. Ensure Docker and Docker Compose are installed on your system
2. Navigate to the project root directory
3. Build and start the services:
   ```bash
   docker-compose up --build
   ```
4. The application will be available at:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - Health check: http://localhost:8000/health

## Development

For development, you can run the services with hot reloading enabled:

```bash
docker-compose -f docker-compose.dev.yml up
```

## Project Structure

```
todo-front/
├── backend/
│   ├── src/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── models/
│   │   ├── services/
│   │   └── middleware/
│   ├── tests/
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── utils/
│   ├── styles/
│   ├── tests/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## API Endpoints

- `GET /health` - Returns system health status
- `GET /api/data` - Returns sample data for frontend display

## Testing

### Backend Tests
To run backend tests:
```bash
cd backend
pip install pytest
pytest tests/
```

### Frontend Tests
To run frontend tests:
```bash
cd frontend
yarn test
```