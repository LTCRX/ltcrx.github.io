import "./Assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import InstalacoesPage from "./pages/InstalacoesPage";
import CorpoTecnicoPage from "./pages/CorpoTecnicoPage";
import AgendamentoPage from "./pages/AgendamentoPage";
import SobrePage from "./pages/SobrePage";
import LocalizacaoPage from "./pages/LocalizacaoPage";

import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <div>
      <Router>
        <div className="page-container">
          <Header />
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/InstalacoesPage" element={<InstalacoesPage />} />
              <Route path="/SobrePage" element={<SobrePage />} />
              <Route path="/CorpoTecnicoPage" element={<CorpoTecnicoPage />} />
              <Route path="/LocalizacaoPage" element={<LocalizacaoPage />} />
              <Route path="/AgendamentoPage" element={<AgendamentoPage />} />
            </Routes>
          </div>
          <LoadingScreen />
        </div>
      </Router>
    </div>
  );
}

export default App;
