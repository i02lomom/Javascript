/*	Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números
    primos existen entre el 1 y dicho número.

	Autor: Miguel Angel López Moyano */

function esPrimo(numero){
	var primo=true;
	for(let i=2;i<numero;i++){
		if(numero%i==0){
			primo=false;
			break;
		}
	}
	return primo;
}


var contador=0;
var numero = parseInt(prompt("Introduzca un número entero positivo: "));

if(isNaN(numero)){
	console.log("Error. No has introducido un número entero");
}
else{
	for(let i=1;i<numero;i++){
		if(esPrimo(i))
			contador++;
	}
	console.log("Entre el 1 y el "+numero+" hay "+contador+" números primos");
}
