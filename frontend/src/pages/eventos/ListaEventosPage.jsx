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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { FaSearchPlus } from "react-icons/fa";
import api from '../../services/api';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatarData } from '../../regras_negocio/utils/data-helpers';

export default function ListaEventosPage() {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getEventos = useCallback(async () => await api.get('/eventos'), []);

  const handleCadastrarEvento = useCallback(() => {
    navigate(`/evento/novo`);
  }, [navigate]);

  const handleDetalhes = useCallback((id) => {
    navigate(`/evento/${id}`);
  }, [navigate]);

  useEffect(() => {
    async function carregarEventos() {
      try {
        const { data } = await getEventos();
        setEventos(data);
      } catch (error) {
        console.error("Erro ao carregar eventos:", error);
      }
    }

    carregarEventos();
  }, [getEventos]);

  return (
    <Box
      px={{ xs: 2, sm: 4 }}
      py={4}
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
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        mb={3}
        gap={2}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign={{ xs: 'center', sm: 'left' }}
          width="100%"
        >
          Eventos Cadastrados
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleCadastrarEvento}
          fullWidth={isMobile}
        >
          + Cadastrar Evento
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Table size={isMobile ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nome</strong></TableCell>
              <TableCell><strong>Local</strong></TableCell>
              <TableCell><strong>Data</strong></TableCell>
              <TableCell align="center"><strong>Ações</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventos.map((evento) => (
              <TableRow key={evento.id}>
                <TableCell>{evento.nome}</TableCell>
                <TableCell>{evento.local}</TableCell>
                <TableCell>{formatarData(evento.data)}</TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => handleDetalhes(evento?.id)}
                    color="primary"
                  >
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
