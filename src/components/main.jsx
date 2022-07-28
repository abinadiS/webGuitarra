import Producto from "./productomain";
import images from "../assets/images";
import './main.css';
const Main = () =>{
    return(
        <main className="productos productos__contenedor">
            <h2 className="productos__heading">Nuestra Coleccion</h2>

            <div className="productos__grid">
                <Producto
                imagen={images.guitar1} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar2} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar3} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar4} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar5} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar6} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar7} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar8} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar9} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar10} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar11} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
                 <Producto
                imagen={images.guitar12} nombre="Guitar lab"
                precio="$25"
                enlace="#"/>
            </div>
        </main>
    )
}
export default Main;