const Entrada = ({img,titulo,fecha}) =>{
    return(
        <article className="entrada">
            <img src={img} alt="" />
            <div className="entrada__contenido">
                <h3 className="entrada__titulo">{titulo}</h3>
                <p className="entrada__fecha">{fecha}</p>
                <p className="entrada__texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam voluptatibus fuga ipsam adipisci, alias sunt incidunt cumque repellat fugit consectetur vitae obcaecati, libero laudantium quod repellendus qui sint exercitationem eaque.</p>
                <a href="#" className="entrada__enlace">Ver más</a>
            </div>
        </article>
    )
}
export default Entrada;