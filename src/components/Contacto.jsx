import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contacto() {
  // Estado para capturar la información (listo para MongoDB)
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    requiereServicios: 'Si',
    necesidad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí es donde en el futuro conectaremos con MongoDB / Backend
    console.log('Datos listos para enviar a la base de datos:', formData);
    alert('¡Formulario enviado con éxito!');
  };

  return (
    <section className="seccion-detalle">
      <Link to="/" className="btn-volver">
        ← Volver al inicio
      </Link>

      <div className="tarjeta-contenido">
        <p className="formulario-subtitulo">
          Formulario para saber qué piensa de su hoja de vida
        </p>

        <form onSubmit={handleSubmit} className="formulario-grid">
          {/* Campo: Nombre */}
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          {/* Campo: Correo electrónico */}
          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          {/* Fila inferior: Radio buttons + Textarea */}
          <div className="form-row">
            <div className="form-group radio-group">
              <label className="radio-titulo">Requiere de mis servicios de desarrollador</label>
              
              <label className="radio-option">
                <input
                  type="radio"
                  name="requiereServicios"
                  value="Si"
                  checked={formData.requiereServicios === 'Si'}
                  onChange={handleChange}
                />
                Sí
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="requiereServicios"
                  value="No"
                  checked={formData.requiereServicios === 'No'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="necesidad">Cuéntame la necesidad</label>
              <textarea
                id="necesidad"
                name="necesidad"
                value={formData.necesidad}
                onChange={handleChange}
                rows="3"
                placeholder="Escribe aquí los detalles..."
              />
            </div>
          </div>

          {/* Botón principal */}
          <div className="form-actions">
            <button type="submit" className="btn-inicio">
              Inicio
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}