import { Box, Typography } from "@mui/material"
import { FiUser } from "react-icons/fi";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getAlunosPorGenero, getAlunosPorTurma, getEvolucaoMensalAlunos } from "../../regras_negocio/utils/aluno-helpers";
import { useMemo } from "react";

export function GraficoPorGeneroAlunos({alunos}){
    const COLORS = ["#0d00ff", "#eb13e0"];
    const generoData = useMemo(() => getAlunosPorGenero(alunos), [alunos]);
    
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

export function AlunosPorTurma({alunos}){
    
    const alunosPorTurma = useMemo(() => getAlunosPorTurma(alunos) || [],[alunos]);

    return (
        <>
            <Typography variant="h6">Alunos por Turma</Typography>
            {alunosPorTurma?.map((item) => (
            <Typography key={item.turma} variant="body2">
                {item.turma}: {item.quantidade}
            </Typography>
            ))}
        </>
    )
};

export function EvolucaoAlunosCadastrados({alunos}){
    const evolucaoMensal = useMemo(() => getEvolucaoMensalAlunos(alunos),[alunos]);

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Evolução Mensal de Alunos
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={evolucaoMensal}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="alunos" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}