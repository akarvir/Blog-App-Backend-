import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user.routes"
import blogRouter from "./routes/blog.routes"
const app = express();
app.use(express.json())
app.use("api/user", router);  // http:localhost:5002/api/user => in charge of this route 
app.use("/api/blog", blogRouter);
mongoose.connect('mongodb+srv://anshumankarvir:r0V1Ay3lEBdyC3VW@blogger.6lmm6yx.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp').then(app.listen(5002,()=>{console.log("Server is running on port 5002")})).catch((err)=>{console.log(err)})




