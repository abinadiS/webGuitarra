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
                        <a href="#" className="navegacion__enlace" >inicio</a>
                        <a href="#" className="navegacion__enlace" >nosotros</a>
                        <a href="#" className="navegacion__enlace" >blog</a>
                        <a href="#" className="navegacion__enlace" >tienda</a>
                    </nav>
                </div>
              
            </div>
            <img src={headerGuitarra} alt="Guitarra" className="header__guitarra" />
        </div>
    )
}
export default Header;