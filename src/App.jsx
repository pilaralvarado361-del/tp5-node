import React, { useState } from "react";
import "./App.css";

function App() {
  const titulo = "Trabajo con Blobs";
  const nombre = "Pilar";
  const peliculas = [
    "School of Rock",
    "Spider-Man",
    "Harry Potter",
    "Oldboy",
    "Avengers"
  ];

  const [miBlob, setMiBlob] = useState(null);
  const [contenidoSlice, setContenidoSlice] = useState("");

  const crearArchivo = () => {
    const texto =
      "Mi proyecto es " +
      titulo +
      ", mi nombre es " +
      nombre +
      " y mi película favorita es " +
      peliculas[0];

    const blob = new Blob([texto], { type: "text/plain" });

    setMiBlob(blob);
    alert("Archivo creado");
  };

  const descargar = () => {
    if (miBlob === null) {
      alert("Primero crea el archivo");
      return;
    }

    const url = URL.createObjectURL(miBlob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "MovieZone.txt";
    a.click();
  };

  const mostrar = () => {
    if (miBlob === null) {
      alert("Primero crea el archivo");
      return;
    }

    const pedazo = miBlob.slice(0, 30);

    pedazo.text().then((texto) => {
      setContenidoSlice(texto);
    });
  };

  return (
    <div className="App">

      <header className="App-header">
        <h1>{titulo}</h1>
        <p>Proyecto de películas</p>
      </header>

      <div className="contenido">
        <h2>Información</h2>

        <p>Mi nombre es {nombre}</p>
        <p>Mi película favorita es {peliculas[0]}</p>

        <div className="lista">
          <h3>Películas</h3>

          {peliculas.map((pelicula, index) => (
            <p key={index}>{pelicula}</p>
          ))}
        </div>

        {contenidoSlice !== "" && (
          <div className="resultado">
            <h3>Contenido del archivo</h3>
            <p>{contenidoSlice}</p>
          </div>
        )}

        <div className="botones">
          <button onClick={crearArchivo}>Crear TXT</button>

          <button onClick={descargar}>
            Descargar archivo
          </button>

          <button onClick={mostrar}>
            Mostrar TXT
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;