import { BrowserRouter as Routers, Route, Routes} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Instalacoes from './pages/Instalacoes'
import Agendamento from './pages/AgendamentodeServicos'
import Header from './components/Header'
import Footer from './components/Footer'
import ComiteGestorPage from "./pages/ComiterGestorPage";
import LocalizacaoPage from "./pages/LocalizacaoPage";


function RoutesApp(){
    return(
        <Routers>
            <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/instalacoes" element={<Instalacoes/>}/>
            <Route path="/agendamento-de-servicos" element={<Agendamento/>}/>
            <Route path="/comite-gestor" element={<ComiteGestorPage/>}/>
            <Route path="/localizacao" element={<LocalizacaoPage/>}/>
        </Routes>
        <Footer/>

        </Routers>
    )
}

export default RoutesApp