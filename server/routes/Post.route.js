//New edit for test purpose

const express = require("express");
const router = express.Router();
const API = require('../controllers/PostApi')
const multer = require('multer');

//multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads");
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage:storage,
}).single("image");


router.get("/get-posts", API.fetchAllPosts);
router.get("/get-post-byID/:id", API.fetchPostByID);
router.post("/create-post",upload, API.createPost);
router.patch("/update-post/:id",upload, API.updatePost);
router.delete("/delete-post/:id", API.deletePost);

module.exports = router; 