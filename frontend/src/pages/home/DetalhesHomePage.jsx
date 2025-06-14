import { Typography, Container, Box, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";

import HomeContato from "./HomeContato";
import HomeRegras from "./HomeRegras";
import HomeSensei from "./HomeSensei";
import HomeHistoria from "./HomeHistoria";
import { useNavigate } from "react-router-dom";

const carouselItems = [
  { src: "/images/competicao/FotoCompeticao01.jpg", alt: "Judocas em ação" },
  { src: "/images/competicao/FotoCompeticao02.jpg", alt: "Treinamento Neko Judo" },
  { src: "/images/competicao/FotoCompeticao03Cortada.jpg", alt: "Disciplina e Respeito" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={item.src}
              alt={item.alt}
              loading="lazy"
              sx={{
                width: "100%",
                height: { xs: "200px", sm: "300px", md: "400px" },
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "#011d3a",
          boxSizing: "border-box",
        }}
      >
        <Container sx={{ my: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              fontWeight: "bold",
            }}
          >
            Bem vindo à Neko Judo
          </Typography>

          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
              color: "#ddd",
            }}
          >
            Disciplina, Respeito e Força
          </Typography>
        </Container>
      </Box>

      {/* Divisores de gradiente */}
      <Box
        sx={{
          height: 80,
          width: "100%",
          background: "linear-gradient(to bottom, #011d3a, #002E5D)",
        }}
      />

      {/* Seção História */}
      <section
        id="historia"
        style={{
          minHeight: "100vh",
          paddingTop: 40,
          paddingBottom: 40,
          backgroundColor: "#002E5D",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ backgroundColor: "#002E5D", padding: 20 }}
        >
          <Box
            sx={{
              backdropFilter: "blur(5px)",
              transition: "backdrop-filter 0.5s ease",
            }}
          >
            <HomeHistoria />
          </Box>
        </motion.div>
      </section>

      <Box
        sx={{
          height: 80,
          width: "100%",
          background: "linear-gradient(to bottom, #002E5D, #21609e)",
        }}
      />

      {/* Seção Regras */}
      <section
        id="regras"
        style={{
          minHeight: "100vh",
          backgroundColor: "#21609e",
          width: "100%",
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ backgroundColor: "#21609e", padding: 20 }}
        >
          <Box
            sx={{
              backdropFilter: "blur(5px)",
              transition: "backdrop-filter 0.5s ease",
            }}
          >
            <HomeRegras />
          </Box>
        </motion.div>
      </section>

      <Box
        sx={{
          height: 80,
          width: "100%",
          background: "linear-gradient(to bottom, #21609e, #ffffff)",
        }}
      />

      {/* Seção Senseis */}
      <section
        id="senseis"
        style={{
          minHeight: "100vh",
          paddingTop: 40,
          paddingBottom: 40,
          backgroundColor: "#ffffff",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ backgroundColor: "#ffffff", padding: 40 }}
        >
          <Box
            sx={{
              backdropFilter: "blur(5px)",
              transition: "backdrop-filter 0.5s ease",
            }}
          >
            <HomeSensei />
          </Box>
        </motion.div>
      </section>

      {/* Divisor animado */}
      <Box
        sx={{
          height: 5,
          width: "100%",
          margin: "0 auto",
          background:
            "linear-gradient(90deg, #ffffff, #2196f3, #001F3F)",
          animation: "moveGradient 3s linear infinite",
        }}
      />

      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>

      {/* Seção Contato */}
      <section
        id="contato"
        style={{
          backgroundColor: "#001F3F",
          width: "100%",
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ backgroundColor: "#001F3F", padding: 40 }}
        >
          <Box
            sx={{
              backdropFilter: "blur(5px)",
              transition: "backdrop-filter 0.5s ease",
            }}
          >
            <HomeContato />
          </Box>
        </motion.div>
      </section>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          padding: 2,
          color: "white",
          borderTop: "1px solid #ffffff",
          backgroundColor: "#001F3F",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Neko Judo. Todos os direitos reservados.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link
            component="button"
            onClick={() => navigate("/login")}
            sx={{
              cursor: "pointer",
              textDecoration: "underline",
              background: "none",
              border: "none",
              color: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              padding: 0,
            }}
          >
            Acesso ao login
          </Link>
        </Typography>
      </Box>
    </motion.div>
  );
}

/*
IA:

#000094
#0F08A6
#1F10B8
#2E17CB
#3E1FDD

Minha:

#001F3F
#002E5D
#003D7A
#004C97
#005AB4
#0069D1

Outra paleta:

#ADD8E6
#FFFFFF
#001F3F
#CCCCCC
#B0E0E6
#22275F

Outra:
#CBE3FF
#001F3F
#FFFFFF
#475263
*/