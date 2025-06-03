import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/home" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;