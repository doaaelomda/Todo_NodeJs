const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo List API',
      version: '1.0.0',
      description:
        'A simple RESTful API for managing todos, built with Node.js, Express, and MongoDB.',
      contact: {
        name: 'Doaa Elomda',
        url: 'https://github.com/doaaelomda/Todo_NodeJs',
      },
    },
    servers: [
      {
        url: 'https://todonodejs-production.up.railway.app',
        description: 'Production server (Railway)',
      },
      {
        url: 'http://localhost:3000',
        description: 'Local development server',
      },
    ],
    components: {
      schemas: {
        Todo: {
          type: 'object',
          required: ['title'],
          properties: {
            _id: {
              type: 'string',
              description: 'Auto-generated MongoDB ID',
              example: '65f1a2b3c4d5e6f7a8b9c0d1',
            },
            title: {
              type: 'string',
              description: 'Todo title',
              example: 'Learn Node.js',
            },
            description: {
              type: 'string',
              description: 'Todo description',
              example: 'Build a REST API with Express',
            },
            completed: {
              type: 'boolean',
              description: 'Completion status',
              default: false,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        TodoInput: {
          type: 'object',
          required: ['title'],
          properties: {
            title: {
              type: 'string',
              example: 'Learn Node.js',
            },
            description: {
              type: 'string',
              example: 'Build a REST API with Express',
            },
            completed: {
              type: 'boolean',
              example: false,
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'string',
              example: 'Error message',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
