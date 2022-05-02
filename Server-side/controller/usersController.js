const { User } = require('../models/user');
const asyncHandler = require('express-async-handler');

//ANCHOR User side 
// Register new users
const registerUser = asyncHandler(async (req, res) => {
    try{
        const { name, email, password } = req.body
        const userExists = await User.findOne({ email })
    
        if (userExists) {
            throw new Error('User already exists')
        }
    
        const newUser = await User.create({
            name,
            email,
            password
        })
    
        if (newUser) {
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
            })
        } else {
            throw new Error('Invalid user data')
        }
    } catch(e){
        res.json(e.message)
    }
    
})

//find 1 user with Id
const userDetail = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

//edit user details user side
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }

})

//Check user log in
const authUser = asyncHandler(async (req, res) => {
    try{
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user && password === user.password){//(await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            })
        } else {
            throw new Error('Invalid email or password')
        }
    } catch(e){
        res.json({error:e.message})
    }
})

module.exports = {
    registerUser,
    authUser,
    userDetail,
    updateUserProfile
}; 
