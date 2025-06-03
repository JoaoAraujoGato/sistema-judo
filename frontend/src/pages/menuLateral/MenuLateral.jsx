import { Box, Drawer, Toolbar, List, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { FaChartBar, FaUserAlt, FaMoneyBillWave, FaDumbbell, FaCheckSquare, FaCalendarAlt, FaImages, FaCog } from 'react-icons/fa';

import { useCallback, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';

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
        icon: <FaMoneyBillWave />,
        texto: 'Mensalidades',
        path: '/mensalidades',
    },{
        icon: <FaDumbbell />,
        texto: 'Treinos',
        path: '/treinos',
    },{
        icon: <FaCheckSquare />,
        texto: 'Presenças',
        path: '/presencas',
    },{
        icon: <FaCalendarAlt />,
        texto: 'Eventos',
        path: '/eventos',
    },{
        icon: <FaImages />,
        texto: 'Galeria',
        path: '/galeria',
    },{
        icon: <FaCog />,
        texto: 'Configurações',
        path: '/configuracoes',
    },
];

function MenuLateral(props){
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("/dashboard")

    const handleClik = useCallback((pathName) => {
        setCurrentPage(pathName);
        navigate(pathName)
    },[navigate]);

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
                    <Box display="flex" alignItems="center">
                        <img
                            src="/images/LogoNekoJudoSemFundo.png"
                            alt="logo"
                            style={{
                                width: '60px',
                                height: '60px',
                                marginTop: '2px' 
                            }}
                        />
                        <h6 style={{ margin: 0 }}>Neko Judo</h6>
                    </Box>
                </Toolbar>
                <Divider />
                <List>
                {paginasNavegacao.map(({icon, texto, path}, index) => (
                    <ListItem key={texto} selected={currentPage === path} disablePadding onClick={() => handleClik(path)}>
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
            <Box component="main" sx={{ marginLeft: `${drawerWidth}px`, padding: 2 }}>
                {props.children}
            </Box>
        </>
  );
}

export default MenuLateral;