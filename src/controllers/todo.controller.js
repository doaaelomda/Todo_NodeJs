const Todo = require('../models/todo.model');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true,count: todos.length, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description });
    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    res.status(200).json({ success: true, message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo };
