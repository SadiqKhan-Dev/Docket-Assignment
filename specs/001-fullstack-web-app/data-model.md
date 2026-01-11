# Data Model: Containerized Full-Stack Web Application

**Feature**: 001-fullstack-web-app
**Created**: 2026-01-10

## Frontend Application

### Components
- **Pages**: Main application views (e.g., index, about)
- **UI Components**: Reusable elements (buttons, cards, forms)
- **API Utilities**: Functions for making requests to backend
- **Static Assets**: Images, stylesheets, etc.

### State
- **Client-Side State**: Temporary UI state managed by React/Next.js
- **Configuration**: Environment-based settings (API URLs, feature flags)

### Configuration
- **NEXT_PUBLIC_API_BASE_URL**: Base URL for backend API calls
- **NEXT_PUBLIC_APP_ENV**: Application environment (dev, prod)

## Backend Application

### Routes
- **Health Endpoint**: `/health` - Returns system status
- **Sample Data Endpoint**: `/api/data` - Returns sample data for frontend display

### Models
#### Health Response Model
```typescript
{
  "status": "healthy" | "unhealthy",
  "timestamp": "ISO 8601 datetime string",
  "version"?: "application version"
}
```

#### Sample Data Response Model
```typescript
{
  "message": "string",
  "data": any // Array of objects or primitive value
}
```

### Services
- **Health Service**: Checks system status and returns health information
- **Data Service**: Provides sample data for frontend consumption

## API Communication Layer

### Request Format
- **Method**: GET, POST, PUT, DELETE as appropriate
- **Headers**: 
  - `Content-Type: application/json`
  - `Accept: application/json`
- **Body**: JSON payload as required by endpoint

### Response Format
- **Status Codes**: Standard HTTP status codes (200, 400, 404, 500, etc.)
- **Body**: JSON response matching endpoint schema
- **Error Format**:
```typescript
{
  "error": "error message",
  "code": "error code",
  "details"?: "additional error details"
}
```

## Container Configuration

### Environment Variables
- **PORT**: Port number for the service to listen on
- **API_BASE_URL**: Base URL for internal service communication
- **LOG_LEVEL**: Logging verbosity level