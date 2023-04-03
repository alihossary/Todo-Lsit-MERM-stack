const  mongoose  = require("mongoose");

var todoSchema = new mongoose.Schema({

    text :{type : String,
           required : true},

    complete : {type : Boolean,
    default : false},

    timestamp : {type : String,
    default : Date.now}

})
const Todo = mongoose.model("Todo",todoSchema);
module.exports = Todo;
