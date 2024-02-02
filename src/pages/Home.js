import React from "react";
import "../Assets/css/home.css";
import HomeVideo from "../components/HomeVideo";

function Home() {
  return (
    <>
      <div className="fullscreen-container">
        <div className="fullscreen-content">
          <HomeVideo />
        </div>
      </div>
    </>
  );
}

export default Home;
