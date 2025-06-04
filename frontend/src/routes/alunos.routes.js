import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import ListaAlunosPage from '../pages/alunos/ListaAlunosPage';
import DetalhesAlunoPage from '../pages/alunos/DetalhesAlunoPage';
import EditarAlunoPage from '../pages/alunos/EditarAlunoPage';

export const AlunosRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/alunos" element={<ListaAlunosPage />} />
            <Route path="/aluno/:id" element={<DetalhesAlunoPage />} />
            <Route path="/aluno/:id/editar" element={<EditarAlunoPage />} />
            <Route path="/aluno/novo" element={<EditarAlunoPage />} />
            {/* Outras rotas relacionadas a alunos podem ir aqui */}
        </Route>
    );
}
