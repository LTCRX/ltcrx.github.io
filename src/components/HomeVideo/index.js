import React, { Component } from "react";
import ReactPlayer from "react-player";
import HomeVideo from "../../Assets/video/Home_video.mp4";
import ButtonHome from "../Button/ButtonHome";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="App">
          <div className="video-container">
            <ReactPlayer
              url={HomeVideo}
              playing
              loop
              muted
              width="100%"
              height="100%"
            />
            <div className="overlay">
              <div className="content">
                <h1 className="fs-1">Multiusuário e Multidisciplinar</h1>
                <p className="fs-7">
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
