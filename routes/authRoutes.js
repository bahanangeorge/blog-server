const express=require("express");

const router=expres.Router();


const{resgisterUser,loginUser}=require('../controller/authController');

router.post("/register",registerUser);
