const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const dogownerSchema = new mongoose.Schema({

  //refer to foreign key from user model
  username: [{
    type: mongoose.Schema.Types.ObjectId, ref : 'User'
  }],
  

});

dogownerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

dogownerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = User = mongoose.model("dogowner", dogownerSchema);
