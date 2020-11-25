const express=require('express')
const routes = require('./routes/routes')
const path = require ('path')//da las rutas relativas donde esté cualquier archivo
const hbs = require ('express-handlebars')


const app = express()
//concect base de datos
require('./database/dbConfig')

//configuración de las vistas
app.set ('views',path.join(__dirname,'views'))
app.engine('.hbs',hbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))

app.set('view engine','.hbs')

// middlewares
app.use(express.urlencoded({extended:true}))//cuando enviamos un body se decodifique en el objeto y lo devuelve en el name del html

//routes
app.use(routes)

app.listen(3000,()=>console.log('server running in port 3000'))