import mangoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type:Sring,
        required:true
    },
    email: {
        type:Sring,
        required:true,
        unique:true
    },
    passord: {
        type:Sring,
        required:true
    },
    isAdmin: {
        type:Sring,
        default:true
    },
},{
    timestamps:true,
})

const User = mongoose.model('User',userSchema);

export default User 