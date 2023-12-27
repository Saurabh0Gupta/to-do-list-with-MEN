const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/todo')

const userSchema=mongoose.Schema({
  task:String,
  datecreated:{
    type:Date,
    default:Date.now()
  }
})

module.exports=mongoose.model("task",userSchema);