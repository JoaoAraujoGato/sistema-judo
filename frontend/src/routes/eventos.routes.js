import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesEventoPage from '../pages/eventos/DetahesEventoPage';
import ListaEventosPage from '../pages/eventos/ListaEventosPage';
import EditarEventoPage from '../pages/eventos/EditarEventoPage';

export const EventosRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
                    <Route path="/eventos" element={<ListaEventosPage />} />
                    <Route path="/evento/:id" element={<DetalhesEventoPage />} />
                    <Route path="/evento/:id/editar" element={<EditarEventoPage />} />
                    <Route path="/evento/novo" element={<EditarEventoPage />} />
            {/* Outras rotas relacionadas a eventos podem ir aqui */}
        </Route>
    );
}
