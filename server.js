const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Connect to DB
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log("Connected")
})

//Middleware 
app.use(cors());
app.use(express.json());

//Routes 
const UserController = require("./controllers/UserController.js");
app.get("/users", UserController.all);
app.get("/users/create", UserController.create);
app.get("/users/update/:name", UserController.update);
app.get("/users/delete/:name", UserController.delete);
app.post("/users/:name/addGroup", UserController.addGroup);
app.get("/users/:name/seeGroups", UserController.seeGroups);
const GroupController = require("./controllers/GroupController.js");
app.get("/groups", GroupController.all);
app.get("/groups/create", GroupController.create);
app.get("/groups/:name/update", GroupController.update);
app.post("/groups/:name/addUser", GroupController.addUser);
app.get("/groups/:name/seeUsers", GroupController.seeUsers);
//Connect to SERVER
app.listen(PORT);