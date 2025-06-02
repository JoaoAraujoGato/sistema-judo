const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            id_aluno: Joi.string().required(),
            data: Joi.date().optional(),
            faixa_anterior: Joi.string().optional(),
            faixa_nova: Joi.string().optional(),
            observacao: Joi.string().optional(),
        }),
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),

    getByFilter: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            data_inicio: Joi.date().optional(),
            data_fim: Joi.date().optional(),
            id_aluno: Joi.string().optional(),
            faixa_anterior: Joi.string().optional(),
            faixa_nova: Joi.string().optional(),
        })
        .min(1),
    }),
    updateById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            data: Joi.date().optional(),
            faixa_anterior: Joi.string().optional(),
            faixa_nova: Joi.string().optional(),
            observacao: Joi.string().optional(),
        })
        .min(1),
    }),
    deleteById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),
}