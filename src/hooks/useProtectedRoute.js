import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuthContext";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to="/michi-avatares" />;
};

export default ProtectedRoute;
