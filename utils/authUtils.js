const bcrypt=require("bcrpt");



//! hash password


exports.hashPassword=async(password)=>{
    try{
        const salt=await bcrypt.genSalt(12);
        const hash=await bcrypt.hash(password,salt);
        return hash;

    }catch (err){
        console.log(err);
    }
}

//! compare password

exports.comparePassword=async (password,hashedPassword)=> {
    try{
        constresult=await bcrypt.compare(password,hashPassword);
        return result;
    }catch(err){
        console.log(err);
    }
}