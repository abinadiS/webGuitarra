import Entrada from './entrada.jsx';
import images from '../../assets/images.jsx';
import './blog.css';
const Blog = () =>{
    return(
        <main className="blog">
            <h2 className="blog__heading">Nuestro Blog</h2>
            <div className="blog__contenedor blog__grid">
                <Entrada img={images.blog1}
                titulo="¿Como comprar una guitarra?"
                fecha="3 abril 2012"/>

                <Entrada img={images.blog2}
                titulo="Mejores canciones en Guitarra"
                fecha="3 abril 2012"/>

                <Entrada img={images.blog3}
                titulo="Comó afinar tu Guitarra"
                fecha="3 abril 2012"/>

                <Entrada img={images.blog4}
                titulo="Acordes mayores y menores"
                fecha="3 abril 2012"/>
            </div>
        </main>
    )
}
export default Blog;