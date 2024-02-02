import React, {useEffect} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './style.css';

function Header() {
    useEffect(() => {
        const headerHeight = document.getElementById('navbar').clientHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
    }, []);
    return (
        <Navbar className="nav fixed-top" expand="lg" id="navbar">
            <Container>
                <img src={require('../icons/logo.png')} alt="Logo" id='logo' style={{
                    width: '95px',
                    height: '48px',
                    objectFit: 'cover'
                }}/>
                <Navbar.Brand to="/">LTC-RX</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className='nav-flex'>
                    <Nav>
                        <Link className='link' as={Link} to="/">Home</Link>
                        <Link className='link' as={Link} to="/sobre">Sobre</Link>
                        <Link className='link' as={Link} to="/instalacoes">Instalações</Link>
                        <Link className='link' as={Link} to="/agendamento-de-servicos">Agendamento de serviços</Link>
                        <Link className='link' as={Link} to="/comite-gestor">Comitê Gestor</Link>
                        <Link className='link' as={Link} to="/localizacao">Localização</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;



