import {
  Box,
  Button,
  TextField,
  Grid,
  MenuItem,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { TURMAS } from "../../regras_negocio/constants/turma";
import { CORES_FAIXAS } from "../../regras_negocio/constants/cor_faixa";
import { getCurrentDate } from "../../regras_negocio/utils/data-helpers";
import {
  PERFIL_NEURODESENVOLVIMENTO,
  TIPO_CONDICAO,
} from "../../regras_negocio/constants/aluno";
import PageContainer from '../../components/PageContainer'
import FormContainer from '../../components/FormContainer'

export default function EditarAlunoPage() {
  const navigate = useNavigate();
  const { id: alunoId } = useParams();

  const [aluno, setAluno] = useState({
    nome: "",
    sobrenome: "",
    sexo: "",
    data_nascimento: "",
    turma: "",
    peso: "",
    email: "",
    telefone_responsavel: "",
    nome_pai_responsavel: "",
    nome_mae_responsavel: "",
    faixa_atual: "",
    matricula_ativa: true,
    foto_url: " ",
    perfil_neurodesenvolvimento: "",
    tipo_condicao: "",
    descricao_condicao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAluno((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "tipo_condicao" && value !== "Outro") {
        updated.descricao_condicao = "";
      }
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, data_cadastro, ...alunoSemId } = aluno;

    try {
      if (alunoId) {
        await api.put(`/aluno/${alunoId}`, alunoSemId);
        toast.success("Aluno atualizado com sucesso!");
        navigate(`/aluno/${alunoId}`);
      } else {
        const alunoComDataCadastro = {
          ...alunoSemId,
          data_cadastro: getCurrentDate(),
        };
        const { data } = await api.post(`/aluno`, alunoComDataCadastro);
        toast.success("Aluno criado com sucesso!");
        navigate(`/aluno/${data.id}`);
      }
    } catch {
      toast.error("Erro ao salvar aluno.");
    }
  };

  useEffect(() => {
    if (!alunoId) return;
    api
      .get(`/aluno/${alunoId}`)
      .then(({ data }) => setAluno(data))
      .catch(() => toast.error("Erro ao carregar dados do aluno."));
  }, [alunoId]);

  return (
    <PageContainer title={alunoId ? "Editar Aluno" : "Cadastrar Aluno"}>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth required label="Nome" name="nome" value={aluno.nome} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label="Sobrenome" name="sobrenome" value={aluno.sobrenome} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField select fullWidth required label="Sexo" name="sexo" value={aluno.sexo} onChange={handleChange}>
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Feminino">Feminino</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth required
                label="Data de Nascimento"
                type="date"
                name="data_nascimento"
                value={aluno.data_nascimento?.slice(0, 10)}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField select fullWidth label="Turma" name="turma" value={aluno.turma} onChange={handleChange}>
                {Object.values(TURMAS).map((turma) => (
                  <MenuItem key={turma} value={turma}>{turma}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Peso (kg)" name="peso" type="number" value={aluno.peso} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" name="email" value={aluno.email} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Telefone do Responsável" name="telefone_responsavel" value={aluno.telefone_responsavel} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Nome do Pai" name="nome_pai_responsavel" value={aluno.nome_pai_responsavel} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Nome da Mãe" name="nome_mae_responsavel" value={aluno.nome_mae_responsavel} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField select fullWidth label="Faixa Atual" name="faixa_atual" value={aluno.faixa_atual} onChange={handleChange}>
                {Object.values(CORES_FAIXAS).map((faixa) => (
                  <MenuItem key={faixa} value={faixa}>{faixa}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select fullWidth required
                label="Perfil Neurodesenvolvimento"
                name="perfil_neurodesenvolvimento"
                value={aluno.perfil_neurodesenvolvimento}
                onChange={handleChange}
              >
                <MenuItem value={PERFIL_NEURODESENVOLVIMENTO.TIPICO}>{PERFIL_NEURODESENVOLVIMENTO.TIPICO}</MenuItem>
                <MenuItem value={PERFIL_NEURODESENVOLVIMENTO.ATIPICO}>{PERFIL_NEURODESENVOLVIMENTO.ATIPICO}</MenuItem>
              </TextField>
            </Grid>
            {aluno.perfil_neurodesenvolvimento === PERFIL_NEURODESENVOLVIMENTO.ATIPICO && (
              <Grid item xs={12}>
                <TextField
                  select fullWidth
                  label="Tipo de Condição"
                  name="tipo_condicao"
                  value={aluno.tipo_condicao}
                  onChange={handleChange}
                >
                  {Object.values(TIPO_CONDICAO).map((tipo) => (
                    <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>
                  ))}
                </TextField>
              </Grid>
            )}
            {aluno.tipo_condicao === "Outro" && (
              <Grid item xs={12}>
                <TextField
                  fullWidth multiline minRows={2}
                  label="Descreva a condição"
                  name="descricao_condicao"
                  value={aluno.descricao_condicao}
                  onChange={handleChange}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                select fullWidth
                label="Matrícula Ativa"
                name="matricula_ativa"
                value={aluno.matricula_ativa ? "true" : "false"}
                onChange={(e) =>
                  setAluno((prev) => ({
                    ...prev,
                    matricula_ativa: e.target.value === "true",
                  }))
                }
              >
                <MenuItem value="true">Sim</MenuItem>
                <MenuItem value="false">Não</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={() => {
                alunoId ? navigate(`/aluno/${alunoId}`) : navigate("/alunos");
              }}
            >
              Cancelar
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Salvar Alterações
            </Button>
          </Box>
        </form>
      </FormContainer>
    </PageContainer>
  );
}
