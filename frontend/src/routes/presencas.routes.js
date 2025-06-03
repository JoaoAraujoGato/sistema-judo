import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesPresencasPage from '../pages/presencas/DetalhesPresencasPage';

export const PresencasRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/presencas" element={<DetalhesPresencasPage />} />
            {/* Outras rotas relacionadas a alunos podem ir aqui */}
        </Route>
    );
}