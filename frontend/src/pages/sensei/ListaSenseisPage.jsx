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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../services/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ListaSenseisPage() {
    const navigate = useNavigate();
    const [senseis, setSenseis] = useState([]);
    const { userId } = useAuth();
    const [idParaExcluir, setIdParaExcluir] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);
    
    const carregarSenseis = useCallback(async () =>  await api.get('/senseis'),[]);

    const handleCadastrarProfessor = useCallback(() => {
        navigate(`/sensei/novo`);
    },[navigate]);

    const handleEditar = useCallback((id) => {
        navigate(`/sensei/${id}`);
    },[navigate]);

    const confirmarExclusao = (id) => {
        if (id === userId) {
            toast.warning("Você não pode excluir a si mesmo!");
            return;
        }
        setIdParaExcluir(id);
        setModalAberto(true);
    };

    const excluirProfessor = async () => {
        try {
            await api.delete(`/sensei/${idParaExcluir}`);
            setSenseis((prev) => prev.filter((s) => s.id !== idParaExcluir));
            toast.success("Professor excluído com sucesso!");
        } catch (error) {
            toast.error("Erro ao excluir professor");
        } finally {
            setModalAberto(false);
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await carregarSenseis();
                setSenseis(data);
            } catch (error) {
                console.error("Erro ao carregar senseis:", error);
            }
        };

        fetchData();
    },[carregarSenseis]);

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
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
                flexDirection={{ xs: 'column', sm: 'row' }}
                gap={2}
                >
                <Typography variant="h5" fontWeight="bold" textAlign={{ xs: 'center', sm: 'left' }}>
                    Professores Cadastrados
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleCadastrarProfessor()}
                    sx={{ width: { xs: '100%', sm: 'auto' } }}
                >
                    + Cadastrar Professor
                </Button>
            </Box>

            <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
                <Table sx={{ minWidth: 600 }}>
                <TableHead>
                    <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Faixa</TableCell>
                    <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {senseis.map((prof) => (
                    <TableRow key={prof.id}>
                        <TableCell>{prof.nome}</TableCell>
                        <TableCell>{prof.email}</TableCell>
                        <TableCell>{prof.faixa_atual}</TableCell>
                        <TableCell align="center">
                        <IconButton onClick={() => handleEditar(prof.id)} color="primary">
                            <FiEdit />
                        </IconButton>
                        <IconButton onClick={() => confirmarExclusao(prof.id)} color="error">
                            <FiTrash2 />
                        </IconButton>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            {/* Modal de confirmação */}
            <Dialog
                open={modalAberto}
                onClose={() => setModalAberto(false)}
            >
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tem certeza que deseja excluir este professor? Esta ação não poderá ser desfeita.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setModalAberto(false)} color="inherit">
                        Cancelar
                    </Button>
                    <Button onClick={excluirProfessor} color="error">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
