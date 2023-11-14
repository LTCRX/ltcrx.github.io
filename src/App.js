// import './App.css';
// import Home from "./components/Home";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import {Stack} from "react-bootstrap";
// import Instalacoes from "./components/Instalacoes";
// import CorpoTecnico from "./components/CorpoTecnico";
import RoutesApp from './routes';

function App() {
    return (
        <div className="App">
            {/* <Stack>
                <Header/>
                <Home/>
                <Instalacoes/>
                <CorpoTecnico/>
                <Footer/>
            </Stack> */}
            <RoutesApp/>
        </div>
    );
}

export default App;
