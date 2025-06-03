import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesTreinosPage from '../pages/treinos/DetalhesTreinosPage';

export const TreinosRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/treinos" element={<DetalhesTreinosPage />} />
            {/* Outras rotas relacionadas a treinos podem ir aqui */}
        </Route>
    );
}