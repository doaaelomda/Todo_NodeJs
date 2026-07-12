require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const connectDB = require('./config/db');
const courseRoutes = require('./routes/course.routes');
const categoryRoutes = require('./routes/category.routes');
const logger = require('./middleware/logger.middleware');
const notFound = require('./middleware/notFound.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');

const app = express();
const port = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(cors());

// Swagger UI docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customSiteTitle: 'Course API Docs',
  customCss: '.swagger-ui .topbar { display: none }',
}));

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Course API is running',
    docs: '/api-docs',
    endpoints: '/api/courses',
  });
});

app.use('/api/courses', courseRoutes);
app.use('/api/categories', categoryRoutes);
app.use(logger);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
