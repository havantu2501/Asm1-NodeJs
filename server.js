import connect from "./database/connect.js"
import router from "./router/books.js"
import express from "express"


const app = express()
const port = 8080;
app.use(express.json())
app.use('/api', router)



app.listen(port, async () => {
    await connect()
    console.log(`Endpoint http://localhost:${port}/api/posts`);
}) 