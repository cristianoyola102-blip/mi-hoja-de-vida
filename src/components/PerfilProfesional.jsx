import { Link } from 'react-router-dom';

export default function PerfilProfesional() {
  return (
    <section className="seccion-detalle">
      {/* Botón para regresar a la pantalla principal */}
      <Link to="/" className="btn-volver">
        ← Volver al inicio
      </Link>

      <div className="tarjeta-contenido">
        <h2>Perfil Profesional</h2>
        <hr className="linea-decorativa" />

        <p>
          Soy aprendiz de desarrollo de software apasionado por la creación de soluciones
          digitales, gestión de bases de datos y desarrollo de aplicaciones web funcionales.
        </p>

        <h3>Áreas de Interés</h3>
        <ul>
          <li>Desarrollo Web Frontend y Backend</li>
          <li>Modelado y gestión de Bases de Datos (Relacionales y No Relacionales)</li>
          <li>Automatización de procesos y desarrollo de software</li>
        </ul>
      </div>
    </section>
  );
}