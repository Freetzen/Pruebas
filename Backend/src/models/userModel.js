const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "user",
  },
  suspended: {
    type: Boolean,
    default: false,
  },
  banned: {
    type: Boolean,
    default: false,
  },
  plan: {
     type: Schema.ObjectId, 
     ref: "preference"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = model("users", userSchema);

module.exports = userModel;
