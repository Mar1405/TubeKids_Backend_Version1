const Registro = require('../models/registroModel');

/**
 * Crea un nuevo registro de usuario
 *
 * @param {*} req
 * @param {*} res
 */
const registroPost = async (req, res) => {
    const { correo, password, pin, nombre, apellidos, paisOrigen, fechaNacimiento } = req.body;
    try {
        const nuevoRegistro = new Registro({ correo, password, pin, nombre, apellidos, paisOrigen, fechaNacimiento });
        const registroGuardado = await nuevoRegistro.save();
        res.status(201).json({ registro: registroGuardado, mensaje: 'Registro exitoso' });
    } catch (error) {
        console.error('Error al guardar el registro:', error);
        res.status(500).json({ error: 'Hubo un error al guardar el registro. Por favor, intenta de nuevo más tarde.' });
    }
};

/**
 * Obtiene todos los registros de usuarios
 *
 * @param {*} req
 * @param {*} res
 */
const registroGet = async (req, res) => {
    try {
        const registros = await Registro.find();
        res.json(registros);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ error: 'Hubo un error al obtener los registros. Por favor, intenta de nuevo más tarde.' });
    }
};

/**
 * Elimina un registro de usuario por su ID
 *
 * @param {*} req
 * @param {*} res
 */
const registroDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const registroEliminado = await Registro.findByIdAndDelete(id);
        if (!registroEliminado) {
            res.status(404).json({ error: 'El registro que intentas eliminar no existe.' });
        } else {
            res.json({ mensaje: 'Registro eliminado exitosamente.' });
        }
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        res.status(500).json({ error: 'Hubo un error al eliminar el registro. Por favor, intenta de nuevo más tarde.' });
    }
};

/**
 * Actualiza un registro de usuario por su ID
 *
 * @param {*} req
 * @param {*} res
 */
const registroUpdate = async (req, res) => {
    const { id } = req.params;
    const { correo, password, pin, nombre, apellidos, paisOrigen, fechaNacimiento } = req.body;
    try {
        const registroActualizado = await Registro.findByIdAndUpdate(id, 
            { correo, password, pin, nombre, apellidos, paisOrigen, fechaNacimiento },
            { new: true }
        );
        if (!registroActualizado) {
            return res.status(404).json({ error: 'El registro que intentas actualizar no existe.' });
        }
        res.json(registroActualizado);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).json({ error: 'Hubo un error al actualizar el registro. Por favor, intenta de nuevo más tarde.' });
    }
};

module.exports = {
    registroPost,
    registroGet,
    registroDelete,
    registroUpdate
};
