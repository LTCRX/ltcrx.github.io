import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const   CorpoTecnico = () => {
    return (
        <Container fluid className="m-4">
            <Row className="justify-content-center">
                <Col xs={12} md={10}>
                    <h3 id="corpo-tecnico" style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        margin: "1rem"
                    }}>
                        Corpo Técnico

                    </h3>

                    <p style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        margin: "1rem"
                    }}>
                        Compõe o corpo técnico do LTC-RX técnicos, professores e pesquisadores de produtividade em pesquisa do CNPq que possuem reconhecimento e atuação nacional e internacional em pesquisas multidisciplinares.                        <br/>
                        <br/>
                        Vários desses professores são orientadores acadêmicos de alunos de mestrado e doutorado no Programa de Pós-Graduação em Energia e Tecnologias Nucleares do Departamento de Energia Nuclear (DEN) da Universidade Federal de Pernambuco (UFPE).

                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default CorpoTecnico;
