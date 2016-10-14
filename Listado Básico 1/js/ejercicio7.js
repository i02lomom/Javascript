/*	Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
	a. Cuántas cifras tiene (7 cifras)
	b. Lo muestre del revés

	Autor: Miguel Angel López Moyano */

var num = prompt("Introduzca un número: ");
var numero = num.split(".");

if(num=>0 && num<10){
	var digitos = numero[1].length;

	if(numero.length-1==0)
		console.log("El número no tiene decimales");
	else{
		console.log("El numero "+numero+" tiene "+ digitos +" decimales");
		console.log("El número invertido es: "+numero.reverse());
	}
}
else
	console.log("El número no es válido");