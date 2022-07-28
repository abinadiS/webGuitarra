import './footer.css';
const Footer = () =>{


    return(
        <footer className="footer">
            <div className="footer__contenedor footer__contenido">
                <nav className="footer__nav">
                    <a href="#" className="footer__enlace">Home</a>
                    <a href="" className="footer__enlace">Nosotros</a>
                    <a href="" className="footer__enlace">Tienda</a>
                    <a href="" className="footer__enlace">Blog</a>
                </nav>
                <p className="footer__copy">
                    Todos los derechos reservados
                </p>
            </div>
        </footer>
        )
};

export default Footer;