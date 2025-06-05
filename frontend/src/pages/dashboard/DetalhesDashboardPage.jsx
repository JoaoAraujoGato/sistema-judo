import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { FiUser } from "react-icons/fi"; // ícones do react-icons

const alunosPorTurma = [
  { turma: "Turma A", quantidade: 12 },
  { turma: "Turma B", quantidade: 18 },
  { turma: "Turma C", quantidade: 9 },
];

const generoData = [
  { name: "Masculino", value: 22 },
  { name: "Feminino", value: 17 },
];

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

const treinosDoDia = [
  {
    titulo: "Treino Funcional",
    descricao: "Circuito com foco em resistência e agilidade.",
  },
  {
    titulo: "Alongamento",
    descricao: "Sessão para relaxamento muscular e flexibilidade.",
  },
];

const proximosEventos = [
  { data: "15/06", titulo: "Festival Interno de Lutas" },
  { data: "25/07", titulo: "Avaliação Semestral" },
  { data: "12/08", titulo: "Palestra sobre Nutrição Esportiva" },
];

const COLORS = ["#0d00ff", "#eb13e0"];

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
                                <>
                                    <Typography variant="h6">Alunos por Turma</Typography>
                                    {alunosPorTurma.map((item) => (
                                    <Typography key={item.turma} variant="body2">
                                        {item.turma}: {item.quantidade}
                                    </Typography>
                                    ))}
                                </>
                            )} {i === 1 && (
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
            <Box sx={{ flex: 1, minWidth: 300 }}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardContent>
                        <Typography variant="h6">Treinos do Dia</Typography>
                        <List>
                            {treinosDoDia.map((treino, index) => (
                                <ListItem key={index}>
                                <ListItemText
                                    primary={treino.titulo}
                                    secondary={treino.descricao}
                                />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Box>

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
                <Card>
                    <CardContent>
                        <Typography variant="h6">Próximos Eventos</Typography>
                        <List>
                            {proximosEventos.map((evento, index) => (
                                <ListItem key={index}>
                                <ListItemText
                                    primary={evento.titulo}
                                    secondary={`Data: ${evento.data}`}
                                />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Box>
        </Box>

    </Box>
  );
}

export default DetalhesDashboardPage;
