Todo List REST API

A simple RESTful API for managing todos, built with Node.js, Express, and MongoDB.

Live Demo

Base URL: https://todonodejs-production.up.railway.app

Try it: https://todonodejs-production.up.railway.app/api/todos
        

Tech Stack


Runtime: Node.js
Framework: Express 5
Database: MongoDB (Mongoose ODM)
Deployment: Railway
Other: CORS, dotenv, nodemon


Features


Full CRUD operations for todos
Input validation middleware
Custom error handling
Request logging
Environment-based configuration


API Endpoints

Base path: /api/todos

MethodEndpointDescriptionGET/api/todosGet all todosGET/api/todos/:idGet a single todo by IDPOST/api/todosCreate a new todoPUT/api/todos/:idUpdate a todoDELETE/api/todos/:idDelete a todo

Todo Schema

json{
  "title": "string (required)",
  "description": "string (optional)",
  "completed": "boolean (default: false)"
}

Example Request

Create a todo:

bashcurl -X POST https://todonodejs-production.up.railway.app/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js", "description": "Build a REST API"}'

Response:

json{
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

Getting Started Locally

Prerequisites


Node.js (v18 or higher)
MongoDB (local or Atlas)


Installation


Clone the repository:


bashgit clone https://github.com/doaaelomda/Todo_NodeJs.git
cd Todo_NodeJs


Install dependencies:


bashnpm install


Create a .env file in the root directory:


envMONGODB_URL=your_mongodb_connection_string
PORT=3000


Run the server:


bash# Development (with nodemon)
npm run dev

# Production
npm start

Server will start at http://localhost:3000

Project Structure

src/
├── config/
│   └── db.js                    # MongoDB connection
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
│   └── todo.routes.js           # Route definitions
└── index.js                     # App entry point

Author

Doaa Elomda


GitHub: @doaaelomda


License

ISC
