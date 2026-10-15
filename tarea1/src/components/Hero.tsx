import './Hero.css'

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">                
                <h1 className="hero-title">Isaian Ayala</h1>
                <p className="hero-subtitle"> Desarrollador Full-Stack &amp; Diseñador UI/UX</p>
                <p className="hero-description">
                    Estudiante de Ingeniería en Desarrollo de Software en ITESO.
                    Me apasiona crear productos digitales funcionales y bien diseñados.
                </p>

                <div className="hero-buttons">
                    <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
                    <a href="#contacto" className="btn btn-secondary">Contactarme</a>
                </div>
            </div>
        </section>
    );
}