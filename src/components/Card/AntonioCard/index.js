import React, { Component } from "react";
import ViceCoordenador from "../../../Assets/img/ViceCoordenador.jpeg";

export default class index extends Component {
  render() {
    return (
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
    );
  }
}
