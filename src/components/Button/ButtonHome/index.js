import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center ">
        <div>
          <Link
            to="/AgendamentoPage"
            type="button"
            className="btn custom-color btn-lg mb-2"
          >
            Agende nosso serviço
          </Link>
        </div>
      </div>
    );
  }
}
