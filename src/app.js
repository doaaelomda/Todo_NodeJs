const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const todoRoutes = require('./routes/todo.routes');
const logger = require('./middleware/logger.middleware');
const notFound = require('./middleware/notFound.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

// Swagger UI docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customSiteTitle: 'Todo API Docs',
  customCss: '.swagger-ui .topbar { display: none }',
}));

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
