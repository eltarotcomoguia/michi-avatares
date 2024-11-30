import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const correctPassword = "michi";

        if (password === correctPassword) {
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
                        <label htmlFor="password">Contraseña: </label>
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
