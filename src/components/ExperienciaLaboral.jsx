import { Link } from 'react-router-dom';

export default function ExperienciaLaboral() {
  return (
    <section className="seccion-detalle">
      <Link to="/" className="btn-volver">
        ← Volver al inicio
      </Link>

      <div className="tarjeta-contenido">
        <h2>Experiencia Laboral</h2>
        <hr className="linea-decorativa" />

        <p>
          Como desarrollador en formación, he enfocado mi experiencia práctica en la creación de soluciones de software independientes y académicas:
        </p>

        <ul>
          <li>
            <strong>Desarrollo de Aplicaciones Web:</strong> Diseño y construcción de interfaces responsivas y conectividad con bases de datos para optimizar procesos comerciales.
          </li>
          <li>
            <strong>Control de Versiones:</strong> Implementación de flujos de trabajo utilizando Git y GitHub para la administración de código fuente.
          </li>
        </ul>
      </div>
    </section>
  );
}
