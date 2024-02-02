import React, { Component } from "react";
import Coordenador from "../../../Assets/img/Coordenador.jpeg";

export default class index extends Component {
  render() {
    return (
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
    );
  }
}
