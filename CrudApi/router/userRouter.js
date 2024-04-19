

const express = require("express");
const { CreateUser, getAllUsers, updateUser, deleteUser } = require("../controller/userController");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/InsertUser", upload.array('file', 5), CreateUser); 

router.get("/getAllUsers", getAllUsers);

router.put("/updateUser/:userId", upload.array('file', 5), updateUser);

router.delete("/deleteUser/:userId", deleteUser);

module.exports = router;
