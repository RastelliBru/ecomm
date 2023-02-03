import Joi from '@hapi/joi';

const productValidate = Joi.object({
    name: Joi.string().min(3).required(),
    value: Joi.number().min(1),
    quantity: Joi.number().min(1),
    description: Joi.string().min(200).max(500),
    category: Joi.string().required(),
})

export default productValidate 