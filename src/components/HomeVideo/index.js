import React, { Component } from "react";
import ReactPlayer from "react-player";

import ButtonHome from "../Button/ButtonHome";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="App">
          <div className="video-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=AFgk0LxCmTM"
              playing
              loop
              muted
              width="100%"
              height="100%"
            />
            <div className="overlay">
              <div className="content">
                <p className="fs-1">Multiusuário e Multidisciplinar</p>
                <p className="fs-3">
                  Laboratório de Tomografia Computadorizada de Raios X (LTC-RX)
                </p>
                <ButtonHome />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
