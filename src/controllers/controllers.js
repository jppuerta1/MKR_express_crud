const Task = require ('../models/models')

const home = (req,res)=>{
    res.render('home')
}

const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.render('tasksView',{tasks});
  }
  

const createTask =async(req,res)=>{
    console.log(req.body)
    const task = new Task(req.body)
    await task.save('create task')
    res.send('create task')//siempre tiene que llevar la respuesta
}

module.exports = {home, getTasks, createTask}