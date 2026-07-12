const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, 'Course name is required'],
      minlength: [3, 'Course name must be at least 3 characters'],
      trim: true,
    },
    instructorName: {
      type: String,
      required: [true, 'Instructor name is required'],
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required'],
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
      min: [0.01, 'Duration must be greater than 0'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be less than 0'],
    },
    status: {
      type: String,
      enum: ['Active', 'Draft', 'Archived'],
      required: [true, 'Status is required'],
      default: 'Draft',
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
