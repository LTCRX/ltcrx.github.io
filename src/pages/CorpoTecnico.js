import React from "react";
import "../Assets/css/CorpoTecnico.css";
import CardCoordenador from "../components/Card/AntominoCard";
import CardViceCoordenador from "../components/Card/AntonioCard";
import TextCorpoTecnico from "../components/Text/TextCorpoTecnico";
import TitleComite from "../components/Title/TitleComite";

function CorpoTecnico() {
  return (
    <div className="corpo-tecnico-container">
      <div className="corpo-tecnico-content">
        <TextCorpoTecnico />
        <TitleComite />
      </div>
      <div className="corpo-tecnico-cards">
        <CardCoordenador />
        <CardViceCoordenador />
      </div>
    </div>
  );
}

export default CorpoTecnico;
