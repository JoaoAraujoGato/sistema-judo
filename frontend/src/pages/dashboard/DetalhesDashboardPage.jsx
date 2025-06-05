import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { AlunosPorTurma, GraficoPorGeneroAlunos } from "./DadosAlunosDashboard";
import { TreinosDaSemana } from "./DadosTreinosDashboard";
import { ProximosEventos } from "./DadosEventosDashboard";

const mensalidadesAtrasadas = 5;
const presencasUltimoTreino = 28;

const evolucaoMensal = [
  { mes: "Jan", alunos: 4 },
  { mes: "Fev", alunos: 8 },
  { mes: "Mar", alunos: 12 },
  { mes: "Abr", alunos: 10 },
  { mes: "Mai", alunos: 15 },
  { mes: "Jun", alunos: 9 },
];

function DetalhesDashboardPage() {
  return (
    <Box 
        minHeight="100vh"
        sx={{
            backgroundImage: `url("/images/FundoDeTelaJudoCinza.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            px: 3,
            py: 3
        }}
    >
        {/* Linha dos 4 cards principais */}
        <Box
            sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            mb: 4,
            }}
        >
            {[...Array(4)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                    flex: "1 1 calc(25% - 24px)",
                    minWidth: 250,
                    }}
                >
                    <Card
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <CardContent>
                            {i === 0 && (
                                <AlunosPorTurma />
                            )} {i === 1 && (
                                <GraficoPorGeneroAlunos />
                            )} {i === 2 && (
                                <>
                                    <Typography variant="h6">Mensalidades Atrasadas</Typography>
                                    <Typography variant="h4">{mensalidadesAtrasadas}</Typography>
                                </>
                            )} {i === 3 && (
                                <>
                                    <Typography variant="h6">
                                        Presenças no Último Treino
                                    </Typography>
                                    <Typography variant="h4">{presencasUltimoTreino}</Typography>
                                </>
                            )}
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Box>

        {/* Parte inferior - 2 colunas lado a lado */}
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                flexWrap: "nowrap", // garante lado a lado
                alignItems: "stretch", // iguala altura
            }}
        >
            {/* Coluna da esquerda - Treinos do Dia */}
            <TreinosDaSemana />

            {/* Coluna da direita - 2 cards empilhados */}
            <Box
                sx={{
                flex: 1,
                minWidth: 300,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                }}
            >
                {/* Card: Evolução Mensal */}
                <Card>
                    <CardContent>
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
                    </CardContent>
                </Card>

                {/* Card: Próximos Eventos */}
                <ProximosEventos />
            </Box>
        </Box>

    </Box>
  );
}

export default DetalhesDashboardPage;
