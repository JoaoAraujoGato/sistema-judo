import { Route, Outlet } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import ListaSenseisPage from '../pages/sensei/ListaSenseisPage';
import DetahesConfiguracaoPage from '../pages/configuracoes/DetalhesConfiguracoesPage';
import NovoCadastroSenseiPage from '../pages/sensei/NovoCadastroSenseiPage';

export const SenseiRoutes = () => {
    return (
        <Route element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/senseis" element={<ListaSenseisPage />} />
            <Route path="/sensei/:id" element={<DetahesConfiguracaoPage />} />
            <Route path="/sensei/novo" element={<NovoCadastroSenseiPage />} />
        </Route>
    );
}
