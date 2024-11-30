import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import AvatarPage from "./AvatarPage.js";

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/avatar" element={<AvatarPage />} />
            </Routes>
        </Router>
    );
};

export default Main;

