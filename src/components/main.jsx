import Producto from "./productomain";
import images from "../assets/images";
import './main.css';
const Main = () =>{
    return(
        <main className="productos productos__contenedor">
            <h2 className="productos__heading">Nuestra Coleccion</h2>

            <div className="productos__grid">
                <Producto
                imagen={images.guitar1} nombre="Guitar 032"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar2} nombre="GuitarChri"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar3} nombre="Lenon 2000"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar4} nombre="Yamaha 352"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar5} nombre="Korg 254"
                precio="$250"
                enlace="#"/>
                 <Producto
                imagen={images.guitar6} nombre="Yamaha 685psr"
                precio="$254"
                enlace="#"/>
                 <Producto
                imagen={images.guitar7} nombre="Luil 85"
                precio="89"
                enlace="#"/>
                 <Producto
                imagen={images.guitar8} nombre="Pell 47"
                precio="562"
                enlace="#"/>
                 <Producto
                imagen={images.guitar9} nombre="Toph 69"
                precio="$455"
                enlace="#"/>
                 <Producto
                imagen={images.guitar10} nombre="MarKing 589 "
                precio="$120"
                enlace="#"/>
                 <Producto
                imagen={images.guitar11} nombre="CleanC 58"
                precio="$254"
                enlace="#"/>
                 <Producto
                imagen={images.guitar12} nombre="Paull 58"
                precio="$99"
                enlace="#"/>
            </div>
        </main>
    )
}
export default Main;