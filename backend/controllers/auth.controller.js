import {User} from "../models/user.model.js";


export async function signup(req, res)
{
    try{
        const {email, password, username} = req.body;
        if(!email || !password || !username)
        {
            return res.status(400).json({success:false, message: "All fields are required"})
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email))
    {
        return res.status(400).json({success: false, message: "Invalid Email"})
    }
    if(password.length < 6)
        {
            return res.status(400).json({success: false, message: "Password must be at"})

    }
    const existingUserEmail = await User.findOne({email:email})
    if(existingUserEmail)
    {
        return res.status(400).json({success: false, message: "Email already exists"})
    }
    const existingUserName = await User.findOne
    if(existingUserName)
    {
        return res.status(400).json({success: false, message: "Username already exists"})
    }
    const PROFILE = ["/avatar1.png", "/avatar2.png", "/avatar3.png"]
    const image = PROFILE[Math.floor(Math.random()*PROFILE.length)]
    const newUser = new User({
        username: username,
        password: password,
        email: email,
        image: image,
    })
    await newUser.save()
    // This saves a new user to the Mongo DB database


    }

  
    catch(error)
    {
        console.log("There was a error signing up!")
        res.status(500).json({success:false, message: "Internal System error"})
    }
}
export async function login(req, res)
{
    res.send("Login route")
}
export async function logout(req, res)
{
    res.send("Logout route")
}