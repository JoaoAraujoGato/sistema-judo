import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  MenuItem,
  Paper
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { TURMAS } from "../../regras_negocio/constants/turma";
import { CORES_FAIXAS } from "../../regras_negocio/constants/cor_faixa";
import { getCurrentDate } from "../../regras_negocio/utils/data-helpers";

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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Remove o campo id antes de enviar
    const { id, data_cadastro, ...alunoSemId } = aluno;

    console.log('alunoSemId >>>', alunoSemId);
    try {
        if (alunoId) {
            // editar
            await api.put(`/aluno/${alunoId}`, alunoSemId);
            toast.success("Aluno atualizado com sucesso!");
            navigate(`/aluno/${alunoId}`);
        } else {
            const alunoComDataCadastro = {
                ...alunoSemId,
                data_cadastro: getCurrentDate(),
            };
            // criar
            const { data } = await api.post(`/aluno`, alunoComDataCadastro);
            toast.success("Aluno criado com sucesso!");
            navigate(`/aluno/${data.id}`); // supondo que API retorne o id do novo aluno
        }
    } catch (error) {
      toast.error("Erro ao salvar aluno.");
    }
  };

  useEffect(() => {
    async function carregarDados() {
        if(!alunoId) return;
        try {
            const { data } = await api.get(`/aluno/${alunoId}`);
            setAluno(data);
        } catch (error) {
            toast.error("Erro ao carregar dados do aluno.");
        }
    }

    carregarDados();
  }, [alunoId]);

  return (
    <Box
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        sx={{
            backgroundImage: `url("/images/FundoDeTelaJudoCinza.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        {alunoId ? "Editar Aluno" : "Cadastrar Aluno"}
      </Typography>

      <Paper
        variant="outlined"
        sx={{
            p: 3,
            width: "100%",
            maxWidth: "600px", // Limita o tamanho
        }}
    >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
              <TextField fullWidth label="Nome" name="nome" value={aluno.nome} onChange={handleChange} required />
              <TextField fullWidth label="Sobrenome" name="sobrenome" value={aluno.sobrenome} onChange={handleChange} required />

              <TextField
                select
                fullWidth
                label="Sexo"
                name="sexo"
                value={aluno.sexo}
                onChange={handleChange}
                required
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Feminino">Feminino</MenuItem>
              </TextField>

              <TextField
                fullWidth
                label="Data de Nascimento"
                type="date"
                name="data_nascimento"
                value={aluno.data_nascimento?.slice(0, 10)}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />

              <TextField select fullWidth label="Turma" name="turma" value={aluno.turma} onChange={handleChange}>
                {
                    Object.values(TURMAS).map((turma) => <MenuItem value={turma}>{turma}</MenuItem> )
                }
              </TextField>
              <TextField fullWidth label="Peso (kg)" name="peso" type="number" value={aluno.peso} onChange={handleChange} />

              <TextField fullWidth label="Email" name="email" value={aluno.email} onChange={handleChange} />
              <TextField fullWidth label="Telefone do Responsável" name="telefone_responsavel" value={aluno.telefone_responsavel} onChange={handleChange} />

              <TextField fullWidth label="Nome do Pai" name="nome_pai_responsavel" value={aluno.nome_pai_responsavel} onChange={handleChange} />
              <TextField fullWidth label="Nome da Mãe" name="nome_mae_responsavel" value={aluno.nome_mae_responsavel} onChange={handleChange} />

              <TextField select fullWidth label="Faixa Atual" name="faixa_atual" value={aluno.faixa_atual} onChange={handleChange}>
                {
                    Object.values(CORES_FAIXAS).map((faixa) => <MenuItem value={faixa}>{faixa}</MenuItem> )
                }
              </TextField>

              <TextField
                select
                fullWidth
                label="Matrícula Ativa"
                name="matricula_ativa"
                value={aluno.matricula_ativa ? 'true' : 'false'}
                onChange={(e) =>
                    setAluno((prev) => ({
                        ...prev,
                        matricula_ativa: e.target.value === "true", // converte string em booleano
                    }))
                }
              >
                <MenuItem value={"true"}>Sim</MenuItem>
                <MenuItem value={"false"}>Não</MenuItem>
              </TextField>
            </Grid>

          <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={() => {
                if(alunoId) navigate(`/aluno/${alunoId}`)
                navigate('/alunos')}}>
              Cancelar
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Salvar Alterações
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
