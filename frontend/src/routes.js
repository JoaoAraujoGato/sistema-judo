import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import EditarCadastroSenseiPage from './pages/sensei/EditarCadastroSenseiPage';
import DetahesSenseiPage from './pages/sensei/DetalhesSenseiPage';
import DetalhesHomePage from './pages/home/DetalhesHomePage';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sensei/editar' element={<EditarCadastroSenseiPage />}/>
                <Route path='/sensei' element={<DetahesSenseiPage />}/>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/home' element={<DetalhesHomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}
