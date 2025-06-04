const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            nome: Joi.string().required(),
            matricula_ativa: Joi.boolean().required(),
            sexo: Joi.string().required(),
            email: Joi.string().email().optional(),
            data_nascimento: Joi.date().optional(),
            telefone_responsavel: Joi.string().optional(),
            nome_pai_responsavel: Joi.string().optional(),
            nome_mae_responsavel: Joi.string().optional(),
            turma: Joi.string().optional(),
            faixa_atual: Joi.string().optional(),
            data_cadastro: Joi.date().required(),
            foto_url: Joi.string().optional(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),

    getByFilter: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            nome: Joi.string().optional(),
            nome_pai_responsavel: Joi.string().optional(),
            nome_mae_responsavel: Joi.string().optional(),
            sexo: Joi.string().optional(),
            turma: Joi.string().optional(),
            faixa_atual: Joi.string().optional(),
            data_inicio: Joi.date().optional(),
            data_fim: Joi.date().optional(),
            matricula_ativa: Joi.boolean().optional(),
        })
        .min(1),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    updateById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            matricula_ativa: Joi.boolean().optional(),
            email: Joi.string().email().optional(),
            sexo: Joi.string().optional(),
            data_nascimento: Joi.date().optional(),
            telefone_responsavel: Joi.string().optional(),
            nome_pai_responsavel: Joi.string().optional(),
            nome_mae_responsavel: Joi.string().optional(),
            turma: Joi.string().optional(),
            faixa_atual: Joi.string().optional(),
            foto_url: Joi.string().optional(),
        })
        .min(1),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    deleteById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
}