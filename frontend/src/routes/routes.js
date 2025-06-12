import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from '../pages/login/LoginPage';
// import EditarCadastroSenseiPage from './pages/sensei/EditarCadastroSenseiPage';
import DetalhesGaleriaPage from '../pages/galeria/DetalhesGaleriaPage';
import DetalhesHomePage from '../pages/home/DetalhesHomePage';
// import DetalhesMensalidadesPage from './pages/mensalidades/DetalhesMensalidadesPage';
import MenuLateral from '../pages/menuLateral/MenuLateral';
import RecuperarSenhaPage from '../pages/login/RecuperarSenhaPage';

import {
    AlunosRoutes,
    ConfiguracoesRoutes,
    DashboardRoutes,
    EventosRoutes,
    GaleriasRoutes,
    PresencasRoutes,
    MensalidadesRoutes,
    SenseiRoutes,
    TreinosRoutes
} from './index';

function LayoutComMenu(){
    return (
        <MenuLateral>
            <Routes>
                {AlunosRoutes()}
                {ConfiguracoesRoutes()}
                {DashboardRoutes()}
                {EventosRoutes()}
                {GaleriasRoutes()}
                {/* <Route exact path='/mensalidades' element={
                    <PrivateRoute>
                        <DetalhesMensalidadesPage />
                    </PrivateRoute>
                }/>  */}
                {MensalidadesRoutes()}
                {PresencasRoutes()}
                {SenseiRoutes()}
                {TreinosRoutes()}
                
                {/* Redireciona qualquer rota desconhecida para /dashboard */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </MenuLateral>
    )
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/galeria' element={<DetalhesGaleriaPage />}/>
                <Route exact path='/login' element={<LoginPage />}/>
                <Route exact path='/recuperar-senha' element={<RecuperarSenhaPage />}/>
                <Route exact path="/" element={<DetalhesHomePage />} />

                {/* Rota vazia redireciona para /home */}
                {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                
                {/* Todas as outras rotas com menu lateral */}
                <Route path="/*" element={<LayoutComMenu />} />
            </Routes>
        </BrowserRouter>
    )
}
