<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>
<img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo">

# Facturación - Development

Sistema para el registro de facturas de compra. Utilizando un login y registro de usuarios, autenticación de usuario con JSonWebToken, con validaciones en frontend y backend.
Desarrollo modular 

## Comenzando 🚀

##Clonar el Repositorio de git

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
Backedn - Laravel ^8.75
        - JWT package 'composer require tymon/jwt-auth'
DB - Mysql
```
### Configurar Entorno

La configuración del entorno se hace en el archivo **.env** pero esé archivo no se puede versionar según las restricciones del archivo **.gitignore**, igualmente en el proyecto hay un archivo de ejemplo  **.env.example** debemos copiarlo con el siguiente comando:

```bash
cp .env.example .env
```

Luego es necesario modificar los valores de las variables de entorno para adecuar la configuración a nuestro entorno de desarrollo, por ejemplo los parámetros de conexión a la base de datos.

### Migrar la Base de Datos

el proyecto ya tiene los modelos, migraciones. Entonces lo único que nos hace falta es ejecutar la migración y ejecutar el siguiente comando:

```bash
php artisan migrate:fresh
```
Los usuarios deben registrarse mediante la opcion de registro accedida desde el login

