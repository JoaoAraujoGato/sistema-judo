import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesGaleriaPage from '../pages/galeria/DetalhesGaleriaPage';

export const GaleriasRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/galeria_admin" element={<DetalhesGaleriaPage />} />
            {/* Outras rotas relacionadas a galeria podem ir aqui */}
        </Route>
    );
}