const express = require('express');
const cors = require('cors');
const swaggerSpec = require('./config/swagger');
const todoRoutes = require('./routes/todo.routes');
const logger = require('./middleware/logger.middleware');
const notFound = require('./middleware/notFound.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

// Swagger UI docs (assets from CDN so it works on serverless hosts like Vercel)
const SWAGGER_CDN = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5';
app.get('/api-docs.json', (req, res) => res.json(swaggerSpec));
app.get(['/api-docs', '/api-docs/'], (req, res) => {
  res.type('html').send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Todo API Docs</title>
  <link rel="stylesheet" href="${SWAGGER_CDN}/swagger-ui.css" />
  <style>.swagger-ui .topbar { display: none }</style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="${SWAGGER_CDN}/swagger-ui-bundle.js"></script>
  <script>
    window.ui = SwaggerUIBundle({ url: '/api-docs.json', dom_id: '#swagger-ui' });
  </script>
</body>
</html>`);
});

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Todo API is running',
    docs: '/api-docs',
    endpoints: '/api/todos',
  });
});

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/todos', todoRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
