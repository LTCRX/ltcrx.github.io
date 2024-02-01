import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <iframe
          className="location-card vh-100"
          title="Mapa incorporado"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d493.80367428136105!2d-34.955177!3d-8.057607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1be3683ae62b%3A0xd5fa3ad91e24df9d!2sDepartamento%20de%20Energia%20Nuclear%20(DEN)!5e0!3m2!1spt-BR!2sbr!4v1706816684487!5m2!1spt-BR!2sbr"
          style={{ border: 0, width: "80%", height: "60%" }}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </>
    );
  }
}
