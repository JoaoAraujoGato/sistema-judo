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
import { formatarData } from '../../regras_negocio/utils/data-helpers';

export default function ListaEventosPage() {
    const navigate = useNavigate();
    const [eventos, setEventos] = useState([]);
    
    const getEventos = useCallback(async () =>  await api.get('/eventos'),[]);

    const handleCadastrarEvento = useCallback(() => {
        navigate(`/evento/novo`);
    },[navigate]);

    const handleDetalhes = useCallback((id) => {
        navigate(`/evento/${id}`);
    },[navigate]);

    useEffect(() => {
        async function carregarEventos() {
            try {
                const { data } = await getEventos();
                setEventos(data);
            } catch (error) {
                console.error("Erro ao carregar eventos:", error);
            }
        };

        carregarEventos();
    },[getEventos]);

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
                    Eventos Cadastrados
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleCadastrarEvento()}>
                    + Cadastrar Evento
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Local</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {eventos.map((evento) => (
                            <TableRow key={evento.id}>
                                <TableCell>{evento.nome}</TableCell>
                                <TableCell>{evento.local}</TableCell>
                                <TableCell>{formatarData(evento.data)}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleDetalhes(evento?.id)} color="primary">
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
