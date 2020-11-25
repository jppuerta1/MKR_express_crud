const { Router } = require('express')
const tasks = Router()

const {home, getTasks, createTask} = require('../controllers/controllers')

tasks.get('/',home)
tasks.get('/task',getTasks)
tasks.post('/task',createTask)


module.exports=tasks