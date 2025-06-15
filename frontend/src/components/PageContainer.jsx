import { Box, Typography } from "@mui/material";

export default function PageContainer({ title, children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: `url("/images/FundoDeTelaJudoCinza.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        p: 4,
      }}
    >
      {title && (
        <Typography variant="h4" fontWeight="bold" mb={3}>
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
}
