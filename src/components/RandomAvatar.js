import React, { useState, useRef, useEffect } from "react";

const RandomAvatar = ({ assets, width = 256, height = 256 }) => {
    const canvasRef = useRef(null);
    const [layers, setLayers] = useState([]);
    const [imageState, setImageState] = useState("default"); // 'default', 'loading', 'avatar'
    const [isGenerating, setIsGenerating] = useState(false); // Estado para habilitar/deshabilitar botones

    const defaultImage = "/Img/Estatico/Inicio.png";
    const loadingGif = "/Img/Estatico/GifCarga.gif";

    // Función para cargar imágenes de forma asincrónica
    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                //console.log(`Imagen cargada: ${src}`);
                resolve(img);
            };
            img.onerror = () => {
                //console.error(`Error cargando la imagen: ${src}`);
                reject(new Error(`Error cargando la imagen: ${src}`));
            };
        });
    };

    // Función para seleccionar aleatoriamente las capas de las imágenes
    const getRandomLayers = () => {
        const randomLayers = Object.keys(assets).map((key) => {
            const items = assets[key];
            const randomImage = items[Math.floor(Math.random() * items.length)];
            return randomImage;
        });
        //console.log("Capas seleccionadas:", randomLayers);
        return randomLayers;
    };

    // Función para cargar todas las imágenes de las capas
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
            //console.error("Error cargando las capas:", error);
            setImageState("default");
            setIsGenerating(false); // Habilitar botón
        }
    };

    // Renderizar las capas en el canvas
    useEffect(() => {
        if (canvasRef.current && layers.length > 0) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            /*  if (!ctx) {
                  console.error("Error: No se pudo obtener el contexto 2D del canvas.");
                  return;
              }
              */

            // Agregar fondo blanco al canvas
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, width, height);

            // Dibujar cada capa en el canvas
            layers.forEach((img, index) => {
                ctx.drawImage(img, 0, 0, width, height); // Escalar las imágenes
                //console.log(`Capa ${index} dibujada en el canvas.`);
            });
        }
    }, [layers, width, height]);

    // Generar un nuevo avatar aleatorio
    const generateRandomAvatar = () => {
        // console.log("Generando avatar...");
        loadAllImages();
    };

    // Descargar el avatar generado
    const downloadAvatar = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const imageURL = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imageURL;
            link.download = "MichiAvatar.png";
            link.click();
        }
    };

    return (
        <div>
            {imageState === "default" && (
                <img
                    src={defaultImage}
                    alt="Default"
                    width={width}
                    height={height}
                    style={{ border: "1px solid #ccc", marginBottom: "10px" }}
                />
            )}
            {imageState === "loading" && (
                <img
                    src={loadingGif}
                    alt="Loading"
                    width={width}
                    height={height}
                    style={{ border: "1px solid #ccc", marginBottom: "10px" }}
                />
            )}
            {/* El canvas siempre está presente pero oculto si no es necesario */}
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                style={{
                    border: "1px solid #ccc",
                    marginBottom: "10px",
                    display: imageState === "avatar" ? "block" : "none",
                }}
            />
            <div>
                <button onClick={generateRandomAvatar} disabled={isGenerating}>
                    {isGenerating ? "Generando..." : "Generar Michi Avatar"}
                </button>
                <button onClick={downloadAvatar} disabled={isGenerating}>
                    Descargar Avatar
                </button>
            </div>
        </div>
    );
};

export default RandomAvatar;
