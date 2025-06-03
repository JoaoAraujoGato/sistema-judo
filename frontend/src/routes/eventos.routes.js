import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesEventosPage from '../pages/eventos/DetalhesEventosPage';

export const EventosRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/eventos" element={<DetalhesEventosPage />} />
            {/* Outras rotas relacionadas a eventos podem ir aqui */}
        </Route>
    );
}
