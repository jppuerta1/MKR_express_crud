const Task = require ('../models/models')

const home = (req,res)=>{
    res.render('home')
}

const getTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('tasksView',{tasks});
  }
  

const createTask =async(req,res)=>{
    console.log(req.body)
    const task = new Task(req.body)
    await task.save('create task')
    res.redirect('/task')//siempre tiene que llevar la respuesta
}

const deleteTask = async(req,res)=>{
    
    const {id} = req.params
    await Task.findByIdAndDelete(id)
    res.redirect('/task')
}
module.exports = {home, getTasks, createTask, deleteTask}