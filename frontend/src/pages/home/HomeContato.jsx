import { Email, Instagram, LocationOn, Phone } from "@mui/icons-material";
import { Box, Container, Link, Typography } from "@mui/material";

export default function HomeContato() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        color: "white",
        boxSizing: "border-box",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ mb: { xs: 3, md: 4 }, fontWeight: "bold", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
        >
          CONTATO
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ xs: 3, md: 6 }}
        >
          {/* Mapa à esquerda */}
          <Box
            flex={1}
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "600px" },
              height: { xs: 250, md: 350 },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.8290477021696!2d-43.782863932981535!3d-20.658101421932965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3df8d30884557%3A0xf0b3b4b0d98296da!2sR.%20Cel.%20Jo%C3%A3o%20Gomes%2C%20189%20-%20Santo%20Antonio%2C%20Conselheiro%20Lafaiete%20-%20MG%2C%2036401-126!5e0!3m2!1spt-BR!2sbr!4v1749679351350!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </Box>

          {/* Contato à direita */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={2}
            textAlign={{ xs: "center", md: "left" }}
            sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
          >
            <Typography display="flex" alignItems="center" gap={1}>
              <LocationOn fontSize="medium" />
              Rua Cel. João Gomes, 189 - Conselheiro Lafaiete
            </Typography>
            <Typography display="flex" alignItems="center" gap={1}>
              <Phone fontSize="medium" />
              (31) 99275-0721
            </Typography>
            <Typography display="flex" alignItems="center" gap={1}>
              <Email fontSize="medium" />
              contato@nekojudo.com
            </Typography>
            <Typography>
              <Link
                href="https://www.instagram.com/joao_gato12"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="inherit"
                display="flex"
                alignItems="center"
                gap={1}
                justifyContent={{ xs: "center", md: "flex-start" }}
                sx={{ fontWeight: "500" }}
              >
                <Instagram fontSize="medium" />
                @joao_gato12
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
