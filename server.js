const express= require("express")
const app= express()
const PORT= 8000
app.use(express.json())

const users= []

app.get("/",(req,res)=>{
    return res.status(200).json({message:"Welcome to the backend"})
})

app.post("/register",(req,res)=>{
    try{
        const{email, password, username, DOB}= req.body
        if(!username)
            return res.status(400).json({message:"Username cannot be empty"})
        if (!email)
            return res.status(400).json({message:"Email cannot be empty"})
        if(password.length < 8 || password.length>16)
            return res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"}
        )
        users.push({username, email, password, DOB})
        return res.status(201).json({message:"User created succesfully",users:users})
    }catch(er){
        return res.status(500).json({message:"Internal server error.", error:err.message})
    }
})





app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/`)
})