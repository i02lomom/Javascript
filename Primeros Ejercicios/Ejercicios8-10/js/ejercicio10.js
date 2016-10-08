/* Comprueba si la cadena pasada como argumento es un palíndromo */
function palindromo(cadena) {
	cadena = cadena.toLowerCase();
	//Creamos un array donde cada letra es un elemento.
	var arrayLetrasConEspacios = cadena.split("");
	//Vamos a meter en cadena sin espacios todos los caracteres excepto el espacio
	var cadenaSinEspacios = "";
	for(i in arrayLetrasConEspacios) {
		if(arrayLetrasConEspacios[i] != " ") 
			cadenaSinEspacios += arrayLetrasConEspacios[i];	
	}

	var arrayLetras = cadenaSinEspacios.split("");
	var arrayLetrasAlReves = cadenaSinEspacios.split("").reverse();
	var palindromo =true;

	for(i in cadenaSinEspacios) {
		if(arrayLetras[i]!=arrayLetrasAlReves[i]) {
			palindromo =false;
			break;
		}
	}
	return palindromo;
}

var cadena=prompt("Introduzca una cadena: ");

if(isNaN(cadena)){
	if(palindromo(cadena))
		alert(cadena+" es un palíndromo");
	else
		alert(cadena+" no es un palíndromo");
}

else {
	alert("Error. No ha introducido una cadena");
}