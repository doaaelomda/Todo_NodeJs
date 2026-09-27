const mongoose = require('mongoose');

// Cache the connection across serverless invocations (Vercel)
let cached = global._mongoose || (global._mongoose = { promise: null });

const connectDB = () => {
  if (mongoose.connection.readyState === 1) return Promise.resolve(mongoose);
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URL, { serverSelectionTimeoutMS: 10000 })
      .then((m) => {
        console.log('Connected to MongoDB');
        return m;
      })
      .catch((err) => {
        cached.promise = null; // allow retry on next request
        throw err;
      });
  }
  return cached.promise;
};

module.exports = connectDB;
