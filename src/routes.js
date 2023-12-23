import { BrowserRouter as Routers, Route, Routes} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Instalacoes from './pages/Instalacoes'
import CorpoTecnicoPage from './pages/CorpoTecnico'
import Agendamento from './pages/AgendamentodeServicos'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/SignUp'
import LoginForm from './components/SignIn/Index'


function RoutesApp(){
    return(
        <Routers>
            <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/instalacoes" element={<Instalacoes/>}/>
            <Route path="/corpo-tecnico" element={<CorpoTecnicoPage/>}/>
            <Route path="/agendamento-de-servicos" element={<Agendamento/>}/>
            <Route path="/criar-conta" element={<Form/>}/>
            <Route path="/entrar" element={<LoginForm/>}/>
        </Routes>
        <Footer/>

        </Routers>
    )
}

export default RoutesApp