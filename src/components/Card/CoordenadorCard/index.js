import React from "react";
import CoordenadorImg from "../../../Assets/img/Coordenador.jpeg";
import ComiteProfileCard from "../ComiteProfileCard";

const CoordenadorProfileCard = () => {
    return <ComiteProfileCard
        image={CoordenadorImg}
        profileName="Antônio C. D. Antonino"
        profileTitle="Coordenador"
        profileEmail="antonio.antonino@ufpe.br"
    />
}

export default CoordenadorProfileCard
