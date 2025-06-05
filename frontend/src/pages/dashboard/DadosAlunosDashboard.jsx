import { Box, Typography } from "@mui/material"
import { FiUser } from "react-icons/fi";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export function GraficoPorGeneroAlunos(){
    const COLORS = ["#0d00ff", "#eb13e0"];
    const generoData = [
        { name: "Masculino", value: 22 },
        { name: "Feminino", value: 17 },
    ];

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Distribuição por Gênero
            </Typography>
            <ResponsiveContainer width="100%" height={120}>
            <PieChart>
                <Pie
                data={generoData}
                cx="50%"
                cy="50%"
                outerRadius={40}
                labelLine={false}
                dataKey="value"
                >
                {generoData.map((entry, index) => (
                    <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    />
                ))}
                </Pie>
                <Tooltip />
            </PieChart>
            </ResponsiveContainer>

            {/* Legenda com ícones */}
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mt: 2,
            }}
            >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FiUser color={COLORS[0]} size={20} />
                <Typography>Masculino</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FiUser color={COLORS[1]} size={20} />
                <Typography>Feminino</Typography>
            </Box>
            </Box>
        </>
    )
};

export function AlunosPorTurma(){
    const alunosPorTurma = [
        { turma: "Turma A", quantidade: 12 },
        { turma: "Turma B", quantidade: 18 },
        { turma: "Turma C", quantidade: 9 },
    ];

    return (
        <>
            <Typography variant="h6">Alunos por Turma</Typography>
            {alunosPorTurma.map((item) => (
            <Typography key={item.turma} variant="body2">
                {item.turma}: {item.quantidade}
            </Typography>
            ))}
        </>
    )
}