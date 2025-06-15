import { Paper } from "@mui/material";

export default function FormContainer({ children }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        width: "100%",
        maxWidth: "600px",
      }}
    >
      {children}
    </Paper>
  );
}
