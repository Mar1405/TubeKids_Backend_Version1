# TubeKids_Backend_Version1

## Descripción

TubeKids_Backend_Version1 es una aplicación web destinada a padres que deseen controlar los contenidos que sus hijos pueden ver en línea. Permite a los padres seleccionar los contenidos específicos a los que sus hijos tienen acceso. Estos contenidos pueden ser videos de YouTube o videos que los padres carguen directamente a la lista de videos.

La aplicación utiliza Node.js como entorno de ejecución, Express.js como framework web y Mongoose como biblioteca de modelado de objetos para MongoDB, lo que proporciona una base sólida para la construcción de una API RESTful para gestionar los datos de los usuarios y los videos.

## Características

- **Autenticación de usuarios:** La aplicación proporciona un sistema de autenticación de usuarios para que los padres puedan crear cuentas y acceder a sus perfiles.

- **Gestión de listas de reproducción:** Los usuarios pueden crear, actualizar y eliminar listas de reproducción personalizadas para organizar los videos disponibles para sus hijos.

- **Agregar videos:** Los usuarios tienen la capacidad de agregar videos a sus listas de reproducción. Esto puede ser tanto videos de YouTube como videos que los usuarios hayan cargado directamente.

- **Control parental:** Los padres pueden configurar permisos y restricciones para cada lista de reproducción, lo que les permite controlar qué videos pueden ver sus hijos.

## Tecnologías utilizadas

- **Node.js:** Plataforma de tiempo de ejecución de JavaScript que permite la construcción de aplicaciones del lado del servidor.

- **Express.js:** Framework web de Node.js que facilita la creación de aplicaciones web y APIs.

- **Mongoose:** Biblioteca de modelado de objetos para MongoDB, que proporciona una interfaz sencilla para trabajar con bases de datos MongoDB desde Node.js.

## Instalación

1. Clona este repositorio en tu máquina local utilizando `git clone`.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias utilizando `npm install`.
4. Configura las variables de entorno necesarias, como la cadena de conexión a la base de datos MongoDB.
5. Inicia la aplicación utilizando `npm start`.
