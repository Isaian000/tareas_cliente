import './Proyectos.css'

interface Proyecto {
    id: number;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    imagen: string;
    repoUrl?: string;
    demoUrl?: string;
}

const proyectos: Proyecto[] = [
    { 
        id: 1,
        titulo: 'Proyecto Casino',
        descripcion:
        'Aplicación de casino con arquitectura backend en Node.js y TypeScript, incluyendo múltiples juegos y sistema de apuestas.',
        tecnologias: ['Node.js', 'TypeScript', 'Express'],
        imagen: '/proyectos/casino.png',
        repoUrl: 'https://github.com/Isaian000/proyecto_casino',
    },
    {
        id: 2,
        titulo: 'CV en línea',
        descripcion:
        'Este mismo sitio: una SPA construida con React, Vite y TypeScript para mostrar mi currículum de forma interactiva.',
        tecnologias: ['React', 'Vite', 'TypeScript'],
        imagen: '/proyectos/cv.png',
        repoUrl: 'https://github.com/Isaian000/tareas_cliente',
    },  
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <h2 className="proyectos-title">Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="proyecto-card">
            <img
              src={proyecto.imagen}
              alt={`Captura del proyecto ${proyecto.titulo}`}
              className="proyecto-imagen"
            />
            <div className="proyecto-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <ul className="proyecto-tags">
                {proyecto.tecnologias.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="proyecto-links">
                {proyecto.repoUrl && (
                  <a href={proyecto.repoUrl} target="_blank" rel="noopener noreferrer">
                    Ver repo en git
                  </a>
                )}
                {proyecto.demoUrl && (
                  <a href={proyecto.demoUrl} target="_blank" rel="noopener noreferrer">
                    Ver demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}