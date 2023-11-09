import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid className="m-4">
            <Row className="justify-content-center">
                <Col xs={12} md={10}>
                    <h2 id="home" style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        margin: "1rem"
                    }}>
                        Laboratório de Tomografia Computadorizada de Raios X (LTC-RX)
                    </h2>
                    <h3 style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        margin: "1rem"
                    }}>Multiusuário e Multidisciplinar</h3>
                    <p style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        margin: "1rem"
                    }}>
                        O LTC-RX foi concebido, no início de 2010, com o objetivo de ampliar, consolidar e estabelecer novas parcerias com instituições nacionais e internacionais de ensino e pesquisa, e com o setor produtivo, em particular com os arranjos produtivos locais (polo gesseiro, farmoquímico, petroquímico, indústria da construção civil, etc.) do estado de Pernambuco e com o Complexo Industrial e Portuário de Suape incluindo o Projeto Suape Global. A consolidação e ampliação do Complexo Industrial e Portuário de Suape, com a instalação de dois empreendimentos de grande porte a Refinaria Abreu e Lima e o Estaleiro Atlântico Sul, estabelecem a necessidade de formação de um conjunto de instituições de pesquisa e inovação com infraestrutura adequada para apoiar o contínuo desenvolvimento das empresas já instaladas e de futuros empreendimentos industriais que venham a se instalar no polo de Suape. Portanto, a implantação do LTC-RX foi estratégica para a UFPE como centro formador de recursos humanos e de agente de fomento a inovação industrial e apoio ao desenvolvimento do estado, de desenvolvimento do conhecimento e de tecnologias, e como atrativo para a implantação de grandes empreendimentos dos setores industriais e de serviços. Além disso, o LTC-RX tem se consolidado como uma importante instalação para a formação de Recursos Humanos nas áreas de caracterização de materiais por meio de µTC, em nível de graduação e pós-graduação, na UFPE e em outras IES do estado de Pernambuco, da região Nordeste e do Brasil.
                        <br/>
                        <br/>
                        O Laboratório de Tomografia Computadorizada de Raios X (LTC) do Departamento de Energia Nuclear (DEN) da Universidade Federal de Pernambuco (UFPE) foi viabilizado com um financiamento no valor R$ 1.322.449,00, obtido por meio da Chamada Pública MCT/FINEP/CT-INFRA-PROINFRA 01/2009 e liberado em 2012. O LTC-RX é um laboratório multidisciplinar e multiusuário, que disponibiliza aos pesquisadores da UFPE e do Brasil um sistema de inspeção por raios X, ou seja, um tomógrafo industrial modelo XTH225 ST (Nikon Metrology, Inc), e um servidor/cluster (SGI-Silicon Graphics International Corp.) para apoiar o desenvolvimento de projetos de pesquisas relevantes em diversas áreas do conhecimento: Engenharias, Ciências Exatas e da Terra, Ciências Agrárias, Ciências Humanas, Ciências Biológicas e Ciências da Saúde.
                        <br/>
                        <br/>
                        O LTC-RX propicia a esses pesquisadores, o desenvolvimento e a aplicação de ensaios não destrutivos em diversas áreas do conhecimento, em particular nas áreas de engenharia e geociências.
                        <br/>
                        <br/>
                        Os serviços comumente prestados aos usuários do LTC-RX são o imageamento e a reconstrução de imagens 3D de alta resolução de amostras, possibilitando a determinação de vários parâmetros de interesse dos usuários.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
