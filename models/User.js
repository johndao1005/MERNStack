const mongoose = require('mongoose');
const Schema =  mongoose.Schema
const bcrypt = require('bcrypt');

//create Schema

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    pic:{
        type:String,
        required:true,
        default:""
    },
},{
    timestamp:true,//this will check when the user is created and updated
}
);
// start an action below before save, update user with pre('save',)
UserSchema.pre('save',async function(next){
    //check password is modified before moving on to next callback
    if(this.isModified('password')){
        next()
    }
    // bcrypt functionality to encrypt password
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

//decrypt the passworde
//.methods create a method for the Schema which can be used with any child using the schema
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('user', UserSchema)
module.exports = User