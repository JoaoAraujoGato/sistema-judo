import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/routes';
import { AuthProvider } from './services/auth';

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <ToastContainer />    
    </AuthProvider>
  );
}

