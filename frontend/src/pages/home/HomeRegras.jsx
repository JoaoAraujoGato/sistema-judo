import { Avatar, Box, Card, CardContent, Container, Typography } from "@mui/material";
import { FaClock, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import { GiKimono } from "react-icons/gi";

const regras = [
  {
    titulo: "Respeito ao sensei e colegas",
    descricao:
      "O respeito é um dos pilares do judô. Os praticantes devem sempre cumprimentar seus mestres e companheiros antes e depois das aulas ou lutas, demonstrando humildade, ética e espírito esportivo.",
    icon: <FaHandsHelping size={40} color="#21609e" />,
  },
  {
    titulo: "Disciplina e pontualidade",
    descricao:
      "Chegar no horário, manter o silêncio nas instruções, cuidar do ambiente e seguir as orientações do sensei são atitudes fundamentais para o bom funcionamento da aula e o progresso individual.",
    icon: <FaClock size={40} color="#21609e" />,
  },
  {
    titulo: "Uso correto do judogi",
    descricao:
      "O judogi deve estar sempre limpo, ajustado e bem vestido, com a faixa corretamente amarrada. Isso demonstra zelo, organização e respeito ao ambiente de treino.",
    icon: <GiKimono size={40} color="#21609e" />,
  },
  {
    titulo: "Segurança em primeiro lugar",
    descricao:
      "Todas as técnicas devem ser executadas com controle e responsabilidade. É proibido usar força excessiva ou agir de forma perigosa, visando sempre proteger a integridade física de todos.",
    icon: <FaShieldAlt size={40} color="#21609e" />,
  },
];

export default function HomeRegras() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        py: 6,
        px: 2,
        boxSizing: "border-box",
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 8 }}>
          Regras e Princípios
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={4}
          mt={4}
        >
          {regras.map((regra, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 45%" },
                maxWidth: 500,
                minWidth: 280,
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 2,
                  height: "100%",
                  boxShadow: 3,
                }}
              >
                <Avatar sx={{ bgcolor: "white", width: 56, height: 56 }}>
                  {regra.icon}
                </Avatar>
                <CardContent sx={{ padding: 0 }}>
                  <Typography variant="h6" gutterBottom>
                    {regra.titulo}
                  </Typography>
                  <Typography variant="body2">{regra.descricao}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
