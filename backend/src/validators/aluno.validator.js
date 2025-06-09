const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            sobrenome: Joi.string().required(),
            sexo: Joi.string().required(),
            peso: Joi.string().allow('').optional(),
            email: Joi.string().email().allow('').optional(),
            data_nascimento: Joi.string().optional(),
            telefone_responsavel: Joi.string().allow('').optional(),
            nome_pai_responsavel: Joi.string().allow('').optional(),
            nome_mae_responsavel: Joi.string().allow('').optional(),
            turma: Joi.string().optional(),
            faixa_atual: Joi.string().optional(),
            matricula_ativa: Joi.boolean().truthy(1).falsy(0).truthy('true').falsy('false').optional(),
            foto_url: Joi.string().allow(null).optional(),
            perfil_neurodesenvolvimento: Joi.string().allow('').optional(),
            tipo_condicao: Joi.string().allow('').optional(),
            descricao_condicao: Joi.string().allow(null).allow('').optional(),
            data_cadastro: Joi.string().required(),
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
            sobrenome: Joi.string().optional(),
            nome_pai_responsavel: Joi.string().optional(),
            nome_mae_responsavel: Joi.string().optional(),
            peso: Joi.string().allow('').optional(),
            sexo: Joi.string().optional(),
            turma: Joi.string().optional(),
            faixa_atual: Joi.string().optional(),
            data_inicio: Joi.string().optional(),
            perfil_neurodesenvolvimento: Joi.string().allow('').optional(),
            tipo_condicao: Joi.string().allow(null).allow('').optional(),
            data_fim: Joi.string().optional(),
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
            sobrenome: Joi.string().optional(),
            email: Joi.string().email().optional(),
            sexo: Joi.string().optional(),
            peso: Joi.string().allow('').optional(),
            data_nascimento: Joi.string().optional(),
            telefone_responsavel: Joi.string().optional(),
            nome_pai_responsavel: Joi.string().optional(),
            nome_mae_responsavel: Joi.string().optional(),
            turma: Joi.string().optional(),
            faixa_atual: Joi.string().optional(),
            perfil_neurodesenvolvimento: Joi.string().allow('').optional(),
            tipo_condicao: Joi.string().allow(null).allow('').optional(),
            descricao_condicao: Joi.string().allow(null).allow('').optional(),
            matricula_ativa: Joi.boolean().truthy(1).falsy(0).truthy('true').falsy('false').optional(),
            foto_url: Joi.string().allow(null).optional(),
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