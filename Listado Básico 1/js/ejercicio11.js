/* Implementa MediaPositivos que calcule la media de una serie de números positivos,
   introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.

   Autor: Miguel Angel López Moyano */

{
	let numero=1;
	let media=0,i=0;

	for(i=0;numero!=0;i++){
		numero=prompt("Introduzca un número: ");
		while(numero<0 || isNaN(numero) || numero.length==0){
			console.log("Error. El numero introducido es incorrecto");
			numero=prompt("Introduzca un número: ");
		}
		media+=parseInt(numero);
	}
	console.log("La media es: "+media/(i-1))
}