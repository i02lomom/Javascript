/*	Implenta NumeroPrimo que pida un número e indique si es primo o no.

	Autor: Miguel Angel López Moyano */

{
	let esPrimo =function(numero){
		var primo=true;
		for(let i=2;i<numero;i++){
			if(numero%i==0){
				primo=false;
				break;
			}
		}
		return primo;
	}

	let numero = prompt("Introduzca un número: ");

	if(isNaN(numero) || numero.length==0){
		console.log("Error. No has introducido un número");
	}
	else{
		if(esPrimo(numero))
			console.log("El número es primo");
		else
			console.log("El número no es primo");
	}
}