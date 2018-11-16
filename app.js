const argv = require('yargs').argv;
const { crearArchivo } = require('./multiplicar/multiplicar');

let argv2 = process.argv;

let base = '7';

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${ archivo }`))
    .catch(e => console.log(e))