// console.log("task manager");


const express=require("express")
const mongoose=require("mongoose")
const {engine}=require("express-handlebars")
const methodOverride=require("method-override")
const taskRouter=require("./routes/taskRoutes")
let app=express();
let PORT=5000;

async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Task-manager")
    console.log("MongoDB connected");
}
db()


//"/"---root route in the case of express
//"/task-manager"--root route in the case of task-manager

//router-level-middleware
// app.use("/task-manager",taskRouter)
// http://localhost:5000/task-manager/task

//inbuilt middleware

app.use(express.static("public"))

//to use the form data

app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))

//mount template engine

app.engine("handlebars",engine())
app.set("view engine", "handlebars")

//router-level-middleware

app.use("/task-manager",taskRouter)


app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`Server is running on ${PORT}`);
})


////////////////////////////////////////////////////////////////////////////////////////////////////

// .dotenv project

// if(process.env.NODE!=="production"){
//     require("dotenv").config()
// }

// const express=require("express")
// let app=express()

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.listen(process.env.PORT,(err)=>{
//     if(err)console.log(err);
//     console.log(`Server is running on port ${process.env.PORT}`);
// })


////////////////////////////////////////////////////////////////////////////////////////////////


