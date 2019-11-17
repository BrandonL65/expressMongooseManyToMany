let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserModel = new Schema({
  name: String,
  age: Number,
  groups: [{
    type: Schema.Types.ObjectId,
    ref: "group"
  }]
})

module.exports = mongoose.model("user", UserModel);