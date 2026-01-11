# API Contract: Containerized Full-Stack Web Application

**Feature**: 001-fullstack-web-app
**Version**: 1.0.0
**Created**: 2026-01-10

## Overview

This document defines the API contracts between the frontend and backend services for the containerized full-stack web application.

## Base URL

The backend API is accessible at the configured base URL, with endpoints relative to this base.

## Health Endpoint

### GET /health

Returns the health status of the backend service.

#### Request

No request body required.

#### Response

**Success Response (200 OK):**

```json
{
  "status": "healthy",
  "timestamp": "2026-01-10T10:00:00.000Z",
  "version": "1.0.0"
}
```

**Properties:**
- `status`: Health status of the service ("healthy" or "unhealthy")
- `timestamp`: ISO 8601 formatted timestamp of the check
- `version`: Current version of the service (optional)

## Sample Data Endpoint

### GET /api/data

Returns sample data for the frontend to display.

#### Request

No request body required.

#### Response

**Success Response (200 OK):**

```json
{
  "message": "Sample data retrieved successfully",
  "data": [
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
}
```

**Properties:**
- `message`: Human-readable message about the response
- `data`: Array of sample data objects

**Error Response (500 Internal Server Error):**

```json
{
  "error": "Internal server error occurred",
  "code": "INTERNAL_ERROR",
  "details": "Additional error details if available"
}
```

## Error Handling

All API endpoints follow the same error response format:

```json
{
  "error": "Human-readable error message",
  "code": "MACHINE_READABLE_ERROR_CODE",
  "details": "Additional details about the error (optional)"
}
```

## HTTP Status Codes

- `200 OK`: Request successful
- `400 Bad Request`: Client sent invalid request
- `404 Not Found`: Requested resource does not exist
- `500 Internal Server Error`: Server-side error occurred