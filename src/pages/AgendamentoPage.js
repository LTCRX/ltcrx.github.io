import React from "react";
import "../Assets/css/Global.css";
import TitleAgendamento from "../components/Title/TitleAgendamento";
import TextAgendamento from "../components/Text/TextAgendamento";
import ButtonAgendamento from "../components/Button/ButtonAgendamento";
import TextEmail from "../components/Text/TextEmail";

function AgendamentoPage() {
  return (
    <>
      <div>
        <TitleAgendamento />
        <TextAgendamento />
        <ButtonAgendamento />
        <TextEmail />
      </div>
    </>
  );
}

export default AgendamentoPage;
