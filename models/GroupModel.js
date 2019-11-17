let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let GroupModel = new Schema({
  groupName: String,
  topic: String,
  users: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }]
})

module.exports = mongoose.model("group", GroupModel);