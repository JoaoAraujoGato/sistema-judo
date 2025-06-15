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
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";

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
      navigate("/eventos");
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
      px={{ xs: 2, sm: 4 }}
      py={4}
      display="flex"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url("/images/FundoDeTelaJudoCinza.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box maxWidth="md" width="100%">
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          mb={3}
          gap={2}
        >
          {/* Parte esquerda: Ícone de voltar + título */}
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Button
              onClick={() => navigate("/eventos")}
              variant="text"
              startIcon={<FaArrowLeft />}
              sx={{ minWidth: 100, justifyContent: "flex-start" }}
            >
              Voltar
            </Button>
            <Typography variant="h4" fontWeight="bold" component="h1" noWrap>
              Detalhes do Evento
            </Typography>
          </Box>

          {/* Parte direita: Botões */}
          <Box display="flex" gap={2} flexWrap="wrap">
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditar}
              startIcon={<FaEdit />}
              size="medium"
            >
              Editar
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={confirmarExclusao}
              startIcon={<FaTrash />}
              size="medium"
            >
              Excluir
            </Button>
          </Box>
        </Box>

        <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>
                <strong>Nome:</strong> {evento.nome}
              </Typography>
              <Typography gutterBottom>
                <strong>Local:</strong> {evento.local}
              </Typography>
              <Typography gutterBottom>
                <strong>Data do Evento:</strong> {formatarData(evento.data)}
              </Typography>
              <Typography>
                <strong>Observação:</strong> {evento.observacao || "-"}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Modal de confirmação */}
      <Dialog
        open={modalAberto}
        onClose={() => setModalAberto(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja excluir este evento? Esta ação não poderá ser
            desfeita.
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
