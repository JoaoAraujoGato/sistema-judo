import {
  Box,
  Button,
  Typography,
  Divider,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { calcularIdade, formatarData } from "../../regras_negocio/utils/data-helpers";
import { classificarIdade, classificarPeso } from "../../regras_negocio/utils/categoria-competicao";
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';


export default function DetalhesAlunoPage() {
    const navigate = useNavigate();
    const { id: alunoId } = useParams();
    
    const [aluno, setAluno] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);
    const [trocasFaixa] = useState([]);

    const idadeAluno = useMemo(() => calcularIdade(aluno?.data_nascimento),[aluno]);
    const classificacaoIdade = useMemo(() => classificarIdade(idadeAluno),[idadeAluno]);
    const classificacaoPeso = useMemo(() => classificarPeso(aluno?.peso, aluno?.sexo, classificacaoIdade.classe),[aluno, classificacaoIdade]);

    const confirmarExclusao = () => {
        setModalAberto(true);
    };

    const excluirAluno = async () => {
        try {
            await api.delete(`/aluno/${alunoId}`);
            toast.success("Aluno excluído com sucesso!");
            navigate('/alunos');
        } catch (error) {
            toast.error("Erro ao excluir aluno");
        } finally {
            setModalAberto(false);
        }
    };
  
    const handleEditar = () => navigate(`/aluno/${alunoId}/editar`);
  
    useEffect(() => {
      async function carregarDados() {
        try {
          const { data } = await api.get(`/aluno/${alunoId}`);
          setAluno(data);
  
          // const trocas = await api.get(`/alunos/${id}/trocas-faixa`); Tem que filtrar depois certin
          // setTrocasFaixa(trocas.data);
        } catch (error) {
          toast.error("Erro ao carregar dados do aluno.");
        }
      }
  
      carregarDados();
    }, [alunoId]);
    
    if (!aluno) return null;

    return (
        <Box
            display="flex"
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
            <Box maxWidth="md" width="100%" p={4}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                >
                    {/* Parte esquerda: Ícone de voltar + título */}
                    <Box display="flex" alignItems="center" gap={1}>
                        <Button
                            onClick={() => navigate('/alunos')}
                            variant="text"
                            startIcon={<FaArrowLeft />}
                        />
                        <Typography variant="h4" fontWeight="bold">
                            Detalhes do Aluno
                        </Typography>
                    </Box>

                    {/* Parte direita: Botões */}
                    <Box display="flex" gap={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEditar}
                            startIcon={<FaEdit />}
                        >
                            Editar
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={confirmarExclusao}
                            startIcon={<FaTrash />}
                        >
                            Excluir
                        </Button>
                    </Box>
                </Box>

                <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Nome:</strong> {aluno.nome}</Typography>
                            <Typography><strong>Sobrenome:</strong> {aluno.sobrenome}</Typography>
                            <Typography><strong>Sexo:</strong> {aluno.sexo}</Typography>
                            <Typography><strong>Data de Nascimento:</strong> {formatarData(aluno.data_nascimento)}</Typography>
                            <Typography><strong>Turma:</strong> {aluno.turma}</Typography>
                            <Typography><strong>Idade:</strong> {idadeAluno} anos ({classificacaoIdade.label})</Typography>
                            <Typography><strong>Peso:</strong> {aluno?.peso} kg ({classificacaoPeso})</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Email:</strong> {aluno.email}</Typography>
                            <Typography><strong>Telefone do Responsável:</strong> {aluno.telefone_responsavel}</Typography>
                            <Typography><strong>Nome do Pai:</strong> {aluno.nome_pai_responsavel}</Typography>
                            <Typography><strong>Nome da Mãe:</strong> {aluno.nome_mae_responsavel}</Typography>
                            <Typography><strong>Faixa Atual:</strong> {aluno.faixa_atual}</Typography>
                            <Typography><strong>Data de Cadastro:</strong> {formatarData(aluno.data_cadastro)}</Typography>
                            <Typography><strong>Matrícula Ativa:</strong> {aluno.matricula_ativa ? "Sim" : "Não"}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Divider />
                <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
                    Histórico de Trocas de Faixa
                </Typography>

                {trocasFaixa.length === 0 ? (
                    <Typography>Nenhuma troca de faixa registrada.</Typography>
                ) : (
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Faixa Anterior</TableCell>
                            <TableCell>Nova Faixa</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trocasFaixa.map((troca) => (
                        <TableRow key={troca.id}>
                            <TableCell>{troca.data_troca}</TableCell>
                            <TableCell>{troca.faixa_anterior}</TableCell>
                            <TableCell>{troca.nova_faixa}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                )}
            </Box>
            {/* Modal de confirmação */}
            <Dialog open={modalAberto} onClose={() => setModalAberto(false)}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tem certeza que deseja excluir este aluno? Esta ação não poderá ser desfeita.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setModalAberto(false)} color="inherit">
                        Cancelar
                    </Button>
                    <Button onClick={excluirAluno} color="error">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
}
