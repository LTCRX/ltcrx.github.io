import React from "react";
import "../Assets/css/CorpoTecnico.css";
import TextCorpoTecnico from "../components/Text/TextCorpoTecnico";
import TitleComite from "../components/Title/TitleComite";
import {Col, Container, Row, Stack} from "react-bootstrap";
import CoordenadorProfileCard from "../components/Card/CoordenadorCard";
import ViceCoordenadorProfileCard from "../components/Card/ViceCoordenadorCard";

function CorpoTecnico() {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <TextCorpoTecnico/>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="p-3">
                    <TitleComite/>
                    <Container fluid>
                        <Stack direction="horizontal"
                               gap={5}
                               className="justify-content-center align-items-center">
                            <CoordenadorProfileCard/>
                            <ViceCoordenadorProfileCard/>
                        </Stack>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default CorpoTecnico;
