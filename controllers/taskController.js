// const getTask=(req,res)=>{
//     res.render("home")
// }

// const postTask=(req,res)=>{
//     res.send("post task")
// }

// module.exports={
//     getTask,
//     postTask
// }


// http://localhost:5000/task-manager/task


const Task=require("../models/task")


//To fetch multiple documents.
const getTasks=async(req,res)=>{
    try {
        let tasks=await Task.find().lean()
        res.status(200).render("home",{tasks})
    } catch (error) {
        res.status(404).json({
            message:"No task added"
        })
    }
    // res.render("home")
}

const postTask=async(req,res)=>{
    try{
        let{task}=req.body
        console.log(req.body);
        await Task.create({task:task})
        res.redirect("/task-manager/task")
    }catch(error){
        console.log(error);
    }
}

//To fetch single document.
const getTask=async(req,res)=>{
    try{
        let id=req.params.id
        console.log(id);
        const task=await Task.findOne({_id:id}).lean()
        res.status(200).render("update",{task})
    }catch(error){
        console.log(error);
    }
}

const updateTask=async(req,res)=>{
    try{
        let id=req.params.id
        let updateTask=req.body.task
        await Task.updateOne({_id:id},{$set:{task:updateTask}})
        res.status(302).redirect("/task-manager/task")
    }catch(error){
        console.log(error);
    }
}

const deleteTask=async(req,res)=>{
    try{
        let id=req.params.id
        await Task.findOneAndDelete({_id:id});
        res.status(302).redirect("/task-manager/task")
    }catch(error){
        res.status(404).json({
            message:"NO Task Added"
        })
    }
}


module.exports={
    getTasks,
    postTask,
    getTask,
    updateTask,
    deleteTask
}