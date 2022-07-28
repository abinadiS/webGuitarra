import './nosotros.css';
import imgnosotros from '../../assets/img/nosotros.jpg';
const Nosotros = ()=>{
    return(
        <section className="nosotros nosotros__contenedor">
            <h2 className="nosotros__heading">Sobre Nosotros</h2>

            <div className="nosotros__grid">

                <img src={imgnosotros} alt="nosotros" />

                <div className="nosotros__contenido">
                    <p>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Similique beatae,
                          soluta expedita odit rerum ullam necessitatibus ipsa 
                          impedit, error maxime, maiores sint fuga dolore eum quas?
                            Reiciendis molestiae unde culpa!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Similique beatae,
                          soluta expedita odit rerum ullam necessitatibus ipsa 
                          impedit, error maxime, maiores sint fuga dolore eum quas?
                            Reiciendis molestiae unde culpa!
                    </p>
                   
                </div>
            </div>
        </section>
    )
}
export default Nosotros;