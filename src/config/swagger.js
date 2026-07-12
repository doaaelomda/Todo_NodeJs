const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Course List API',
      version: '1.0.0',
      description:
        'A simple RESTful API for managing courses, built with Node.js, Express, and MongoDB.',
      contact: {
        name: 'Doaa Elomda',
        url: 'https://github.com/doaaelomda/Course_NodeJs',
      },
    },
    servers: [
      {
        url: 'https://coursenodejs-production.up.railway.app',
        description: 'Production server (Railway)',
      },
      {
        url: 'http://localhost:3000',
        description: 'Local development server',
      },
    ],
    components: {
      schemas: {
        Course: {
          type: 'object',
          required: ['courseName', 'instructorName', 'category', 'duration', 'price', 'status'],
          properties: {
            _id: {
              type: 'string',
              description: 'Auto-generated MongoDB ID',
              example: '65f1a2b3c4d5e6f7a8b9c0d1',
            },
            courseName: {
              type: 'string',
              description: 'Course name, minimum 3 characters',
              example: 'Angular Fundamentals',
            },
            instructorName: {
              type: 'string',
              description: 'Instructor name',
              example: 'Ahmed Ali',
            },
            category: {
              type: 'string',
              description: 'Category ID',
              example: '65f1a2b3c4d5e6f7a8b9c0d2',
            },
            duration: {
              type: 'number',
              description: 'Duration in hours, must be greater than 0',
              example: 20,
            },
            price: {
              type: 'number',
              description: 'Price, must not be less than 0',
              example: 99.99,
            },
            status: {
              type: 'string',
              enum: ['Active', 'Draft', 'Archived'],
              default: 'Draft',
            },
            description: {
              type: 'string',
              description: 'Optional, up to 500 characters',
              example: 'Build modern web apps with Angular',
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
        CourseInput: {
          type: 'object',
          required: ['courseName', 'instructorName', 'category', 'duration', 'price', 'status'],
          properties: {
            courseName: {
              type: 'string',
              example: 'Angular Fundamentals',
            },
            instructorName: {
              type: 'string',
              example: 'Ahmed Ali',
            },
            category: {
              type: 'string',
              example: '65f1a2b3c4d5e6f7a8b9c0d2',
            },
            duration: {
              type: 'number',
              example: 20,
            },
            price: {
              type: 'number',
              example: 99.99,
            },
            status: {
              type: 'string',
              enum: ['Active', 'Draft', 'Archived'],
              example: 'Draft',
            },
            description: {
              type: 'string',
              example: 'Build modern web apps with Angular',
            },
          },
        },
        Category: {
          type: 'object',
          required: ['name'],
          properties: {
            _id: {
              type: 'string',
              description: 'Auto-generated MongoDB ID',
              example: '65f1a2b3c4d5e6f7a8b9c0d2',
            },
            name: {
              type: 'string',
              example: 'Web Development',
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
        CategoryInput: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              example: 'Web Development',
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
