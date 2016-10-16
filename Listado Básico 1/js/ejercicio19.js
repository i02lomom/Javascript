/* Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas.
   Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.

   Autor: Miguel Angel López Moyano */

{
	let cadena="0,";
	
	for (let i=1;i<101;i++) {
		cadena+=i+",";
		if(i%7==0 || i.toString().substr(-1)==7){
			cadena+="\n";
		}
	}

	console.log(cadena);
}