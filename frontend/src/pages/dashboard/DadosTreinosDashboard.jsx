import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export function TreinosDaSemana() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const treinosDoDia = [
    {
      titulo: "Treino Funcional",
      descricao: "Circuito com foco em resistência e agilidade.",
    },
    {
      titulo: "Alongamento",
      descricao: "Sessão para relaxamento muscular e flexibilidade.",
    },
  ];

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: isSmDown ? "100%" : 300,
        width: "100%",
      }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Treinos da semana
          </Typography>
          <List disablePadding>
            {treinosDoDia.map((treino, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemText
                  primary={treino.titulo}
                  secondary={treino.descricao}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
