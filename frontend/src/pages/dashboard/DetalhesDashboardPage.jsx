import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { AlunosPorTurma, EvolucaoAlunosCadastrados, GraficoPorGeneroAlunos } from "./DadosAlunosDashboard";
import { TreinosDaSemana } from "./DadosTreinosDashboard";
import { ProximosEventos } from "./DadosEventosDashboard";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

const mensalidadesAtrasadas = 5;
const presencasUltimoTreino = 28;

function DetalhesDashboardPage() {
    const [alunos, setAlunos] = useState([]);
    const [eventos, setEventos] = useState([]);
    
    const getAlunos = useCallback(async () =>  await api.get('/alunos'),[]);
    const getEventos = useCallback(async () =>  await api.get('/eventos'),[]);

    useEffect(() => {
        async function carregarAlunos() {
            try {
                const { data } = await getAlunos();
                setAlunos(data);
            } catch (error) {
                console.error("Erro ao carregar alunos:", error);
            }
        };

        carregarAlunos();
    },[getAlunos]);

    useEffect(() => {
        async function carregarEventos() {
            try {
                const { data } = await getEventos();
                setEventos(data);
            } catch (error) {
                console.error("Erro ao carregar eventos:", error);
            }
        };

        carregarEventos();
    },[getEventos]);

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
                                    <AlunosPorTurma alunos={alunos} />
                                )} {i === 1 && (
                                    <GraficoPorGeneroAlunos alunos={alunos}/>
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
                            <EvolucaoAlunosCadastrados alunos={alunos} />
                        </CardContent>
                    </Card>

                    {/* Card: Próximos Eventos */}
                    <ProximosEventos eventos={eventos}/>
                </Box>
            </Box>

        </Box>
    );
}

export default DetalhesDashboardPage;
