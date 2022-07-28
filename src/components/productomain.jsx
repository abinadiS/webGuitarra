const Producto = ({imagen,nombre,precio,enlace}) =>{
    return(
        <div className="producto">
        <img src={imagen} alt="alt" className="producto__imagen" />
            <div className="producto__contenido">
                    <h3 className="producto__nombre">{nombre}</h3>
                    <p className="producto__descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam, tenetur eum ut consectetur eos nisi. Delectus sapiente facilis dolorem no.</p>
                    <p className="producto__precio">{precio}</p>
                    <a href={enlace} className="producto__enlace">Ver mas</a>
            </div>
        </div>
    )
}

export default Producto;