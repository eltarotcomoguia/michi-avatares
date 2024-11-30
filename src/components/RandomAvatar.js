import React, { useState, useRef } from "react";

const RandomAvatar = ({ assets, width = 512, height = 512 }) => {
    const canvasRef = useRef(null);
    const [layers, setLayers] = useState([]);

    // Función que carga las imágenes de forma asincrónica
    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = () => reject(`Error loading image: ${src}`);
        });
    };

    // Selecciona aleatoriamente una imagen de cada categoría
    const getRandomLayers = () => {
        return Object.keys(assets).map((key) => {
            const items = assets[key];
            const randomImage = items[Math.floor(Math.random() * items.length)];
            return randomImage;
        });
    };

    // Función para cargar todas las imágenes de manera asíncrona
    const loadAllImages = async () => {
        const randomLayers = getRandomLayers(); // Obtiene las imágenes aleatorias
        try {
            const loadedImages = await Promise.all(randomLayers.map(loadImage)); // Espera a que todas las imágenes se carguen
            setLayers(loadedImages); // Actualiza el estado de las capas cuando todas estén cargadas
        } catch (error) {
            console.error(error);
        }
    };

    // Renderizar las capas en el canvas después de que todas las imágenes se hayan cargado
    React.useEffect(() => {
        if (canvasRef.current && layers.length > 0) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            // Limpiar el lienzo
            ctx.clearRect(0, 0, width, height);

            // Dibujar cada capa en orden
            layers.forEach((img) => {
                ctx.drawImage(img, 0, 0, width, height);
            });
        }
    }, [layers, width, height]);

    // Generar un nuevo avatar aleatorio al hacer clic
    const generateRandomAvatar = () => {
        loadAllImages(); // Llama a la función para cargar imágenes aleatorias
    };

    // Función para descargar la imagen generada
    const downloadAvatar = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const imageURL = canvas.toDataURL("image/png"); // Convierte el canvas a una URL de imagen en base64
            const link = document.createElement("a"); // Crea un enlace de descarga
            link.href = imageURL;
            link.download = "MichiAvatar.png"; // Nombre del archivo a descargar
            link.click(); // Simula un clic para iniciar la descarga
        }
    };

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                style={{ border: "1px solid #ccc", marginBottom: "10px" }}
            />
            <div>
                <button onClick={generateRandomAvatar}>Generar Michi Avatar</button>
                <button onClick={downloadAvatar}>Descargar Avatar</button>
            </div>
        </div>
    );
};

export default RandomAvatar;
