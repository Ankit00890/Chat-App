import jwt from "jsonwebtoken";

const token = (userId,res)=>{
    const verify = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    } )
    res.cookie("jwt", verify, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",

    })

} 

export default token