import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css'

// import Inicio from './pages/Inicio'
// import Instalacoes from './pages/Instalacoes'
// import CorpoTecnico from './pages/CorpoTecnico'
// import Agendamento from './pages/AgendamentodeServicos'


function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand to ="/">LTC-RX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to ="/">Home</Link>
                        <Link href="#instalacoes">Instalações</Link>
                        <Link href="#corpo-tecnico">Corpo técnico</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

// bg="dark" data-bs-theme="dark"