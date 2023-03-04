const express = require("express");
const app = express();
const registerController = require("../app/controller/registerController");
const schema = require("../app/services/userService")

const multer = require("multer");
const myStorage = multer.diskStorage({
  destination: (req, file, next) => {
    let path = "/github/src/img/";
    next(null, path);
  },
  filename: (req, file, next) => {
    let file_name = Date.now()+"-"+file.originalname;
    next(null, file_name);
  }
});
const upload = multer({
  // logic of file upload
  storage: myStorage
})

const validateBody = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    // Return a 400 Bad Request response if validation fails
    return res.status(400).send(error.details[0].message);
  }
  next();
};

app.post("/register", upload.single("img"),validateBody, registerController.registerUser);

module.exports = app;
