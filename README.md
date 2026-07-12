# Todo List REST API

A simple RESTful API for managing todos, built with **Node.js**, **Express**, and **MongoDB**.

## Live Demo & Documentation

- **API Base URL:** https://todonodejs-production.up.railway.app
- **Interactive API Docs (Swagger UI):** https://todonodejs-production.up.railway.app/api-docs/
- **Try it:** [https://todonodejs-production.up.railway.app/api/todos](https://todonodejs-production.up.railway.app/api/todos)

> Open the Swagger link to explore and test all endpoints directly from the browser — no Postman needed.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express 5
- **Database:** MongoDB (Mongoose ODM)
- **Documentation:** Swagger UI (swagger-jsdoc + swagger-ui-express)
- **Deployment:** Railway
- **Other:** CORS, dotenv, nodemon

## Features

- Full CRUD operations for todos
- Interactive Swagger UI documentation
- Input validation middleware
- Custom error handling
- Request logging
- Environment-based configuration

## API Endpoints

Base path: `/api/todos`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get a single todo by ID |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |
| GET | `/api-docs/` | Swagger UI documentation |

### Todo Schema

```json
{
  "title": "string (required)",
  "description": "string (optional)",
  "completed": "boolean (default: false)"
}
```

### Example Request

**Create a todo:**

```bash
curl -X POST https://todonodejs-production.up.railway.app/api/todos \
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
git clone https://github.com/doaaelomda/Todo_NodeJs.git
cd Todo_NodeJs
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
│   └── todo.controller.js       # Business logic
├── middleware/
│   ├── logger.middleware.js     # Request logger
│   ├── validate.middleware.js   # Input validation
│   ├── notFound.middleware.js   # 404 handler
│   └── errorHandler.middleware.js
├── models/
│   └── todo.model.js            # Mongoose schema
├── routes/
│   └── todo.routes.js           # Route definitions (with Swagger docs)
└── index.js                     # App entry point
```

## Author

**Doaa Elomda**

- GitHub: [@doaaelomda](https://github.com/doaaelomda)

## License

ISC
