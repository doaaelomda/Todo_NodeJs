require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todo.routes');
const logger = require('./middleware/logger.middleware');
const notFound = require('./middleware/notFound.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');

const app = express();
const port = process.env.PORT;
connectDB();

app.use(express.json());
app.use(cors())
app.use('/api/todos', todoRoutes);
app.use(logger);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
