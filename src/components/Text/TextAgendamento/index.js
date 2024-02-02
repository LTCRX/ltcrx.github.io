import React, { Component } from "react";

export default class Index extends Component {
  render() {
    const estiloTexto = {
      marginInlineStart: "20%",
      marginInlineEnd: "20%",
    };

    return (
      <div>
        <p className="fs-6" style={estiloTexto}>
          Ficou interessado(a) em nosso serviço? Preencha o formulário abaixo e,
          em seguida, envie-nos em anexo pelo e-mail que consta abaixo. O
          formulário deve ser enviado no formato PDF.
        </p>
      </div>
    );
  }
}
