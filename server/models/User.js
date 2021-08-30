const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registerDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  firstName:{
    type: String,
    required: true,
    default: ""
  },
  lastName:{
    type: String,
    required: true,
    default: ""
  },
  location: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required:true
  },
  profilePic: {
    type: String,
    default: "some default pic"
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE', 'NON-BINARY'],
    required: true,
    default: 'MALE'
  },
  description: {
    type: String,
    default: ""
  },
  available: {
    type: Boolean,
    required: true,
    default: false
  },
  availabilityDate: { //user can input date and available hours of that date
    type: Date,
    required: false,
    default: Date.now
  },
  availabilityHour: {
    type: Number,
    required: false,
    default: 1 
  },
  birthDate: {
    type: Date,
    required: false
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = User = mongoose.model("user", userSchema);
