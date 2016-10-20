/* Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
   Entonces, que muestre la media.

   Autor: Miguel Angel López Moyano */

{
	let numero=1;
	let media=0,i=0;

	for(i=0;numero>=0;i++){
		numero=prompt("Introduzca un número: ");

		if(isNaN(numero) || numero.length==0){
			console.log("Error. El numero introducido es incorrecto");
			numero=1;
		}

		else{
			numero=parseInt(numero);
			if(numero>=0)
				media+=numero;
		}
	}
	console.log("La media es: "+media/(i-1))
}