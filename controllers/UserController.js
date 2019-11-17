let UserModel = require("../models/UserModel.js");
let GroupModel = require("../models/GroupModel");

module.exports = ({
  all: async (req,res) => {
    let all = await UserModel.find();
    res.json(all);
  },
  create: async ( req,res ) => {
    let newUser = new UserModel(req.body);
    await newUser.save();
    res.json(newUser);
  },
  update: async ( req,res ) => {
    let updatedUser = await UserModel.findOneAndUpdate({name: req.params.name}, req.body);
    res.json(updatedUser);
  },
  delete: async ( req,res ) => {
    let deletedUser = await UserModel.findOneAndDelete({name: req.params.name});
    res.json(deletedUser);
  },
  addGroup: async (req,res) => {
    let currentUser = await UserModel.find({name: req.params.name});
    let groupToAdd = await GroupModel.find({groupName: req.body.groupName});
    currentUser["0"].groups.push(groupToAdd["0"].id);
    groupToAdd["0"].users.push(currentUser["0"].id);
    await groupToAdd["0"].save();
    await currentUser["0"].save();
    res.json(currentUser);
  },
  seeGroups: async (req,res) => {
    let user = await UserModel.find({name: req.params.name}).populate("groups");
    res.json(user);
  }

})