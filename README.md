# Requisitos

La aplicacion esta desarrollada en Ionic, por lo que este y Nodejs deben estar instalados y configurados en el sistema.

  

- Para instalar Nodejs, use el siguiente [enlace](https://nodejs.org/es/)

- Para instalar Ionic, usando npm, ejecute el siguiente comando en una consola: 
**npm install -g ionic**

  
# Instrucciones

1. git clone https://github.com/JpRod96/TSimuMobileClient.git

2. git cd tSimuMobileClient

3. npm install

4. ionic serve

# Instrucciones para generacion de APK
1. ionic cordova platform add android
2. ionic cordova build android

De ocurrir algun error relacionado con las dependencias de en node_modules, hacer lo siguiente:
3. ionic cordova platform rm android
4. Eliminar la carpeta node_modules 
5. Eliminar el archivo package-lock.json
6. npm install
Y ejecutar los comandos del paso 1 y 2.