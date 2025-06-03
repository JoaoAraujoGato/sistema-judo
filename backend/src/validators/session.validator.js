const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    signIn: celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().email().required(),
            senha: Joi.string().required(),
        })
    }),
    forgotPassword: celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().email().required(),
        })
    })
}