var numeroA = prompt('Ingresa un número (menor a 1000) ');
numeroA = parseInt(numeroA);
nombre = prompt('Ingrese su nombre:');
var numeroB = prompt('Ingresa un número (entre 10 y 50)');
numeroB = parseInt(numeroB);


if (numeroA >= 1000) {
  alert("Por favor ingrese un numero menor a 1000")
}

if (nombre != 'Hola') {
   console.log('Hola, ' + nombre + '!')
} else {
   console.warn('El nombre ingresado es invalido.')
}

if ((numeroB > 10 && numeroB < 50)) {
   alert('El número ingresado es correcto')
} else {
   console.warn('El usuario ha ingresado un número incorrecto')
}   

console.info('Prueab if else');
