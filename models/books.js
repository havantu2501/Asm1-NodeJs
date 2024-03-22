import mongoose from "mongoose"

const pschema = mongoose.Schema({
    title: String,
    image: String,
    category: Number,
    description: String,
    author: String

},
    {
        timestams: true
    })
export const books = mongoose.model('books', pschema)