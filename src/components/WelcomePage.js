import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";
import {GlobalStyle} from '../Styles/GlobalStyle'
import {Mainn, Section, Div, Title, Label, Input, Button, I} from '../Styles/Style'

const WelcomePage = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const correctPassword = "michi";

        if (password === correctPassword) {
            login();
            navigate("/avatar");
        } else {
            setError("Contraseña incorrecta. Intenta de nuevo.");
        }
    };

    return (
        <Mainn>
            <GlobalStyle/>
            <Section seguridad>
                <I/>
                <Div texto>
                    <Title>Bienvenido</Title>
                    <form onSubmit={handleSubmit}>
                        <Label htmlFor="password">Ingresa la palabra clave </Label>

                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <Button siguiente type="submit">Entrar</Button>
                    </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </Div>
            </Section>
        </Mainn>
    );
};

export default WelcomePage;
