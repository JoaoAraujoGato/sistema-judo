import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {
  Box, Typography, Button, Modal, TextField, MenuItem
} from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import { formatarData } from '../../regras_negocio/utils/data-helpers';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import { toast } from 'react-toastify';

const DetalhesTreinosPage = () => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [treinos, setTreinos] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const [duracao, setDuracao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [turma, setTurma] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const carregarTreinos = async () => {
    try {
        const response = await api.get('/treinos');
        const treinosFormatados = response.data.map((treino) => {
        const start = `${treino.data}T${treino.horario}`;
        const duracaoEmMinutos = parseInt(treino.duracao, 10);
        const startDate = new Date(start);
        const endDate = new Date(startDate.getTime() + duracaoEmMinutos * 60000);

        return {
            id: treino.id,
            title: `${treino.turma} - ${treino.duracao} min`,
            start: start, // necessário para horário no calendário
            end: endDate.toISOString(),
            allDay: false,
            extendedProps: {
            description: treino.descricao,
            horario: treino.horario,
            turma: treino.turma,
            duracao: treino.duracao
            }
        };
        });

        setTreinos(treinosFormatados);
    } catch (error) {
        console.error('Erro ao carregar treinos:', error);
    }
    };


  useEffect(() => {
    carregarTreinos();
  }, []);

    const handleEventClick = ({ event }) => {
        const fullDate = event.startStr; // Exemplo: "2025-06-04T10:30:00Z"
        const dateOnly = fullDate.split('T')[0]; // Pega só a parte antes do 'T'

        setSelectedEvent({
            id: event.id,
            title: event.title,
            description: event.extendedProps.description,
            date: dateOnly,       // aqui só a data YYYY-MM-DD
            horario: event.extendedProps.horario,
            turma: event.extendedProps.turma,
            duracao: event.extendedProps.duracao
        });
        setEditMode(false);
        setOpenDetailModal(true);
    };


  const handleCreateEvent = async () => {
    if (!duracao || !turma || !data || !horario) {
      toast.warning('Duração, turma, data e horário são obrigatórios!');
      return;
    }

    try {
      await api.post('/treino', {
        duracao,
        descricao,
        turma,
        data,
        horario
      });

      await carregarTreinos();
      setOpenCreateModal(false);

      setDuracao('');
      setDescricao('');
      setTurma('');
      setData('');
      setHorario('');
    } catch (error) {
      console.error('Erro ao criar treino:', error);
      toast.error('Erro ao criar treino');
    }
  };

  const handleUpdateTreino = async () => {
    try {
      await api.put(`/treino/${selectedEvent.id}`, {
        descricao: selectedEvent.description,
        data: selectedEvent.date,
        horario: selectedEvent.horario,
        turma: selectedEvent.turma,
        duracao: selectedEvent.duracao
      });

      await carregarTreinos();
      setOpenDetailModal(false);
      setEditMode(false);
    } catch (error) {
      console.error('Erro ao atualizar treino:', error);
      toast.error('Erro ao atualizar treino');
    }
  };

  return (
    <Box
        p={3}
        minHeight="100vh"
        sx={{
            backgroundImage: `url("/images/FundoDeTelaJudoCinza.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Treinos</Typography>
        <Button
          variant="contained"
          startIcon={<FaPlus />}
          onClick={() => setOpenCreateModal(true)}
        >
          Novo Treino
        </Button>
      </Box>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={ptBrLocale}
        events={treinos}
        eventClick={handleEventClick}
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
      />

      {/* Modal de Detalhes / Edição */}
      <Modal open={openDetailModal} onClose={() => setOpenDetailModal(false)}>
        <Box
          sx={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
            p: 4, borderRadius: 2, boxShadow: 24, width: 300,
            display: 'flex', flexDirection: 'column', gap: 2
          }}
        >
          <Typography variant="h6">Treino</Typography>

          {editMode ? (
            <>
              <TextField
                label="Data"
                type="date"
                value={selectedEvent?.date || ''}
                onChange={(e) =>
                  setSelectedEvent({ ...selectedEvent, date: e.target.value })
                }
                InputLabelProps={{ shrink: true }}
              />
              
              <TextField
                label="Duração (minutos)"
                type="number"
                value={selectedEvent?.duracao || ''}
                onChange={(e) =>
                  setSelectedEvent({ ...selectedEvent, duracao: e.target.value })
                }
              />

              <TextField
                label="Horário"
                type="time"
                value={selectedEvent?.horario || ''}
                onChange={(e) =>
                  setSelectedEvent({ ...selectedEvent, horario: e.target.value })
                }
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                select
                label="Turma"
                value={selectedEvent?.turma || ''}
                onChange={(e) =>
                  setSelectedEvent({ ...selectedEvent, turma: e.target.value })
                }
              >
                <MenuItem value="Infantil">Infantil</MenuItem>
                <MenuItem value="Intermediário">Intermediário</MenuItem>
                <MenuItem value="Adulto">Adulto</MenuItem>
              </TextField>

              <TextField
                label="Descrição"
                value={selectedEvent?.description || ''}
                onChange={(e) =>
                  setSelectedEvent({ ...selectedEvent, description: e.target.value })
                }
                multiline
                rows={3}
              />

              <Button variant="contained" onClick={handleUpdateTreino}>
                Salvar Alterações
              </Button>
              <Button onClick={() => setEditMode(false)}>Cancelar</Button>
            </>
          ) : (
            <>
              <Typography><b>Data:</b> {formatarData(selectedEvent?.date)}</Typography>
              <Typography><b>Horário:</b> {selectedEvent?.horario}</Typography>
              <Typography><b>Duração:</b> {selectedEvent?.duracao} minutos</Typography>
              <Typography><b>Turma:</b> {selectedEvent?.turma}</Typography>
              <Typography><b>Descrição:</b></Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                    {selectedEvent?.description?.split('\n').map((item, index) => (
                        <li key={index}>
                        <Typography variant="body2">{item.replace(/^-+/, '').trim()}</Typography>
                        </li>
                    ))}
                </Box>
              <Button variant="outlined" onClick={() => setEditMode(true)}>
                Editar
              </Button>
            </>
          )}
        </Box>
      </Modal>

      {/* Modal de Criação */}
      <Modal open={openCreateModal} onClose={() => setOpenCreateModal(false)}>
        <Box
          component="form"
          sx={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', bgcolor: 'background.paper',
            p: 4, borderRadius: 2, boxShadow: 24, width: 300,
            display: 'flex', flexDirection: 'column', gap: 2
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateEvent();
          }}
        >
          <Typography variant="h6">Criar Novo Treino</Typography>

          <TextField
            label="Data"
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
          />

          <TextField
            label="Horário"
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 60 }}
            required
          />

          <TextField
            label="Duração (minutos)"
            type="number"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
            required
            inputProps={{ min: 1 }}
          />

          <TextField
            select
            label="Turma"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            required
          >
            <MenuItem value="Infantil">Infantil</MenuItem>
            <MenuItem value="Intermediário">Intermediário</MenuItem>
            <MenuItem value="Adulto">Adulto</MenuItem>
          </TextField>

          <TextField
            label="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            multiline
            rows={3}
          />

          <Button type="submit" variant="contained">
            Salvar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default DetalhesTreinosPage;
