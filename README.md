# HNG Stage 0 Backend API

A simple Express.js REST API that provides user information and fetches random cat facts.

## Features

- **GET /** - Returns server status and instructions
- **GET /me** - Returns user profile information with a random cat fact
- **404 Handler** - Returns JSON error for undefined routes

## API Endpoints

### GET /
Returns server status and navigation instructions.

**Response:**
```json
{
  "message": "Server is running, visit /me for user data"
}
```

### GET /me
Returns user profile information along with a random cat fact from an external API.

**Response:**
```json
{
  "status": "success",
  "user": {
   "email": "jack@gmail.com",
    "name": "Shintoku Rin",
    "stack": "Node.js/Express"
  },
  "timestamp": "2023-12-21T10:30:56.789Z",
  "fact": "Cats have over 30 muscles controlling their ears."
}
```

**Error Response (if cat fact API fails):**
```json
{
  "status": "error message",
  "user": {
    "email": "jack@gmail.com",
    "name": "Shintoku Rin",
    "stack": "Node.js/Express"
  },
  "timestamp": "2023-12-21T10:30:56.789Z",
  "fact": "Unable to fetch cat fact at this time"
}
```

## Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)

## Installation & Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/Jonniie/stage-0.git
   cd stage-0
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`

## Dependencies

This project uses the following dependencies:

### Production Dependencies
- **express** (^5.1.0) - Fast, unopinionated web framework for Node.js

### Development Dependencies
- **nodemon** (^3.1.10) - Automatically restarts the server when file changes are detected

## Environment Variables

This project currently does not require any environment variables. All configuration is handled within the application code.

## Project Structure

```
stage-0/
├── server.js          # Main application file
├── package.json       # Project configuration and dependencies
├── package-lock.json  # Dependency lock file
└── README.md         # This file
```

## Usage Examples

### Testing with curl

```bash
# Test the root endpoint
curl http://localhost:3000/

# Test the /me endpoint
curl http://localhost:3000/me

# Test a non-existent route
curl http://localhost:3000/nonexistent
```

### Testing with browser

Simply navigate to:
- `http://localhost:3000/` - Server status
- `http://localhost:3000/me` - User profile with cat fact

## Technical Details

- **Framework**: Express.js
- **Language**: JavaScript (ES6 modules)
- **Port**: 3000
- **Content-Type**: application/json
- **External API**: Cat Facts API (https://catfact.ninja/fact)
- **Timestamp Format**: ISO 8601

## Error Handling

The application includes proper error handling:
- Try-catch blocks for external API calls
- Graceful fallback when cat facts API is unavailable
- 404 responses for undefined routes
- Proper HTTP status codes (200, 404, 500)

## Development

The project uses nodemon for development, which automatically restarts the server when you make changes to the code. This makes development faster and more efficient.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

