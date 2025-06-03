import { Box, Drawer, Toolbar, List, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { toast } from 'react-toastify';

import {
    FaChartBar,
    FaUserAlt,
    // FaMoneyBillWave,
    FaDumbbell,
    FaCheckSquare,
    FaCalendarAlt,
    FaImages,
    FaCog
} from 'react-icons/fa';

import { useCallback } from 'react';
import { IconContext } from 'react-icons/lib';
import { useNavigate, useLocation } from 'react-router-dom';
import { GiBlackBelt } from 'react-icons/gi';
import { CiLogout } from "react-icons/ci";
import { useAuth } from '../../services/auth';


const drawerWidth = 200;
const paginasNavegacao = [
    {
        icon: <FaChartBar  />,
        texto: 'Dashboard',
        path: '/dashboard',
    },{
        icon: <FaUserAlt />,
        texto: 'Alunos',
        path: '/alunos',
    },{
    //     icon: <FaMoneyBillWave />,
    //     texto: 'Mensalidades',
    //     path: '/mensalidades',
    // },{
        icon: <FaDumbbell />,
        texto: 'Treinos',
        path: '/treinos',
    },{
        icon: <FaCheckSquare />,
        texto: 'Presenças',
        path: '/presencas',
    },{
        icon: <GiBlackBelt />,
        texto: 'Professores',
        path: '/sensei',
    },{
        icon: <FaCalendarAlt />,
        texto: 'Eventos',
        path: '/eventos',
    },{
        icon: <FaImages />,
        texto: 'Galeria',
        path: '/galeria_admin',
    },{
        icon: <FaCog />,
        texto: 'Configurações',
        path: '/configuracoes',
    },{
        icon: <CiLogout />,
        texto: 'Sair',
        path: '/logout',
    },
];

function MenuLateral(props){
    const navigate = useNavigate();
    // O location não está fazendo nada já que o selected nao ta funfando, mas vou deixar para lembrar depois como pega o path
    const location = useLocation();
    const { signOutUser } = useAuth();

    const handleClik = useCallback((pathName) => {
        if(pathName === '/logout'){
            signOutUser();
            toast.info("Até logo! Você saiu com sucesso 👋", {
            position: "top-right",
            autoClose: 3000,
        });
            navigate('/home');
        } else {
            navigate(pathName)
        }
    },[navigate, signOutUser]);

    return (
        <>
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#001f3f', // azul-marinho
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{ color: 'white' }}>
                    <Box display="flex" alignItems="center" sx={{ marginTop: '12px'}}>
                        <img
                            src="/images/LogoNekoJudoSemFundo.png"
                            alt="logo"
                            style={{
                                width: '60px',
                                height: '60px',
                            }}
                        />
                        <h6 style={{ margin: 0 }}>Neko Judo</h6>
                    </Box>
                </Toolbar>
                <Divider />
                <List>
                {paginasNavegacao.map(({icon, texto, path}, index) => (
                    <ListItem key={texto} selected={location.pathname === path} disablePadding onClick={() => handleClik(path)}>
                    <ListItemButton>
                        <Box mr={2}>
                            <IconContext.Provider
                                value={{
                                    size: "1.3em",
                                    color: '#ffffff',
                                }}
                            >
                                {icon}
                            </IconContext.Provider>
                        </Box>
                        <ListItemText primary={texto} sx={{ color: 'white' }}/>
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Drawer>
            {/* Aqui fica o conteúdo da página, com margem lateral */}
            <Box component="main" sx={{ marginLeft: `${drawerWidth}px` }}>
                {props.children}
            </Box>
        </>
  );
}

export default MenuLateral;