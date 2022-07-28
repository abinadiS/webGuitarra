import { NavLink } from "react-router-dom";
import './header.css'
import logo from '../assets/img/logo.svg'
import headerGuitarra from '../assets/img/header_guitarra.png'
const Header = () =>{
    return(
        <div className="header">
            <div className="header__contenedor">
                <div className="header__barra">
                    <a href="">
                        <img src={logo} alt="" className="header__logo" />
                    </a>
                    <nav className="navegacion">
                        <NavLink to="/" exact className="navegacion__enlace" >Inicio</NavLink>
                        <NavLink to="/nosotros" exact className="navegacion__enlace" >Nosotros</NavLink>
                        <NavLink to="/blog" exact className="navegacion__enlace" >Blog</NavLink>
                    </nav>
                </div>
              
            </div>
            <img src={headerGuitarra} alt="Guitarra" className="header__guitarra" />
        </div>
    )
}
export default Header;