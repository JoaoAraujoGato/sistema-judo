import {
  Box,
  Button,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { FaSearchPlus } from "react-icons/fa";
import api from '../../services/api';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calcularIdade } from '../../regras_negocio/utils/data-helpers';

export default function ListaAlunosPage() {
    const navigate = useNavigate();
    const [alunos, setAlunos] = useState([]);
    
    const carregarAlunos = useCallback(async () =>  await api.get('/alunos'),[]);

    const handleCadastrarAluno = useCallback(() => {
        navigate(`/aluno/novo`);
    },[navigate]);

    const handleDetalhes = useCallback((id) => {
        navigate(`/aluno/${id}`);
    },[navigate]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await carregarAlunos();
                setAlunos(data);
            } catch (error) {
                console.error("Erro ao carregar alunos:", error);
            }
        };

        fetchData();
    },[carregarAlunos]);

    return (
        <Box
            p={4}
            minHeight="100vh"
            sx={{
                backgroundImage: `url("/images/FundoDeTelaJudoCinza.png")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h5" fontWeight="bold">
                    Alunos Cadastrados
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleCadastrarAluno()}>
                    + Cadastrar Aluno
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Sexo</TableCell>
                            <TableCell>Faixa</TableCell>
                            <TableCell>Matrícula</TableCell>
                            <TableCell>Idade</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {alunos.map((aluno) => (
                            <TableRow key={aluno.id}>
                                <TableCell>{aluno.nome}</TableCell>
                                <TableCell>{aluno.sexo}</TableCell>
                                <TableCell>{aluno.faixa_atual}</TableCell>
                                <TableCell>{aluno.matricula_ativa === 1 ? 'Ativa' : 'Inativa'}</TableCell>
                                <TableCell>{calcularIdade(aluno?.data_nascimento)}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleDetalhes(aluno?.id)} color="primary">
                                        <FaSearchPlus />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
