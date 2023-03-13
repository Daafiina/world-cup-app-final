//New edit for test purpose

const Post = require("../models/posts");
const fs = require('fs');

module.exports = class API{
    //fetch all posts
    static async fetchAllPosts(req, res){
        try{
            const posts = await Post.find();
            res.status(200).json(posts);
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }

    //Fetch Post By ID only
    static async fetchPostByID(req, res){
        const id = req.params.id;

        try{
            const post = await Post.findById(id);
            res.status(200).json(post);
        }catch(err){
            res.status(404).json({message:err.message})
        }
    }

    //Create Post
    static async createPost(req, res){
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try{
            await Post.create(post);
            res.status(201).json({message:'Posti eshte shtuar me sukses'})
        }catch(err){
            res.status(404).json({message:err.message});
        }
    
    }


    //update Post
    static async updatePost(req, res){
        const id = req.params.id;
        let new_image="";

        if(req.file){
            new_image = req.file.filename;
            try{
                fs.unlinkSync("./uploads/" + req.body.old_image);
            }catch(err){
                console.log(err);
            }
        }
        else{
            new_image = req.body.old_image;
        }

        const newPost = req.body;
        newPost.image = new_image;

        try{
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({message:"Ky lajm eshte edituar me sukses"});
        }catch(err){
            res.status(404).json({message:err.message});

        }
    }




    //Delete Post
    static async deletePost(req, res){
        const id = req.params.id;
        try{
            const result = await Post.findByIdAndDelete(id);

            if(result.image !=''){

                try{
                    fs.unlinkSync('./uploads/' + result.image);
                }catch(err){
                    console.log(err);
                }
            }
            res.status(200).json({message:'Posti u fshi me sukses nga databaza'})
        }catch(err){
            res.status(404).json({message:err.message});
        }
}
}