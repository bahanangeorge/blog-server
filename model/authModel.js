const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    emai:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,

    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","other"];
    },
    profilepicture:{
        type:String,
        default:"https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
    },

},{
    timestamps:true
});

module,exports=mongoose.model('User',userSchema);