import React from "react";
import "../Assets/css/CorpoTecnico.css"; // Importe seu arquivo de estilos aqui
import Coordenador from "../Assets/img/Coordenador.jpeg";
import ViceCoordenador from "../Assets/img/ViceCoordenador.jpeg";

function CorpoTecnico() {
  return (
    <div className="corpo-tecnico-container">
      <div className="corpo-tecnico-content">
        <p className="fs-6">
          Compõe o corpo técnico do LTC-RX técnicos, professores e pesquisadores
          de produtividade em pesquisa do CNPq que possuem reconhecimento e
          atuação nacional e internacional em pesquisas multidisciplinares.
          Vários desses professores são orientadores acadêmicos de alunos de
          mestrado e doutorado no Programa de Pós-Graduação em Energia e
          Tecnologias Nucleares do Departamento de Energia Nuclear (DEN) da
          Universidade Federal de Pernambuco (UFPE).
        </p>
        <p className="fs-4">Comitê Gestor</p>
      </div>

      <div className="corpo-tecnico-cards">
        <div className="corpo-tecnico-card">
          <img
            src={Coordenador}
            alt="Antônio Celso Dantas Antonino"
            className="corpo-tecnico-img"
          />
          <div className="corpo-tecnico-card-content">
            <h3>Antônio Celso Dantas Antonino</h3>
            <p>Coordenador</p>
            <strong>antonio.antonino@ufpe.br</strong>
          </div>
        </div>

        <div className="corpo-tecnico-card">
          <img
            src={ViceCoordenador}
            alt="José Antonio Barbosa"
            className="corpo-tecnico-img"
          />
          <div className="corpo-tecnico-card-content">
            <h3>José Antonio Barbosa</h3>
            <p>Vice Coordenador</p>
            <strong>antonio.antonino@ufpe.br</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorpoTecnico;
