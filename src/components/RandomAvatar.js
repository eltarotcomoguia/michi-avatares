import React, { useState, useRef, useEffect } from "react";
import { Button, Div, ElegantImage, ElegantCanvas } from '../Styles/Style';   
import Inicio from '../image/Estatico/Inicio.png';
import GifCarga from '../image/Estatico/GifCarga.gif';

const RandomAvatar = ({ assets, width = 256, height = 256, downloadWidth = 800, downloadHeight = 800 }) => {
    const canvasRef = useRef(null); // Canvas visible
    const hiddenCanvasRef = useRef(null); // Canvas oculto
    const [layers, setLayers] = useState([]);
    const [imageState, setImageState] = useState("default"); // 'default', 'loading', 'avatar'
    const [isGenerating, setIsGenerating] = useState(false); // Estado para habilitar/deshabilitar botones

    const defaultImage = Inicio;
    const loadingGif = GifCarga;

    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Error cargando la imagen: ${src}`));
        });
    };

    const getRandomLayers = () => {
        return Object.keys(assets).map((key) => {
            const items = assets[key];
            return items[Math.floor(Math.random() * items.length)];
        });
    };

    const loadAllImages = async () => {
        setImageState("loading");
        setIsGenerating(true); // Deshabilitar botón
        const randomLayers = getRandomLayers();
        try {
            const loadedImages = await Promise.all(randomLayers.map(loadImage));
            setLayers(loadedImages);
            setTimeout(() => {
                setImageState("avatar");
                setIsGenerating(false); // Habilitar botón
            }, 2000); // Espera 2 segundos para mostrar el avatar
        } catch (error) {
            setImageState("default");
            setIsGenerating(false); // Habilitar botón
        }
    };

    const renderCanvas = (canvas, layers, width, height) => {
        if (canvas && layers.length > 0) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, width, height); // Limpia el canvas
            ctx.fillStyle = "#ffffff"; // Fondo blanco
            ctx.fillRect(0, 0, width, height); // Rellena el fondo

            layers.forEach((img) => {
                ctx.drawImage(img, 0, 0, width, height); // Dibuja cada capa
            });
        }
    };

    useEffect(() => {
        if (canvasRef.current) {
            renderCanvas(canvasRef.current, layers, width, height); // Renderiza en el canvas visible
        }
        if (hiddenCanvasRef.current) {
            renderCanvas(hiddenCanvasRef.current, layers, downloadWidth, downloadHeight); // Renderiza en el canvas oculto
        }
    }, [layers, width, height, downloadWidth, downloadHeight]);

    const generateRandomAvatar = () => {
        loadAllImages();
    };

    const downloadAvatar = () => {
        const canvas = hiddenCanvasRef.current; // Usa el canvas oculto
        if (canvas) {
            const imageURL = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imageURL;
            link.download = "MichiAvatar.png";
            link.click();
        }
    };

    return (
        <Div texto>
            {imageState === "default" && (
                <ElegantImage
                    src={defaultImage}
                    alt="Default"
                    width={width}
                    height={height}
                />
            )}
            {imageState === "loading" && (
                <ElegantImage
                    src={loadingGif}
                    alt="Loading"
                    width={width}
                    height={height}
                />
            )}
            {/* Canvas visible */}
            <ElegantCanvas
                ref={canvasRef}
                width={width}
                height={height}
                style={{
                    display: imageState === "avatar" ? "inline" : "none",
                }}
            />
            {/* Canvas oculto */}
            <canvas
                ref={hiddenCanvasRef}
                width={downloadWidth}
                height={downloadHeight}
                style={{ display: "none" }}
            />
            <Div boton>
                <Button atras onClick={generateRandomAvatar} disabled={isGenerating}>
                    {isGenerating ? "Generando..." : "Generar Michi Avatar"}
                </Button>
                <Button siguiente onClick={downloadAvatar} disabled={isGenerating}>
                    Descargar Avatar
                </Button>
            </Div>
        </Div>
    );
};

export default RandomAvatar;
