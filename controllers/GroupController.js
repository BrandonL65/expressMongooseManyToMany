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
  },
  update: async (req,res) => {
    let updatedGroup = await GroupModel.findOneAndUpdate({groupName: req.params.name}, req.body);
    res.json(updatedGroup);
  },
  addUser: async (req,res) => {
    let foundGroup = await GroupModel.find({groupName: req.params.name});
    let foundUser = await UserModel.find({name: req.body.name});
    foundGroup[0].users.push(foundUser[0].id);
    foundUser[0].groups.push(foundGroup[0].id);
    await foundGroup[0].save();
    await foundUser[0].save();
    res.json(foundGroup[0]);
  },
  seeUsers: async (req,res) => {
    let groupWithUsers = await GroupModel.find({groupName: req.params.name}).populate("users");
    res.json(groupWithUsers);
  }
}