# Course List REST API

A simple RESTful API for managing courses, built with **Node.js**, **Express**, and **MongoDB**.

## Live Demo & Documentation

- **API Base URL:** https://coursenodejs-production.up.railway.app
- **Interactive API Docs (Swagger UI):** https://coursenodejs-production.up.railway.app/api-docs/
- **Try it:** [https://coursenodejs-production.up.railway.app/api/courses](https://coursenodejs-production.up.railway.app/api/courses)

> Open the Swagger link to explore and test all endpoints directly from the browser — no Postman needed.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express 5
- **Database:** MongoDB (Mongoose ODM)
- **Documentation:** Swagger UI (swagger-jsdoc + swagger-ui-express)
- **Deployment:** Railway
- **Other:** CORS, dotenv, nodemon

## Features

- Full CRUD operations for courses
- Interactive Swagger UI documentation
- Input validation middleware
- Custom error handling
- Request logging
- Environment-based configuration

## API Endpoints

Base path: `/api/courses`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses` | Get all courses |
| GET | `/api/courses/:id` | Get a single course by ID |
| POST | `/api/courses` | Create a new course |
| PUT | `/api/courses/:id` | Update a course |
| DELETE | `/api/courses/:id` | Delete a course |
| GET | `/api-docs/` | Swagger UI documentation |

### Course Schema

```json
{
  "title": "string (required)",
  "description": "string (optional)",
  "completed": "boolean (default: false)"
}
```

### Example Request

**Create a course:**

```bash
curl -X POST https://coursenodejs-production.up.railway.app/api/courses \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js", "description": "Build a REST API"}'
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Learn Node.js",
    "description": "Build a REST API",
    "completed": false,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## Getting Started Locally

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/doaaelomda/Course_NodeJs.git
cd Course_NodeJs
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
MONGODB_URL=your_mongodb_connection_string
PORT=3000
```

4. Run the server:

```bash
# Development (with nodemon)
npm run dev

# Production
npm start
```

Server will start at `http://localhost:3000`

Local Swagger docs: `http://localhost:3000/api-docs/`

## Project Structure

```
src/
├── config/
│   ├── db.js                    # MongoDB connection
│   └── swagger.js               # Swagger configuration
├── controllers/
│   └── course.controller.js     # Business logic
├── middleware/
│   ├── logger.middleware.js     # Request logger
│   ├── validate.middleware.js   # Input validation
│   ├── notFound.middleware.js   # 404 handler
│   └── errorHandler.middleware.js
├── models/
│   └── course.model.js          # Mongoose schema
├── routes/
│   └── course.routes.js         # Route definitions (with Swagger docs)
└── index.js                     # App entry point
```

## Author

**Doaa Elomda**

- GitHub: [@doaaelomda](https://github.com/doaaelomda)

## License

ISC
