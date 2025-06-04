import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function EditarEventoPage() {
  const navigate = useNavigate();
  const { id: eventoId } = useParams();

  const [evento, setEvento] = useState({
    nome: "",
    local: "",
    observacao: "",
    data: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Remove o campo id antes de enviar
    const { id, ...eventoSemId } = evento;

    try {
        if (eventoId) {
            // editar
            await api.put(`/evento/${eventoId}`, eventoSemId);
            toast.success("Evento atualizado com sucesso!");
            navigate(`/evento/${eventoId}`);
        } else {
            // criar
            const { data } = await api.post(`/evento`, eventoSemId);
            toast.success("Evento criado com sucesso!");
            navigate(`/evento/${data.id}`); // supondo que API retorne o id do novo evento
        }
    } catch (error) {
      toast.error("Erro ao salvar evento.");
    }
  };

  useEffect(() => {
    async function carregarDados() {
        if(!eventoId) return;
        try {
            const { data } = await api.get(`/evento/${eventoId}`);
            setEvento(data);
        } catch (error) {
            toast.error("Erro ao carregar dados do evento.");
        }
    }

    carregarDados();
  }, [eventoId]);

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
        {eventoId ? "Editar Evento" : "Cadastrar Evento"}
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
              <TextField fullWidth label="Nome" name="nome" value={evento.nome} onChange={handleChange} required />
              <TextField fullWidth label="Local" name="local" value={evento.local} onChange={handleChange} required />

              <TextField
                fullWidth
                label="Data do Evento"
                type="date"
                name="data"
                value={evento.data?.slice(0, 10)}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />

              <TextField fullWidth label="Observação" name="observacao" value={evento.observacao} onChange={handleChange} />
            </Grid>

          <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={() => {
                if(eventoId) navigate(`/evento/${eventoId}`)
                navigate('/eventos')}}>
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
