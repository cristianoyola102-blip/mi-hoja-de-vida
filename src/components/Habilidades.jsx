import { Link } from 'react-router-dom';

export default function Habilidades() {
  return (
    <section className="seccion-detalle">
      <Link to="/" className="btn-volver">
        ← Volver al inicio
      </Link>

      <div className="tarjeta-contenido">
        <h2>Habilidades Técnicas</h2>
        <hr className="linea-decorativa" />

        <p>Competencias tecnológicas adquiridas durante mi formación en desarrollo de software:</p>

        <ul>
          <li><strong>Frontend:</strong> React, HTML5, CSS3, JavaScript, Vite.</li>
          <li><strong>Backend:</strong> Python, Django.</li>
          <li><strong>Bases de Datos:</strong> MySQL, PostgreSQL, MongoDB.</li>
          <li><strong>Herramientas:</strong> Git, GitHub, VS Code, UML.</li>
        </ul>
      </div>
    </section>
  );
}