import './cursoguitar.css';

const Curso = ()=>{
    return(
        <section className="cursos">
            <div className="cursos__contenedor cursos__grid">
                <div className="cursos__contenido">
                    <h2 className="cursos__heading">Aprende a tocar Guitarra con nosotros</h2>
                    <p className="cursos__texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Similique illum, quae repellendus nihil magni sunt incidunt doloremque cupiditate
                      est molestias odio, iure consequuntur recusandae dicta nisi id, fugit excepturi
                       explicabo!</p>
                    <a href="#" className="cursos__enlace">Mas informacion</a>
                </div>
            </div>
        </section>
    )
}
export default Curso;