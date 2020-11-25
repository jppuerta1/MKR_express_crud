const {Schema,model} = require ('mongoose') //importa schema y model desde mongoose

const TaskSchema = new Schema({
    title:String,
    description:String,
    status:{
        type:Boolean,
        default:false
    }
})

module.exports = model ('task',TaskSchema)