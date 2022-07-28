import './footer.css';
import { NavLink } from "react-router-dom";
const Footer = () =>{


    return(
        <footer className="footer">
            <div className="footer__contenedor footer__contenido">
                <nav className="footer__nav">
                <NavLink to="/" exact className="navegacion__enlace" >Inicio</NavLink>
                <NavLink to="/nosotros" exact className="navegacion__enlace" >Nosotros</NavLink>
                <NavLink to="/blog" exact className="navegacion__enlace" >Blog</NavLink>
                </nav>
                <p className="footer__copy">
                    Todos los derechos reservados
                </p>
            </div>
        </footer>
        )
};

export default Footer;