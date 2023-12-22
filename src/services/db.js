const mongoose = require("mongoose");

const connectDatabase = async () => {
  console.log("connecting database");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    return mongoose;
  } catch (error) {
    console.log("ERROR:", error);
    return error;
  }
};

module.exports = connectDatabase;
