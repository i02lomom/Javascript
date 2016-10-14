/* Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
   Entonces, que muestre la media.

   Autor: Miguel Angel López Moyano */

{
	let numero=1;
	let media=0;
	for(var i=0;numero>=0;i++){
		numero=parseInt(prompt("Introduzca un número: "));
		if(numero>=0)
			media+=numero;
	}
	console.log("La media es: "+media/(i-1))
}