import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuthContext.js";
import ProtectedRoute from "../hooks/useProtectedRoute.js";
import WelcomePage from "./WelcomePage";
import AvatarPage from "./AvatarPage.js";

const Main = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/avatar"
                        element={
                            <ProtectedRoute>
                                <AvatarPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default Main;

