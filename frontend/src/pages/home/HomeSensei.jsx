import { Box, Typography, Container } from "@mui/material";

export default function HomeSensei() {
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          fontWeight: "bold",
        }}
      >
        SENSEI
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ xs: 4, md: 6 }}
      >
        {/* Texto à esquerda */}
        <Box flex={1}>
          <Typography paragraph sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.7 }}>
            Meu nome é João Gato e minha trajetória no judô começou em 2007, ainda durante a infância, no Colégio Santo Agostinho (unidade de Belo Horizonte). Como o judô e os estudos devem caminhar lado a lado, precisei fazer uma pausa temporária no tatame para me dedicar integralmente à escola.
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.7 }}>
            Essa decisão me permitiu alcançar uma importante conquista: sou formado em Engenharia Elétrica pela UFMG. No entanto, o judô sempre permaneceu presente em mim, como disciplina, filosofia de vida e paixão.
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.7 }}>
            Hoje sou árbitro oficial da Liga Mineira de Judô, estou em processo de graduação para o Shodan (1º Dan – faixa preta) e, acima de tudo, venho me dedicando à formação como sensei. Tenho investido em estudos, cursos e palestras para oferecer um ensino de qualidade, com base nos princípios do judô: respeito, disciplina, autocontrole e superação.
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, lineHeight: 1.7 }}>
            Sinto-me preparado e motivado para conduzir treinos para todas as idades, com atenção às necessidades individuais e foco no desenvolvimento técnico, físico e humano de cada aluno.
          </Typography>
        </Box>

        {/* Imagem à direita */}
        <Box
          flex={1}
          textAlign="center"
          sx={{
            maxWidth: { xs: "100%", md: "500px" },
            mx: "auto",
          }}
        >
          <img
            src="/images/competicao/FotoArbitroCortada.png"
            alt="Sensei João Gato"
            style={{
              maxHeight: "70vh",
              width: "100%",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}


/* Versão só com o card
<Box
    display="flex"
    justifyContent="center"
    flexWrap="wrap"
    gap={4}
    mt={4}
>
    {instructors.map((inst, index) => (
    <motion.div key={index} whileHover={{ scale: 1.05 }}>
        <Card
        sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: 2,
            boxShadow: 4,
            borderRadius: 3,
        }}
        >
        <Avatar
            src={inst.img}
            alt={inst.name}
            sx={{ width: 120, height: 120, mb: 2 }}
        />
        <Typography variant="h6">{inst.name}</Typography>
        <Typography variant="body2" color="text.secondary">
            {inst.rank}
        </Typography>
        </Card>
    </motion.div>
    ))}
</Box> */