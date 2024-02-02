import React, { Component } from "react";
import "./style.css";
import {Button} from "react-bootstrap";
import FormExample from "../../../docs/form.docx"

export default class index extends Component {
  render() {
    return (
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
          <a
              href={FormExample}
              download="formulario_exemplo.docx"
              target="_blank"
              rel="noreferrer"
          >
              <Button variant="danger">Download do Formulário</Button>
          </a>
      </div>
    );
  }
}
