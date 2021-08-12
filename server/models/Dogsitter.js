const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const dogsitterSchema = new mongoose.Schema({
  //refer to foreign key from user model
  username: [{
    type: mongoose.Schema.Types.ObjectId, ref : 'User'
  }],
  available: {
      type: Boolean,
      required: true,
      default: false
  },
  availability: { //this is the number of hours available per week
      type: Number,
      required: true,
      default: 0
  },
  description: {
      type: String,
      required: false
  },
  rating: {
    type: Number,
    required: true,
    default: 5
  }
});

dogsitterSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

dogsitterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = User = mongoose.model("dogsitter", dogsitterSchema);
