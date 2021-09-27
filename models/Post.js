const mongoose=require("mongoose")

const postschema=mongoose.Schema({
    username:{
        type:String,
        require,
    },
    password:{
        type:String,
        require:true
    },
    phone_num:{
        type:Number,
        require:true
    }
});

module.exports=mongoose.model("Posts",postschema);
