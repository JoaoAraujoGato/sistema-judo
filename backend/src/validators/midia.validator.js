const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            data_upload: Joi.string().optional(),
            tipo: Joi.string().required(),
            url_arquivo: Joi.string().optional(),
            descricao: Joi.string().optional(),
        }),
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),

    getByFilter: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            data_inicio: Joi.string().optional(),
            data_fim: Joi.string().optional(),
            tipo: Joi.string().required(),
        })
        .min(1),
    }),
    updateById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            data_upload: Joi.string().optional(),
            tipo: Joi.string().required(),
            url_arquivo: Joi.string().optional(),
            descricao: Joi.string().optional(),
        })
        .min(1),
    }),
    deleteById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),
}