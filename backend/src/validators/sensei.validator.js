const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            faixa_atual: Joi.string().optional(),
            graduacao_faixa_preta: Joi.string().optional(),
            foto_url: Joi.string().optional(),
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
            faixa_atual: Joi.string().optional(),
            graduacao_faixa_preta: Joi.string().optional(),
            foto_url: Joi.string().optional(),
        })
        .min(1),
    }),
    deleteById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),
}