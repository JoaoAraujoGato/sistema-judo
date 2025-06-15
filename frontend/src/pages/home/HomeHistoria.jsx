import { Box, Typography, Container } from "@mui/material";

export default function HomeHistoria() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        color: "white",
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="lg"> {/* usei lg pra container ficar maior */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            mb: 6,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            fontWeight: "bold",
          }}
        >
          HISTÓRIA DO JUDÔ
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          {/* Imagem à esquerda */}
          <Box
            flex={{ xs: "none", md: 1.5 }}  // imagem maior no desktop
            textAlign="center"
          >
            <img
              src="/images/jigoroKano.png"
              alt="Jigoro Kano"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 8,
                maxHeight: { xs: 300, md: 500 }, // maior altura no desktop
              }}
            />
          </Box>

          {/* Texto à direita */}
          <Box flex={{ xs: "none", md: 2 }}> {/* texto mais largo no desktop */}
            <Typography sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, mb: 2 }}>
              O judô é uma arte marcial japonesa criada em 1882 por Jigoro Kano, um educador que buscava desenvolver uma disciplina baseada não apenas na eficácia do combate, mas também na formação física, mental e moral dos praticantes. Inspirado nas técnicas do jiu-jitsu dos samurais, Kano eliminou os movimentos mais perigosos e introduziu princípios que valorizam a eficiência máxima com o mínimo de esforço (Seiryoku Zenyo) e o benefício mútuo (Jita Kyoei).
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, mb: 2 }}>
              A primeira escola de judô, o Kodokan, foi fundada por Kano em Tóquio, tornando-se rapidamente um centro de referência para a modalidade. O nome “judô” significa “caminho suave”, refletindo a filosofia de utilizar a força do oponente a favor do praticante, priorizando o respeito, a disciplina e o autocontrole.
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, mb: 2 }}>
              Desde sua criação, o judô se expandiu pelo mundo e tornou-se um dos esportes olímpicos mais tradicionais, estreando nas Olimpíadas de Tóquio em 1964. Hoje, além de ser praticado como esporte de alto rendimento, o judô é reconhecido como uma ferramenta de educação e desenvolvimento pessoal, acessível a pessoas de todas as idades e condições físicas.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
