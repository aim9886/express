const express=require("express")
let taskRouter=express.Router()
const {getTasks,postTask,getTask,updateTask, deleteTask}=require("../controllers/taskController")

//route to create task
taskRouter.get("/task",getTasks)

//route to post task
taskRouter.post("/task",postTask)

//get one task to update
taskRouter.get("/task/:id",getTask)  //press ctrl+getTask to go through it.

//update one task
//taskRouter.put("/task/:id",getTask)

//update one task
taskRouter.put("/task/:id",updateTask)

//to delete task
taskRouter.delete("/task/:id",deleteTask)


module.exports=taskRouter;

// http://localhost:5000/task-manager/task