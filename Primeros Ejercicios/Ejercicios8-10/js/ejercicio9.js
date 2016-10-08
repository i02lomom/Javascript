/* Comprueba si la cadena pasada como argumento lleva sólo mayúsculas, solo minúsculas o
   bien lleva tanto mayúsculas como minúsculas */
function mayusculasOMinusculas(cadena){
	if(isNaN(cadena)){
		if(cadena == cadena.toUpperCase())
			return cadena+" solo lleva mayúsculas"
		else if(cadena == cadena.toLowerCase())
			return cadena+" solo lleva minúsculas"
		else
			return cadena+" lleva mayúsculas y minúsculas"
	}
	else
		return "Error. No ha introducido una cadena";
}

var cadena=prompt("Introduzca una cadena: ");

alert(mayusculasOMinusculas(cadena));