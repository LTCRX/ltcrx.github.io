import './style.css';

function Footer() {
    return(
        <footer class="component-footer" id="footer">
                <div class="footer-column">
                    <h3>Comitê Gestor</h3>
                    <ul>
                        <li>Coordenador:
                            <br></br>
                            <small>Antonio Celso Dantas Antonino</small></li>
                        <li>Vice-coordenador:
                            <br></br>
                            <small>José Antonio Barbosa</small></li>
            
                    </ul>
                </div>

                <div class="footer-column">
                    <h3>Localização</h3>
                    <iframe className='location-card'  title="Mapa incorporado" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15801.941298474445!2d-34.960614952063814!3d-8.051874821606747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1966d409d415%3A0x497df2e2ee00ea52!2sUniversidade%20Federal%20de%20Pernambuco!5e0!3m2!1spt-BR!2sbr!4v1700641687501!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="footer-column">
                    <h3>Contato</h3>
                    <h4>E-mail: <br></br><a href="mailto:ltc.den@ufpe.br">ltc.den@ufpe.br</a></h4>
                </div>
            </footer>
    )

}

export default Footer;
