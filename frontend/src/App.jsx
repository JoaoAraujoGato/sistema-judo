import './global.css';
import AppRoutes from './routes/routes';
import { AuthProvider } from './services/auth';

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />    
    </AuthProvider>
  );
}

