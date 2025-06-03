import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import EditarCadastroSenseiPage from './pages/sensei/EditarCadastroSenseiPage';
import DetahesSenseiPage from './pages/sensei/DetalhesSenseiPage';
import DetalhesDashboardPage from './pages/dashboard/DetalhesDashboardPage';
import MenuLateral from './pages/menuLateral/MenuLateral';

function LayoutComMenu(){
    return (
        <MenuLateral>
            <Routes>
                <Route exact path='/sensei/editar' element={<EditarCadastroSenseiPage />}/>
                <Route exact path='/sensei' element={<DetahesSenseiPage />}/>
                <Route exact path='/dashboard' element={<DetalhesDashboardPage />}/>
                
                {/* Redireciona qualquer rota desconhecida para /dashboard */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </MenuLateral>
    )
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<LoginPage />}/>
                <Route path="/*" element={<LayoutComMenu />} />
            </Routes>
        </BrowserRouter>
    )
}
