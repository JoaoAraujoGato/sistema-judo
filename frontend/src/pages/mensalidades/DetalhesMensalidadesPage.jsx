import { Box } from "@mui/material";

function DetalhesMensalidadesPage(){
    return (
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
                Mensalidades
            </h3>
            
            <h4>
                (WIP)
            </h4>
        </Box>
    )
}

export default DetalhesMensalidadesPage;