import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";

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
        <main>
            <section>
                <div>
                    <h1>Bienvenido</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="password">Ingresa la palabra clave </label>
                        <br/>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </section>
        </main>
    );
};

export default WelcomePage;
