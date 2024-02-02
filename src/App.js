import "./Assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Instalacoes from "./pages/Instalacoes";
import CorpoTecnico from "./pages/CorpoTecnico";
import AgendamentoPage from "./pages/AgendamentoPage";
import SobrePage from "./pages/SobrePage";
import LocalizacaoPage from "./pages/LocalizacaoPage";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <div className="page-container">
          <Header />
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Instalacoes" element={<Instalacoes />} />
              <Route path="/Sobre" element={<SobrePage />} />
              <Route path="/CorpoTecnico" element={<CorpoTecnico />} />
              <Route path="/Localizacao" element={<LocalizacaoPage />} />
              <Route path="/Agendamento" element={<AgendamentoPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
