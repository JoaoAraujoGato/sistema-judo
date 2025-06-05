import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesMensalidadesPage from '../pages/mensalidades/DetalhesMensalidadesPage';

export const MensalidadesRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/mensalidades" element={<DetalhesMensalidadesPage />} />
            {/* Outras rotas relacionadas a alunos podem ir aqui */}
        </Route>
    );
}