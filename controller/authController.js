const User=require('../mode/authModel');
const{hashPassword}=require("../utils/authUtils");
const jwt=require("jsonwebtoken");

//!Register User

exports.registerUser=async(req,res)=>{
   try{

    //! reg body

    const{email,password,name,gender,profilepicture}=req.body;

    console.log(req.body);


    //check if user already exists

    const existingUser=await User.findOne({email})
    if(existingUser){
        return res.status(400).json({
             message:"User already exists",
             success:false,
             statusCode:0,
        });
    }
    //validation
     if(!email||!password||!name||!gender){
        return res.status(400).json({
            message:"please fill all the fields",
            success:false,
            statusCode:0,
        });
     }

     if(password.length<6){
        return res.status(400).json({
            message:"Password must be atleast 6 characters",
            success:false,
            statusCode:0,
        });
     }

     //hash password

     const hashedPassword=await hashPassword(password);

     //create user

     constnewUser=new User({
      email,
      password:hashedPassword,
      name,
      gender,
      profilepicture,
     })

     //Save user

     const savedUser=await newUser.save();


     // Create jwt token

     const token=jwt.sign(
        {userid:savedUser,id},
        process.env.JWT_SECRET,
        {expiresIn:"7d"},
     )

     //Response

     res.status(200).json({
        message:"User registered successfully",
        success:true,
        statusCode:1,
        data:{
            id:savedUser.id,
            name:savedUser.name,
            email:savedUser.email,
            token,
        
        },

     });




   }catch(err){
         
     res.status(500).json({
        message:"Server Error",
        success:false,
        statusCode:0,

     });
   };
};

//Login User

exports.loginUser=async(req,res)=>{};