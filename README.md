<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>
<p align="center"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></p>

# Facturación - Development

Sistema para el registro de facturas de compra. Utilizando un login y registro de usuarios, autenticación de usuario con JSonWebToken, con validaciones en frontend y backend.
Desarrollo modular 

## Comenzando 🚀

```bash
git clone https://github.com/SebastianHidalgo95/test-facturacion.git

```
### Moverse al directorio del proyecto

```bash
cd test-facturacion
```

### Descargar Dependencias del Proyecto

Como las dependencias del proyecto las maneja **composer** debemos ejecutar el comando:
En este caso se instalaron usando composer 1.9.0

```bash
composer install
```

### Información 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
Frontend - vue3 - using compositionAPI
         -vueRouter
         -Vuex
         -toastr
Backend - Laravel ^8.75
        - JWT package 'composer require tymon/jwt-auth'
DB - Mysql
```
### Configurar Entorno

La configuración del entorno se hace en el archivo **.env** pero esé archivo no se puede versionar según las restricciones del archivo **.gitignore**, igualmente en el proyecto hay un archivo de ejemplo  **.env.example** debemos copiarlo con el siguiente comando:

```bash
cp .env.example .env
```

Luego es necesario modificar los valores de las variables de entorno para adecuar la configuración a nuestro entorno de desarrollo, por ejemplo los parámetros de conexión a la base de datos.
### Configurar la Conexión con la base de datos

Vaya a la raiz de su proyecto y busque el archivo .env debe configurar las variables segun su conexion en el ejemplo utilizando xampp
La base de datos que debe tener creada en su conexión con mysql debe ser tener el nombre 'testjob' para este caso particular
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=testjob
DB_USERNAME=root
DB_PASSWORD=
```

### Migrar la Base de Datos

el proyecto ya tiene los modelos, migraciones. Entonces lo único que nos hace falta es ejecutar la migración y ejecutar el siguiente comando:

```bash
php artisan migrate:fresh
```
Los usuarios deben registrarse mediante la opcion de registro accedida desde el login

### Generar la JWT KEY
Es necesario crear una JWT Key que se almacenara como JWT_SECRET en su env (variables de entorno)

```bash
php artisan jwt:secret
```

### Instalar modulos de npm

Los paquetes utilizados para el frontend se instalan utilizando npm o yarn 

```bash
npm install
```

### Lanzar por primera vez
Para realizar el primer lanzamiento debe tener su servidor corriendo para el backend, ya sea utilizando composer serve o xampp, tambien debe generar los archivos js mediante el comando

```bash
npm run dev
``` 
## Autor ✒️

* **Johan Sebastian Hidalgo** -  - [SebastianHidalgo95](https://github.com/SebastianHidalgo95)