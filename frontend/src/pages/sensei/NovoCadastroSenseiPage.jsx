import { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";
import { FiUser } from "react-icons/fi";
import api from '../../services/api';
import { useAuth } from "../../services/auth";
import { toast } from "react-toastify";
import { CORES_FAIXAS, GRADUACAO_FAIXAS_PRETAS } from "../../regras_negocio/constants/cor_faixa";
import { useNavigate } from "react-router-dom";

export default function NovoCadastroSenseiPage() {
  const navigate = useNavigate();
  const { userId } = useAuth();

  const [perfil, setPerfil] = useState({
      nome: "",
      email: "",
      faixa_atual: "branca",
      graduacao_faixa_preta: "",
      foto_url: "",
      senha: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setPerfil((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
          setPerfil((prev) => ({ ...prev, foto_url: reader.result }));
      };
      reader.readAsDataURL(file);
      }
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userId) {
            toast.error("Usuário não autenticado.");
            return;
        }

        setLoading(true);
        try {
            await api.post(`/sensei`, perfil);
            toast.success("Perfil salvo com sucesso!");
            navigate('/senseis');
        } catch (error) {
            toast.error("Erro ao salvar perfil.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: `url("/images/FundoDeTelaJudoCinza.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        maxWidth={600}
        mx="auto"
        p={{ xs: 2, sm: 4 }}
        bgcolor="background.paper"
        boxShadow={3}
        borderRadius={2}
        width="100%"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          textAlign={{ xs: 'center', sm: 'left' }}
          fontSize={{ xs: '1.6rem', sm: '2.125rem' }}
        >
          Novo cadastro de professor
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Nome"
            name="nome"
            value={perfil.nome}
            onChange={handleChange}
            fullWidth
            disabled={loading}
          />

          <TextField
            label="E-mail"
            type="email"
            name="email"
            value={perfil.email}
            onChange={handleChange}
            fullWidth
            disabled={loading}
          />

          <TextField
            label="Senha"
            type="password"
            name="senha"
            value={perfil.senha}
            onChange={handleChange}
            fullWidth
            disabled={loading}
          />

          <FormControl fullWidth>
            <InputLabel id="faixa-label">Faixa Atual</InputLabel>
            <Select
              labelId="faixa-label"
              label="Faixa Atual"
              name="faixa_atual"
              value={perfil.faixa_atual}
              onChange={handleChange}
            >
              {Object.values(CORES_FAIXAS).map((faixa) => (
                <MenuItem key={faixa} value={faixa}>
                  {faixa.charAt(0).toUpperCase() + faixa.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {perfil.faixa_atual === CORES_FAIXAS.PRETA && (
            <FormControl fullWidth>
              <InputLabel id="graduacao-label">Graduação da Faixa Preta</InputLabel>
              <Select
                labelId="graduacao-label"
                label="Graduação da Faixa Preta"
                name="graduacao_faixa_preta"
                value={perfil.graduacao_faixa_preta}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                {Object.values(GRADUACAO_FAIXAS_PRETAS).map((grad) => (
                  <MenuItem key={grad} value={grad}>
                    {grad}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Box textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography
              variant="subtitle1"
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
              gap={1}
              mb={1}
            >
              <FiUser size={24} /> Foto de Perfil
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={loading}
              style={{ marginBottom: 12 }}
            />
            {perfil?.foto_url && (
              <Avatar
                src={perfil?.foto_url}
                alt="Prévia"
                sx={{ width: 96, height: 96, mx: { xs: 'auto', sm: 0 } }}
              />
            )}
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            disabled={loading}
          >
            {loading ? "Salvando..." : "Salvar Alterações"}
          </Button>

        </Stack>
      </Box>
  </Box>
  );
}
