import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ImageHeader from "../../Assets/img/logo.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg PrimaryColor">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-4">
            <img src={ImageHeader} alt="Bootstrap" width="40" height="40"></img>
            LTC-RX
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{
              borderColor: "#000",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
              className=" bi bi-list"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end PrimaryColor"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img
                  src={ImageHeader}
                  alt="Bootstrap"
                  width="40"
                  height="40"
                ></img>
                LTC-RX
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{
                  borderColor: "#000",
                  borderStyle: "solid",
                  borderWidth: "1px",
                }}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link changeColorOnHover fs-6 fw-bold"
                    aria-current="page"
                  >
                    Home{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Sobre"
                    className="nav-link changeColorOnHover fs-6 fw-bold"
                    aria-current="page"
                  >
                    Sobre{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Localizacao"
                    className="nav-link changeColorOnHover fs-6 fw-bold"
                    aria-current="page"
                  >
                    Localização{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Instalacoes"
                    className="nav-link changeColorOnHover fs-6 fw-bold"
                    aria-current="page"
                  >
                    Instalações{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/CorpoTecnico"
                    className="nav-link changeColorOnHover fs-6 fw-bold"
                    aria-current="page"
                  >
                    Corpo Técnico{" "}
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    to="/Agendamento"
                    className="nav-link changeColorOnHover fs-6 fw-bold"
                    aria-current="page"
                  >
                    Agendamento de Serviços{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
