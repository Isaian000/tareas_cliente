
import './Tecnologias.css';

const tecnologias = [
    'React', 'TypeScript', 'Node.js', 'Express',
    'Java', 'Python', 'Figma', 'HTML', 'CSS', 'C', 'JavaScript',
    'Docker'
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias">
      <h2>Tecnologías &amp; Experiencia</h2>
      <div className="tech-grid">
        {tecnologias.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}