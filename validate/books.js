import Joi from "joi";

const ProjectObject = Joi.object({
    title: Joi.string().required().empty().messages({
        "any.required": "Tiêu đề ko để trốngg",
        "string.empty": "Tiêu đề ko đúng định dạnh"
    }),
    image: Joi.string().required().empty().messages({
        "any.required": "Ảnh ko để trống",
        "string.empty": "Ảnh ko đúng định dạnh"
    }),
    description: Joi.string().required().empty().messages({
        "any.required": "Mô tả ko để trống",
        "string.empty": "Mổ tả ko đúng định dạnh"
    }),
    author: Joi.string().required().empty().messages({
        "any.required": "Tác giả ko để trống",
        "string.empty": "Tên tác giả ko đúng định dạnh"
    }),
    category: Joi.number().required().min(1).messages({
        "any.required": "Số lượng ko để trống",
        "string.empty": "Số lượng ko nhỏ hơn 1"
    }),

})
export const CheckProductValidate = (req, res, next) => {
    const { title, image, description, author, category } = req.body
    const { error } = ProjectObject.validate({ title, image, description, author, category });
    if (error) {
        res.send({ status: false, message: error.message })
    } else {
        next()
    }
}