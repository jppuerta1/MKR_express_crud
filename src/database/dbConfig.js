const mongoose = require('mongoose')

//Se declara variable donde se le asigna la base de datos
const URI = 'mongodb+srv://1234:1234@mircourse.ooyii.mongodb.net/MIRCourse?retryWrites=true&w=majority'

mongoose.connect(URI,{useNewUrlParser:true , useUnifiedTopology:true})//conexiones del mongoose

//opción para que nos de el mensaje del conexión

const db=mongoose.connection

db.once('open',_=>console.log('data base connected in', URI))

db.on('error',error=>console.log(error))
