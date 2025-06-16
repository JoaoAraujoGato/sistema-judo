import { Box } from "@mui/material";

function DetahesPresencasPage(){
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{
                    backgroundImage: `url("/images/FundoDeTelaJudoCinza.png")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <h3>
                    Presenças
                </h3>
            </Box>
            {/* Quero adicionar um botão para redirecionar para a página de cadastro de presenca */}
            {/* quero adicionar uma lista de presencas em que mostra a turma, data, numero de alunos que estiveram presentes e quantos faltaram*/}
        </>
    )
}

export default DetahesPresencasPage;