const mongoose = require("mongoose");

const connectDatabase = async (req, res, next) => {
  console.log("connecting database");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    try {
      next();
    } catch {}
    return mongoose;
  } catch (error) {
    console.log("ERROR:", error);
    return error;
  }
};

module.exports = connectDatabase;
