const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(6).required(),
            faixa_atual: Joi.string().optional().allow(''),
            graduacao_faixa_preta: Joi.string().optional().allow(''),
            foto_url: Joi.string().optional().allow(''),
        }),
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),
    updateById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            email: Joi.string().email().optional(),
            faixa_atual: Joi.string().allow('').optional(),
            graduacao_faixa_preta: Joi.string().allow('').optional(),
            foto_url: Joi.string().allow('').optional(),
        })
        .min(1),
    }),
    deleteById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),
}