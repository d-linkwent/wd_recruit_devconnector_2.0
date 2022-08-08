const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://MernAdmin:MernAdmin1@clustermerndtone.8ghkwoo.mongodb.net/?retryWrites=true&w=majority'
    );
  } catch (error) {
    handleError(error);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
