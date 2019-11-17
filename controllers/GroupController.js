let UserModel = require("../models/UserModel.js");
let GroupModel = require("../models/GroupModel");

module.exports = {
  all: async (req,res) => {
    let all = await GroupModel.find();
    res.json(all);
  },
  create: async (req,res) => {
    let newGroup = new GroupModel(req.body);
    await newGroup.save();
    res.json(newGroup);
  }
}