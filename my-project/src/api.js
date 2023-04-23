import axios from "axios";
 const url = "http://localhost:4000/api/post/";
const url1 = "http://127.0.0.1:4000/api/post/get-post-byID";
const url2 = "http://127.0.0.1:4000/api/post/create-post";
const url3 = "http://127.0.0.1:4000/api/post/update-post";
const url4 = "http://127.0.0.1:4000/api/post/delete-post";
export default class API{
    //get all posts from server
    static async getAllPost(){
        
        const res = await axios.get(url);
        console.log(url)
        return res.data;
        
    }
    
     //get single post from server
     static async getPostByID(id){
        const res = await axios.get(`${url1}/${id}`);
        return res.data;
    }
    
     //To insert post into database
     static async addPost(post){
        const res = await axios.post(url2, post);
        return res.data;
    }
    
     //To update post into database
     static async updatePost(id, post){
        const res = await axios.patch(`${url3}/${id}`, post);
        return res.data;
    }
    
 //To delete a post
 static async deletePost(id){
    const res = await axios.delete(`${url4}/${id}`);
    return res.data;
}
}