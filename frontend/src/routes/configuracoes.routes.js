import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesConfiguracoesPage from '../pages/configuracoes/DetalhesConfiguracoesPage';

export const ConfiguracoesRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/configuracoes" element={<DetalhesConfiguracoesPage />} />
            {/* Outras rotas relacionadas a configuracoes podem ir aqui */}
        </Route>
    );
}