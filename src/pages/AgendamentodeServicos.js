import React from "react";
import FormExample from "../docs/form.docx";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./styles/AgendamentodeServicos.css";

const Agendamento = () => {
    return (
        <div className="d-flex align-items-center vh-100">
            <Container fluid>
                <Row className="mb-4">
                    <Col>
                        <h1 className="removing-edge text-center">Agendamento</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="text-center">
                        Para realizar o cadastro, envie o formulário abaixo para o email{" "}
                        <a href="mailto:ltc.den@ufpe.br">ltc.den@ufpe.br</a>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="text-center">
                        <a
                            href={FormExample}
                            download="formulario_exemplo.docx"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="dark">Download Formulário</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Agendamento;
