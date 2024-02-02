import React from "react";
import "../Assets/css/Global.css";
import TitleLocalizacao from "../components/Title/TItleLocalizacao";
import GpsLocalizacao from "../components/Localizacao";

function LocalizacaoPage() {
    return (
        <>
            <div className="container-fluid" id="background">
                <div className="row justify-content-center align-items-center 1000vh">
                    <div className="col-12 col-md-8 text-center">
                        <TitleLocalizacao/>
                        <GpsLocalizacao/>
                        <br/>
                        <p className="fs-6 text-center"
                           style={{marginBottom: 100}}>
                            Av. Prof. Luiz Freire, 1000 - Cidade Universitária, Recife - PE,
                            50740-437
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LocalizacaoPage;
