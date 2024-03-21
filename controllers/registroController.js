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

/**
 * Inicia sesión de usuario
 *
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
    const { correo, password } = req.body;
    try {
        // Buscar el registro del usuario en la base de datos
        const usuario = await Registro.findOne({ correo, password });

        // Verificar si el usuario existe y la contraseña es correcta
        if (!usuario) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrecta' });
        }

        // Aquí podrías generar un token de sesión y devolverlo en la respuesta si deseas implementar autenticación basada en tokens
        
        // Si el usuario y la contraseña son correctos, enviar una respuesta de éxito
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ error: 'Hubo un error en el inicio de sesión' });
    }
};

module.exports = {
    registroPost,
    registroGet,
    registroDelete,
    registroUpdate,
    login
};
