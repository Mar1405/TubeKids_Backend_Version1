const UsuarioRestringido = require('../models/usuarioRestringidoModel');

// Controlador para crear un nuevo perfil
const postPerfilAvatar = async (req, res) => {
  const { nombreCompleto, pin, avatar, edad } = req.body;
  try {
    const nuevoPerfil = new UsuarioRestringido({ nombreCompleto, pin, avatar, edad });
    const perfilGuardado = await nuevoPerfil.save();
    res.status(201).json({ perfil: perfilGuardado, mensaje: 'Perfil de avatar creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el perfil de avatar:', error);
    res.status(500).json({ error: 'Hubo un error al crear el perfil de avatar. Por favor, intenta de nuevo más tarde.' });
  }
};

// Controlador para obtener todos los perfiles
const getPerfilesAvatar = async (req, res) => {
  try {
    const perfiles = await UsuarioRestringido.find();
    res.json(perfiles);
  } catch (error) {
    console.error('Error al obtener los perfiles de avatar:', error);
    res.status(500).json({ error: 'Hubo un error al obtener los perfiles de avatar. Por favor, intenta de nuevo más tarde.' });
  }
};

// Controlador para actualizar un perfil
const updatePerfilAvatar = async (req, res) => {
  const { id } = req.params;
  const { nombreCompleto, pin, avatar, edad } = req.body;
  try {
    const perfilActualizado = await UsuarioRestringido.findByIdAndUpdate(id, 
        { nombreCompleto, pin, avatar, edad },
        { new: true }
    );
    if (!perfilActualizado) {
        return res.status(404).json({ error: 'El perfil de avatar que intentas actualizar no existe.' });
    }
    res.json(perfilActualizado);
  } catch (error) {
    console.error('Error al actualizar el perfil de avatar:', error);
    res.status(500).json({ error: 'Hubo un error al actualizar el perfil de avatar. Por favor, intenta de nuevo más tarde.' });
  }
};

// Controlador para eliminar un perfil
const deletePerfilAvatar = async (req, res) => {
  const { id } = req.params;
  try {
    const perfilEliminado = await UsuarioRestringido.findByIdAndDelete(id);
    if (!perfilEliminado) {
        res.status(404).json({ error: 'El perfil de avatar que intentas eliminar no existe.' });
    } else {
        res.json({ mensaje: 'Perfil de avatar eliminado exitosamente.' });
    }
  } catch (error) {
    console.error('Error al eliminar el perfil de avatar:', error);
    res.status(500).json({ error: 'Hubo un error al eliminar el perfil de avatar. Por favor, intenta de nuevo más tarde.' });
  }
};

module.exports = {
  postPerfilAvatar,
  getPerfilesAvatar,
  updatePerfilAvatar,
  deletePerfilAvatar
};
