const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  techs: {
    type: [
      {
        type: String,
      },
    ],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  deploy: {
    type: String,
  },
  repository: {
    type: String,
  },
});

const SchemaProjects =
  mongoose.models.SchemaProjects || mongoose.model("Projects", schema);
module.exports = SchemaProjects;
