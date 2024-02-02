import React from "react";
import "../Assets/css/Instalacao.css";
import TextInstalacao from "../components/Text/TextInstalacao";
import imagem1 from "../Assets/img/computador_esquerda.jpeg";
import imagem2 from "../Assets/img/armario_cima.jpeg";
import imagem3 from "../Assets/img/computador_baixo.jpeg";
import imagem4 from "../Assets/img/servidor_direita.jpeg";

function Instalacoes() {
  return (
    <>
      <div style={{ marginBottom: 100 }}>
        <div className="container">
          <TextInstalacao />
          <div className="image-container">
            <img src={imagem1} alt="Imagem 1" className="image" />
          </div>
          <div className="image-container">
            <img src={imagem2} alt="Imagem 2" className="image" />
          </div>
          <div className="image-container">
            <img src={imagem3} alt="Imagem 3" className="image" />
          </div>
          <div className="image-container">
            <img src={imagem4} alt="Imagem 4" className="image" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Instalacoes;
