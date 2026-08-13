import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PerfilProfesional from './components/PerfilProfesional';
import LogrosAcademicos from './components/LogrosAcademicos';
import ExperienciaLaboral from './components/ExperienciaLaboral';
import Habilidades from './components/Habilidades';
import Contacto from './components/Contacto';

function App() {
  return (
    <BrowserRouter>
      {/* Encabezado fijo en la parte superior */}
      <Header />

      {/* Área dinámica que cambia según la ruta */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/perfil" element={<PerfilProfesional />} />
          <Route path="/logros" element={<LogrosAcademicos />} />
          <Route path="/experiencia" element={<ExperienciaLaboral />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      {/* Pie de página fijo en la parte inferior */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;