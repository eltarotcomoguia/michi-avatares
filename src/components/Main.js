import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuthContext.js";
import ProtectedRoute from "../hooks/useProtectedRoute.js";
import WelcomePage from "./WelcomePage.js";
import AvatarPage from "./AvatarPage.js";

const Main = () => {
    return (
        <AuthProvider>
            <Router basename="/michi-avatares">
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/avatar"
                        element={
                            <ProtectedRoute>
                                <AvatarPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default Main;

