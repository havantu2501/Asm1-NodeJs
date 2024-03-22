import express from "express";
import { books } from "../models/books.js";
import { CheckProductValidate } from "../validate/books.js"

const router = express.Router()
router.post('/posts', CheckProductValidate, async (req, res) => {
    const book = await new books(req.body).save();
    res.send({ status: true, data: book });
})

router.get('/posts', async (req, res) => {
    const response = await books.find();
    res.send(response)
})
router.put('/posts/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await books.findOneAndUpdate({ _id: id }, body, { new: true });
    res.send(response)
})
router.delete('/posts/:id', async (req, res) => {
    const id = req.params.id;
    const response = await books.findOneAndDelete({ _id: id });
    res.send(response)
})
export default router;