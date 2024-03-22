import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,

},
    {
        timestamps: true
    }
);
export const User = mongoose.model('users', UserSchema);