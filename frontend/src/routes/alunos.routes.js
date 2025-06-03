import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import DetalhesAlunosPage from '../pages/alunos/DetalhesAlunoPage';

export const AlunosRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/alunos" element={<DetalhesAlunosPage />} />
            {/* Outras rotas relacionadas a alunos podem ir aqui */}
        </Route>
    );
}
