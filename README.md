# Requisitos

La aplicacion esta desarrollada en Ionic, por lo que este y Nodejs deben estar instalados y configurados en el sistema.

  

- Para instalar Nodejs, use el siguiente [enlace](https://nodejs.org/es/)

- Para instalar Ionic, usando npm, ejecute el siguiente comando en una consola: 
**npm install -g ionic**

  
# Instrucciones

1. git clone https://github.com/JpRod96/TSimuMobileClient.git

2. cd tSimuMobileClient

3. npm install

4. ionic serve

# Instrucciones para generacion de APK
1. ionic cordova platform add android
2. ionic cordova build android

De ocurrir algun error relacionado con las dependencias en node_modules, hacer lo siguiente:

1. ionic cordova platform rm android
2. Eliminar la carpeta node_modules 
3. Eliminar el archivo package-lock.json
4. npm install

Y ejecutar los 2 comandos anteriores