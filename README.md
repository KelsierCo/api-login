# API LOGIN

API procesa un login con gestion de base de datos de forma sencilla y estructurado, confirmacion de correo y recuperacion de contraseña.

## 📌 Características

  - CRUD de usuarios
  - Autenticacion usuarios

## 🚀 Instalación y uso

1. Clona este repositorio:

    ```bash
    git clone https://github.com/KelsierCo/api-login.git
    cd api-login

2. Instalar dependencias:
   
    ```bash
    npm install

3. Crear la base de datos:

    1. Abre PostgresSQL y crea la base de datos
    
    2. Ejecuta el archivo schema.sql que se encuentra en la carpeta config para crear la tabla

4. Configurar variables de entorno

    crear archivo .env en la raiz del proyecto con esta estructura 

    ```ini
    #Datos para la conexion con base de datos
    DB_USER=postgres
    DB_PASSWORD=contraseña_db
    DB_HOST=localhost
    DB_PORT=5432
    DB_DATABASE=nombre_db

    #llave secreta para encriptacion de contraseña
    SECRET_KEY=secret_key
    #link para el envio de correo
    LINK=link_api

    #Datos usuario que enviara el correo
    EMAIL_USER=correo
    EMAIL_PASSWORD=contraseña_correo

5. Iniciar el servidor

    ```bash
    node index.js

La APi estará disponible en: http://localhost:3000


## 🛠 Endpoints disponibles

Endpoint /api/users
|Método|Ruta|Descripción|Autenticación|
|---|---|---|---|
|GET| /|Obtener usuarios|❌|
|GET| /:id|Obtener un usuario|✅|
|POST| /|Crea usuario|❌|
|PUT| /|Actualizar datos del usuario, por ahora nombre|✅|
|PUT| /updatePassword|Actualizar contraseña|✅|
|DELETE| /|Eliminar usuario|✅|

Endpoint /login
|Método|Ruta|Descripción|Autenticación|
|---|---|---|---|
|POST| /|Generar token de autorizacion|❌|
|POST| /recovery|Enviar correo para recuperar contraseña|❌|
|POST| /reset-password|actualizar contraseña por recuperacion|✅|
|POST| /email-confirm|Enviar correo para confirmacion de correo|❌|
|POST| /confirm|confirmacion de correo|✅|

## 🛠️ Tecnologías utilizadas

  - Lenguaje: JavaScript
  - Entorno de ejecucion: Node js
  - Framework: Express
  - Base de datos: Postgres

## ✒️ Autor

Carlos Moreno - [KelsierCo](https://github.com/KelsierCo)
