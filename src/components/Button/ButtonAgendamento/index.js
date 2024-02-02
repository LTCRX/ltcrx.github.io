import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div
        class="d-grid gap-2 col-6 mx-auto"
        style={{
          width: 300,
          height: 60,
        }}
      >
        <button class="btn custom-color" type="button">
          Download do Formulário
        </button>
      </div>
    );
  }
}
