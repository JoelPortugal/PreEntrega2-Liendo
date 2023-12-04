
/* OBJETOS MONEDAS */
const tasasDeCambio = {
  usd: 1,      
  "peso argentino": 900,   
  "peso chileno": 868,  
  "peso uruguayo": 39,  
};

/* FUNCION PARA CONVERTIR LA MONEDA */

function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {

  const tasaOrigen = tasasDeCambio[monedaOrigen];

  const tasaDestino = tasasDeCambio[monedaDestino];

  if (tasaOrigen !== undefined && tasaDestino !== undefined) {

      const cantidadConvertida = (cantidad / tasaOrigen) * tasaDestino;

      return cantidadConvertida.toFixed(2); /* HACER QUE EL NUMERO SE REDONDEE  */

  } else {
      return 'Error: Moneda no compatible';
  }
}

/* USAR FUNCION CON DATOS INGRESADOS POR EL USUARIO  */

const cantidadIngresada = parseFloat(prompt('Ingrese la cantidad a convertir:'));

const monedaOrigen = prompt('Ingrese la moneda de origen (usd, peso argentino, peso chileno, peso uruguayo):');

const monedaDestino = prompt('Ingrese la moneda de destino (usd, peso argentino, peso chileno, peso uruguayo):');

const resultado = convertirMoneda(cantidadIngresada, monedaOrigen, monedaDestino);

if (!isNaN(resultado)) {
  alert(`${cantidadIngresada} ${monedaOrigen} equivale a ${resultado} ${monedaDestino}`);
} else {
  alert(resultado);
}
