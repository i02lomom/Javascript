/*	Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
	entre el 1 y el 100.

	Autor: Miguel Angel López Moyano */

{
	function generarAleatorio(){
		return Math.round(Math.random() * 100);
	}

	function deseaContinuar(){
		do{
			var respuesta=prompt("¿Desea jugar otra vez? (s/n): ");

			if(isNaN(respuesta)){
				respuesta=respuesta.toLowerCase();

				if(respuesta!='s' && respuesta!='n')
            		console.log("Error. Respuesta incorrecta");
			}
		}while(respuesta!='s' && respuesta!='n');

		if (respuesta==='s')
            return true;
        return false;
	}

	do {
		let numero = prompt("Introduzca un número: ");

		if(!isNaN(numero) && numero%1===0 && numero>0 && numero<101) {
			let aleatorio=generarAleatorio();

			if(numero===aleatorio)
				console.log("Has acertado el número");
			else{
				console.log("No has acertado el número");
				if(numero>aleatorio)
					console.log("El número es más pequeño. Te has pasado.");
				else
					console.log("El número es más grande. Te has quedado corto.");
			}
		}
		else
			console.log("Error. No se introducido un número entero");
	}while(deseaContinuar());
}
