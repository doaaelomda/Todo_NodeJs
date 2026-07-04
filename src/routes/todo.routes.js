const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo.controller');
const { validateTodo } = require('../middleware/validate.middleware');

router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.post('/', validateTodo, createTodo);
router.put('/:id', validateTodo, updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
