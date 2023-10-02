import express from 'express';
import {getByUserId,deleteBlog,getbyId,updateBlog,addBlog,getallBlogs} from "../controller/blog.controller";


const blogRouter = express.Router();

blogRouter.get('/', getallBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put('/update/:id',updateBlog);
blogRouter.get('/:id',getbyId);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get('/user/:id',getByUserId)

export default blogRouter;


