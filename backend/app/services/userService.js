const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.number().integer().min(10),
    address: Joi.string(),
    password: Joi.string(),
  });

module.exports = schema;