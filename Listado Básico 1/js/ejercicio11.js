/* Implementa MediaPositivos que calcule la media de una serie de números positivos,
   introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.

   Autor: Miguel Angel López Moyano */

{
	let numero=1;
	let media=0;
	for(var i=0;numero!=0;i++){
		numero=parseInt(prompt("Introduzca un número: "));
		while(numero<0){
			console.log("Error. El numero introducido es menor que cero");
			numero=parseInt(prompt("Introduzca un número: "));
		}
		media+=numero;
	}
	console.log("La media es: "+media/(i-1))
}