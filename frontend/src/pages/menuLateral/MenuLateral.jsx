import {
    Box,
    Drawer,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { toast } from 'react-toastify';

import {
    FaChartBar, FaUserAlt, FaMoneyBillWave, FaDumbbell, FaCheckSquare,
    FaCalendarAlt, FaImages, FaCog
} from 'react-icons/fa';
import { GiBlackBelt } from 'react-icons/gi';
import { CiLogout } from "react-icons/ci";
import MenuIcon from '@mui/icons-material/Menu';

import { useCallback, useState } from 'react';
import { IconContext } from 'react-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/auth';

const drawerWidth = 200;

const paginasNavegacao = [
    { icon: <FaChartBar />, texto: 'Dashboard', path: '/dashboard' },
    { icon: <FaUserAlt />, texto: 'Alunos', path: '/alunos' },
    { icon: <FaMoneyBillWave />, texto: 'Mensalidades', path: '/mensalidades' },
    { icon: <FaDumbbell />, texto: 'Treinos', path: '/treinos' },
    { icon: <FaCheckSquare />, texto: 'Presenças', path: '/presencas' },
    { icon: <GiBlackBelt />, texto: 'Professores', path: '/senseis' },
    { icon: <FaCalendarAlt />, texto: 'Eventos', path: '/eventos' },
    { icon: <FaImages />, texto: 'Galeria', path: '/galeria_admin' },
    { icon: <FaCog />, texto: 'Configurações', path: '/configuracoes' },
    { icon: <CiLogout />, texto: 'Sair', path: '/logout' },
];

function MenuLateral(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const { signOutUser } = useAuth();

    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md = 960px

    const toggleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClick = useCallback((pathName) => {
        if (pathName === '/logout') {
            signOutUser();
            toast.info("Até logo! Você saiu com sucesso 👋", {
                position: "top-right",
                autoClose: 3000,
            });
            navigate('/');
        } else {
            navigate(pathName);
        }
        if (isMobile) setMobileOpen(false); // fecha o drawer no mobile
    }, [navigate, signOutUser, isMobile]);

    const drawerContent = (
        <>
            <Toolbar sx={{ color: 'white' }}>
                <Box display="flex" alignItems="center" sx={{ marginTop: '12px' }}>
                    <img
                        src="/images/LogoNekoJudoSemFundo.png"
                        alt="logo"
                        style={{ width: '60px', height: '60px' }}
                    />
                    <h6 style={{ margin: 0 }}>Neko Judo</h6>
                </Box>
            </Toolbar>
            <Divider />
            <List>
                {paginasNavegacao.map(({ icon, texto, path }) => (
                    <ListItem key={texto} selected={location.pathname === path} disablePadding onClick={() => handleClick(path)}>
                        <ListItemButton>
                            <Box mr={2}>
                                <IconContext.Provider value={{ size: "1.3em", color: '#ffffff' }}>
                                    {icon}
                                </IconContext.Provider>
                            </Box>
                            <ListItemText primary={texto} sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );

    return (
        <>
            {/* Botão de menu apenas no mobile */}
            {isMobile && (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    sx={{ position: 'fixed', top: 8, left: 8, zIndex: 1300 }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            {/* Drawer responsivo */}
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? mobileOpen : true}
                onClose={toggleDrawer}
                ModalProps={{ keepMounted: true }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#001f3f',
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Conteúdo principal */}
            <Box component="main" sx={{ marginLeft: isMobile ? 0 : `${drawerWidth}px` }}>
                {props.children}
            </Box>
        </>
    );
}

export default MenuLateral;
