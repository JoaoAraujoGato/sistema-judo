import { Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";

export function ProximosEventos(){
    const proximosEventos = [
        { data: "15/06", titulo: "Festival Interno de Lutas" },
        { data: "25/07", titulo: "Avaliação Semestral" },
        { data: "12/08", titulo: "Palestra sobre Nutrição Esportiva" },
    ];
    
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Próximos Eventos</Typography>
                <List>
                    {proximosEventos.map((evento, index) => (
                        <ListItem key={index}>
                        <ListItemText
                            primary={evento.titulo}
                            secondary={`Data: ${evento.data}`}
                        />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}