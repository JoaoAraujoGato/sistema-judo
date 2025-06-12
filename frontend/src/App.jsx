import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/routes';
import { AuthProvider } from './services/auth';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './regras_negocio/utils/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <AppRoutes />
        <ToastContainer />    
      </AuthProvider>
    </ThemeProvider>
  );
}

