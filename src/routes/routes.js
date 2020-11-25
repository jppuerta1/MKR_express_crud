const { Router } = require('express')
const tasks = Router()

const {home, getTasks, createTask, deleteTask} = require('../controllers/controllers')

tasks.get('/',home)
tasks.get('/task',getTasks)
tasks.post('/task',createTask)
tasks.delete('/task/:id',deleteTask)


module.exports=tasks