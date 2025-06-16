import { Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useMemo } from "react";
import { getProximosEventos } from "../../regras_negocio/utils/evento-helpers";

export function ProximosEventos({ eventos }) {
  const proximosEventos = useMemo(() => getProximosEventos(eventos), [eventos]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Próximos Eventos
        </Typography>

        {proximosEventos && proximosEventos.length > 0 ? (
          <List>
            {proximosEventos.map((evento, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={evento.nome}
                  secondary={`Data: ${evento.data} | Local: ${evento.local}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="textSecondary">
            Não possui eventos futuros cadastrados.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
