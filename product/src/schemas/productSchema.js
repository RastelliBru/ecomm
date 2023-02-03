import Joi from '@hapi/joi';

const validator = (schema) => (payload) =>
    schema.validate(payload, {abortEarly: false})

const productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    value: Joi.number().min(1),
    quantity: Joi.number().min(1),
    description: Joi.string().min(200).max(500),
    category: Joi.string().required(),
})

const productValidate = validator(productSchema)

export default productValidate