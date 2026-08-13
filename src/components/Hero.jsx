import { Link } from 'react-router-dom';

export default function Hero() {
  const botones = [
    { label: 'Perfil Profesional', href: '/perfil' },
    { label: 'Logros Académicos', href: '/logros' },
    { label: 'Experiencia Laboral', href: '/experiencia' },
    { label: 'Habilidades', href: '/habilidades' },
    { label: 'Contacto', href: '/contacto' }, // <--- ¡Añadido aquí!
  ];

  return (
    <section className="hero">
      <div className="hero__info">
        <h1>HOJA DE VIDA <span>DIGITAL</span></h1>
        <p>Christian Alexis Oyola Pimentel — Portafolio de desarrollo de software</p>

        <nav className="hero__botones">
          {botones.map((b) => (
            <Link key={b.href} className="nav-btn" to={b.href}>
              {b.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="hero__foto">
        <img 
          src="/fotoperfil.jfif" 
          alt="Foto de Christian Alexis" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} 
        />
      </div>
    </section>
  );
}