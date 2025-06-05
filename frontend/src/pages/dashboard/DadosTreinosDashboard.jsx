import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";

export function TreinosDaSemana(){
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
        <Box sx={{ flex: 1, minWidth: 300 }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent>
                    <Typography variant="h6">Treinos do Dia</Typography>
                    <List>
                        {treinosDoDia.map((treino, index) => (
                            <ListItem key={index}>
                            <ListItemText
                                primary={treino.titulo}
                                secondary={treino.descricao}
                            />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}