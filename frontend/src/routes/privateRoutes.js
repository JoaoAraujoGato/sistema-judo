import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../services/auth";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;