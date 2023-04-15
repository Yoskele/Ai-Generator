import mongoose from 'mongoose';
const { Schema } = mongoose;

const EmailSchema = new Schema(
    {
        email: {
            type: String,
            unique:true,
            required: 'Please enter your email',
        },
    },
{timestamps:true});

let Emails = mongoose.models.email || mongoose.model("email", EmailSchema);

export default Emails;