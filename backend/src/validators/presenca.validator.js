const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            aluno_id: Joi.string().optional(),
            nome_aluno: Joi.string().optional(),
            sobrenome_aluno: Joi.string().optional(),
            turma: Joi.string().optional(),
            data: Joi.string().optional(),
            presente: Joi.boolean().truthy(1).falsy(0).truthy('true').falsy('false').optional(),
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
            turma: Joi.string().optional(),
        })
        .min(1),
    }),
    updateById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            aluno_id: Joi.string().optional(),
            nome_aluno: Joi.string().optional(),
            sobrenome_aluno: Joi.string().optional(),
            turma: Joi.string().optional(),
            data: Joi.string().optional(),
            presente: Joi.boolean().truthy(1).falsy(0).truthy('true').falsy('false').optional(),
        })
        .min(1),
    }),
    deleteById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),
}