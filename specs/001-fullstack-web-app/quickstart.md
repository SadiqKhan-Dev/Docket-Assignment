# Quickstart Guide: Containerized Full-Stack Web Application

**Feature**: 001-fullstack-web-app
**Created**: 2026-01-10

## Prerequisites

Before getting started, ensure you have the following installed:

- Docker (version 20.10 or later)
- Docker Compose (version 2.0 or later)
- Git (for cloning the repository)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Navigate to the Project Directory

```bash
cd todo-front
```

### 3. Build and Start the Services

Run the following command to build the Docker images and start the services:

```bash
docker-compose up --build
```

This will:
- Build the frontend and backend Docker images
- Start both services
- Set up networking between them

### 4. Access the Application

Once the services are running:

- **Frontend**: Access the web application at `http://localhost:3000`
- **Backend API**: The API is available at `http://localhost:8000`
- **Health Check**: Verify the backend is running at `http://localhost:8000/health`

### 5. Stop the Services

To stop the running services, press `Ctrl+C` in the terminal where `docker-compose` is running, or run:

```bash
docker-compose down
```

## Development Mode

For development, you can run the services with hot reloading enabled:

```bash
docker-compose -f docker-compose.dev.yml up
```

This configuration mounts the source code as volumes in the containers, allowing changes to be reflected immediately without rebuilding.

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Error: "port is already allocated"
   - Solution: Ensure no other services are running on ports 3000 or 8000

2. **Docker Build Failures**
   - Error: "failed to build image"
   - Solution: Check Dockerfile for syntax errors and ensure all dependencies are available

3. **Frontend Cannot Connect to Backend**
   - Error: Network issues between containers
   - Solution: Verify that the `NEXT_PUBLIC_API_BASE_URL` environment variable is set correctly in the Docker Compose file

### Useful Commands

- **View Logs**: `docker-compose logs -f`
- **Rebuild Images**: `docker-compose up --build --force-recreate`
- **Clean Up**: `docker-compose down -v` (removes volumes as well)

## Next Steps

After successfully starting the application:

1. Visit the frontend at `http://localhost:3000` to see the main page
2. Verify the backend health at `http://localhost:8000/health`
3. Test the sample data endpoint at `http://localhost:8000/api/data`
4. Modify the source code to begin implementing your specific features