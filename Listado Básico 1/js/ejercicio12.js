/* Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
   de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.

   Autor: Miguel Angel López Moyano */

{
	let numero;
	let contador=0;

	do{
		numero=prompt("Introduzca un número (0 o 1): ");
		if(numero<0 || numero>2 || isNaN(numero) || numero.length==0){
			console.log("Error. El numero introducido es distinto de cero o uno");
		}

		else{
			numero=parseInt(numero);
			if(numero==0){
				contador++;
			}
		}
	}while(numero!=2);
	console.log("Se han introducido "+contador+" ceros");
}