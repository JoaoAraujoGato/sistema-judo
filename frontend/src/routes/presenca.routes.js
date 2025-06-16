import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesPresencasPage from '../pages/presencas/DetalhesPresencasPage';

export const PresencasRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/presenca" element={<DetalhesPresencasPage />} />
            {/* Outras rotas relacionadas a presenças podem ir aqui */}
        </Route>
    );
}