import { Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useMemo } from "react";
import { getProximosEventos } from "../../regras_negocio/utils/evento-helpers";

export function ProximosEventos({eventos}){
    const proximosEventos = useMemo(() => getProximosEventos(eventos), [eventos]);
    
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Próximos Eventos</Typography>
                <List>
                    {proximosEventos?.map((evento, index) => (
                        <ListItem key={index}>
                        <ListItemText
                            primary={evento.nome}
                            secondary={`Data: ${evento.data} | Local: ${evento.local}`}
                        />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}