# Hoja de Vida Digital

Proyecto en React (Vite) para la hoja de vida digital, basado en el mockup.

## Cómo correrlo en VS Code

1. Abre esta carpeta en VS Code.
2. Abre una terminal (Ctrl + ñ o Terminal > New Terminal).
3. Instala las dependencias:
   ```
   npm install
   ```
4. Corre el servidor de desarrollo:
   ```
   npm run dev
   ```
5. Abre en el navegador la URL que aparece (normalmente http://localhost:5173).

## Qué falta editar (datos de ejemplo)

- `src/components/Header.jsx` y `Contacto.jsx`: cambia `TU-USUARIO` por tu usuario real de GitHub/LinkedIn.
- `src/components/Header.jsx` y `Footer.jsx`: cambia el correo y el teléfono de ejemplo por los tuyos.
- `src/components/Hero.jsx`: reemplaza el bloque `.foto-espacio` por tu foto real (ponla en `public/` y usa `<img src="/tu-foto.jpg" />`).
- `src/components/ExperienciaLaboral.jsx`: agrega fechas y el nombre del lugar donde trabajaste.

## Estructura

```
src/
  App.jsx              -> arma la página completa
  components/
    Header.jsx          -> barra superior (igual en todas las secciones)
    Footer.jsx           -> barra inferior (igual en todas las secciones)
    Hero.jsx              -> título + botones de navegación + foto + botón Contacto
    PerfilProfesional.jsx
    LogrosAcademicos.jsx
    ExperienciaLaboral.jsx
    Habilidades.jsx
    Contacto.jsx
```

Los 4 botones y el botón "Contacto" son anclas (`#perfil`, `#logros`, etc.) que
hacen scroll suave hacia cada sección de la misma página — así evitas los
errores de rutas/routers que suelen dar problemas al principio.
