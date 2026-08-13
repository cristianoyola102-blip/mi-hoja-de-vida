import { Link } from 'react-router-dom';

export default function LogrosAcademicos() {
  return (
    <section className="seccion-detalle">
      <Link to="/" className="btn-volver">
        ← Volver al inicio
      </Link>

      <div className="tarjeta-contenido">
        <h2>Logros Académicos</h2>
        <hr className="linea-decorativa" />

        <p>
          En mi proceso formativo en el SENA como Tecnólogo en Análisis y Desarrollo de Software (ADSO), he desarrollado diversos proyectos prácticos:
        </p>

        <ul>
          <li>Diseño e implementación de sistemas de gestión de bases de datos relacionales y NoSQL.</li>
          <li>Desarrollo de aplicaciones web utilizando tecnologías modernas como React, Python y JavaScript.</li>
          <li>Creación de diagramas UML, arquitectura de software y documentación técnica de proyectos.</li>
        </ul>
      </div>
    </section>
  );
}