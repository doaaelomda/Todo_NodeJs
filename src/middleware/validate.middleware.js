const STATUS_VALUES = ['Active', 'Draft', 'Archived'];

const validateCourse = (req, res, next) => {
  const { courseName, instructorName, category, duration, price, status, description } = req.body;

  if (!courseName || courseName.trim().length < 3) {
    return res
      .status(400)
      .json({ success: false, message: 'Course name is required and must be at least 3 characters' });
  }
  if (!instructorName || instructorName.trim() === '') {
    return res.status(400).json({ success: false, message: 'Instructor name is required' });
  }
  if (!category) {
    return res.status(400).json({ success: false, message: 'Category is required' });
  }
  if (duration === undefined || duration === null || duration === '' || isNaN(duration) || Number(duration) <= 0) {
    return res
      .status(400)
      .json({ success: false, message: 'Duration is required and must be a number greater than 0' });
  }
  if (price === undefined || price === null || price === '' || isNaN(price) || Number(price) < 0) {
    return res
      .status(400)
      .json({ success: false, message: 'Price is required and must be a number not less than 0' });
  }
  if (!status || !STATUS_VALUES.includes(status)) {
    return res
      .status(400)
      .json({ success: false, message: `Status is required and must be one of: ${STATUS_VALUES.join(', ')}` });
  }
  if (description && description.length > 500) {
    return res
      .status(400)
      .json({ success: false, message: 'Description cannot exceed 500 characters' });
  }

  next();
};

const validateCategory = (req, res, next) => {
  const { name } = req.body;
  if (!name || name.trim() === '') {
    return res.status(400).json({ success: false, message: 'Name is required' });
  }
  next();
};

module.exports = { validateCourse, validateCategory };
