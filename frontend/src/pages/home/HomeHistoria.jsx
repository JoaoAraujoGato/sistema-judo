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
      <Container>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 8 }}>
          História do Judô
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          {/* Imagem à esquerda */}
          <Box flex={1} textAlign="center">
            <img
              src="/images/jigoroKano.png"
              alt="Jigoro Kano"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          {/* Texto à direita */}
          <Box flex={1}>
            <Typography paragraph>
              O judô é uma arte marcial japonesa criada em 1882 por Jigoro Kano, um educador que buscava desenvolver uma disciplina baseada não apenas na eficácia do combate, mas também na formação física, mental e moral dos praticantes. Inspirado nas técnicas do jiu-jitsu dos samurais, Kano eliminou os movimentos mais perigosos e introduziu princípios que valorizam a eficiência máxima com o mínimo de esforço (Seiryoku Zenyo) e o benefício mútuo (Jita Kyoei).
            </Typography>
            <Typography paragraph>
              A primeira escola de judô, o Kodokan, foi fundada por Kano em Tóquio, tornando-se rapidamente um centro de referência para a modalidade. O nome “judô” significa “caminho suave”, refletindo a filosofia de utilizar a força do oponente a favor do praticante, priorizando o respeito, a disciplina e o autocontrole.
            </Typography>
            <Typography paragraph>
              Desde sua criação, o judô se expandiu pelo mundo e tornou-se um dos esportes olímpicos mais tradicionais, estreando nas Olimpíadas de Tóquio em 1964. Hoje, além de ser praticado como esporte de alto rendimento, o judô é reconhecido como uma ferramenta de educação e desenvolvimento pessoal, acessível a pessoas de todas as idades e condições físicas.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
