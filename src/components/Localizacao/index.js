import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <iframe
        className="location-card"
        title="Mapa incorporado"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15801.941298474445!2d-34.960614952063814!3d-8.051874821606747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1966d409d415%3A0x497df2e2ee00ea52!2sUniversidade%20Federal%20de%20Pernambuco!5e0!3m2!1spt-BR!2sbr!4v1700641687501!5m2!1spt-BR!2sbr"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  }
}
