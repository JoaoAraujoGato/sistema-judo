import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesDashboardPage from '../pages/dashboard/DetalhesDashboardPage';

export const DashboardRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/dashboard" element={<DetalhesDashboardPage />} />
            {/* Outras rotas relacionadas a dashboard podem ir aqui */}
        </Route>
    );
}