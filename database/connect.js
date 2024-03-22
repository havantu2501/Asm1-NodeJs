import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv'
const connect = async () => {
    try {
        const url = dotenv.config().parsed.DB_URL
        // console.log(url)
        await mongoose.connect(url)
        console.log('ket noi thanh cong')
    } catch (error) {
        console.log('loi ket noi')
    }
}
export default connect