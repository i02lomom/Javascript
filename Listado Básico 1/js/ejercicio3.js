/*	Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5

	Autor: Miguel Angel López Moyano */

{
	let numero;
	let array=[];
	let multiplo=false;

	for(let i=0;i<7;i++){
		do{
			numero = prompt("Introduzca un número: ");

			if(isNaN(numero) || numero.length==0){
				console.log("Error. No has introducido un número");
			}
			else
				array[i]=numero;

		}while(isNaN(numero));
	}

	for(let indice in array){
		if(array[indice]%5==0)
			multiplo=true;
	}

	if(multiplo)
		console.log("Se ha introducido un múltiplo de 5");
	else
		console.log("No se ha introducido un múltiplo de 5");
}
