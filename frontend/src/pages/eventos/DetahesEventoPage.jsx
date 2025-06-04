import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { formatarData } from "../../regras_negocio/utils/data-helpers";
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';


export default function DetalhesEventoPage() {
    const navigate = useNavigate();
    const { id: eventoId } = useParams();
    
    const [evento, setEvento] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);


    const confirmarExclusao = () => {
        setModalAberto(true);
    };

    const excluirEvento = async () => {
        try {
            await api.delete(`/evento/${eventoId}`);
            toast.success("Evento excluído com sucesso!");
            navigate('/eventos');
        } catch (error) {
            toast.error("Erro ao excluir evento");
        } finally {
            setModalAberto(false);
        }
    };
  
    const handleEditar = () => navigate(`/evento/${eventoId}/editar`);
  
    useEffect(() => {
      async function carregarDados() {
        try {
          const { data } = await api.get(`/evento/${eventoId}`);
          setEvento(data);
  
        } catch (error) {
          toast.error("Erro ao carregar dados do evento.");
        }
      }
  
      carregarDados();
    }, [eventoId]);
    
    if (!evento) return null;

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
                            onClick={() => navigate('/eventos')}
                            variant="text"
                            startIcon={<FaArrowLeft />}
                        />
                        <Typography variant="h4" fontWeight="bold">
                            Detalhes do Evento
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
                            <Typography><strong>Nome:</strong> {evento.nome}</Typography>
                            <Typography><strong>Local:</strong> {evento.local}</Typography>
                            <Typography><strong>Data de Nascimento:</strong> {formatarData(evento.data)}</Typography>
                            <Typography><strong>Observação:</strong> {evento.observacao}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            {/* Modal de confirmação */}
            <Dialog open={modalAberto} onClose={() => setModalAberto(false)}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tem certeza que deseja excluir este evento? Esta ação não poderá ser desfeita.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setModalAberto(false)} color="inherit">
                        Cancelar
                    </Button>
                    <Button onClick={excluirEvento} color="error">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
}
