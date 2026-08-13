const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Local
const MONGO_URI = 'mongodb://127.0.0.1:27017/hoja_de_vida';

mongoose.connect(MONGO_URI)
  .then(() => console.log(' Connectado con éxito a MongoDB Local'))
  .catch((err) => console.error(' Error al conectar a MongoDB:', err));

// Esquema para el formulario de contacto
const contactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  requiereServicios: String,
  necesidad: String,
  fecha: { type: Date, default: Date.now }
});

const Contacto = mongoose.model('Contacto', contactoSchema);

// Ruta API para recibir los datos del formulario
app.post('/api/contactos', async (req, res) => {
  try {
    const nuevoContacto = new Contacto(req.body);
    await nuevoContacto.save();
    res.status(201).json({ mensaje: '¡Contacto guardado correctamente en MongoDB!' });
  } catch (error) {
    console.error('Error al guardar:', error);
    res.status(500).json({ error: 'Error al guardar el contacto' });
  }
});

// Iniciar servidor en el puerto 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});