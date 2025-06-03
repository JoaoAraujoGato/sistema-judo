import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesSenseiPage from '../pages/sensei/DetalhesSenseiPage';

export const SenseiRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/sensei" element={<DetalhesSenseiPage />} />
            {/* Outras rotas relacionadas a dashboard podem ir aqui */}
        </Route>
    );
}
