import React from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import antonioAntoninoImage from './imgs/antonio_antonino_profile.png';
import joseAntonioImage from './imgs/jose_antonio_profile.png'
import './style.css'
import ComiteProfileCard from "../ComiteProfileCard";

const ComiteGestor = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <p>
                        Compõe o corpo técnico do LTC-RX técnicos, professores e pesquisadores de produtividade em
                        pesquisa do CNPq que possuem reconhecimento e atuação nacional e internacional em pesquisas
                        multidisciplinares.
                        <br/>
                        Vários desses professores são orientadores acadêmicos de alunos de mestrado e doutorado no
                        Programa de Pós-Graduação em Energia e Tecnologias Nucleares do Departamento de Energia
                        Nuclear (DEN) da Universidade Federal de Pernambuco (UFPE).
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="p-3">
                    <h3>Comitê Gestor</h3>.
                    <Container fluid>
                        <Stack direction="horizontal" gap={5} className="justify-content-center align-items-center">
                            <ComiteProfileCard
                                image={antonioAntoninoImage}
                                profileName="Antônio Celso Dantas Antonino"
                                profileTitle="Coordenador"
                                profileEmail="antonio.antonino@ufpe.br"
                            />
                            <ComiteProfileCard
                                image={joseAntonioImage}
                                profileName="José Antonio Barbosa"
                                profileTitle="Vice-Coordenador"
                                profileEmail="antonio.antonino@ufpe.br"
                            />
                        </Stack>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ComiteGestor;