import { BrowserRouter as Routers, Route, Routes} from 'react-router-dom'


import Inicio from './pages/Inicio'
import Instalacoes from './pages/Instalacoes'
import CorpoTecnico from './pages/CorpoTecnico'

import Agendamento from './pages/AgendamentodeServicos'
import Header from './components/Header/Header'


function RoutesApp(){
    return(
        <Routers>
            <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Instalacoes" element={<Instalacoes/>}/>
            <Route path="/CorpoTecnico" element={<CorpoTecnico/>}/>
            <Route path="/AgendamentodeServicos" element={<Agendamento/>}/>
        </Routes>
        </Routers>
    )
}

export default RoutesApp