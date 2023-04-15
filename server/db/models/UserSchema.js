import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        walletID:{
            type:String,
        },
        render:{
            type:Number,
        },
    },
{timestamps:true});

let Users = mongoose.models.users || mongoose.model("users", userSchema);

export default Users;

// completed:{
//     type:Boolean,
//     required:true,
//     default:false,
// }