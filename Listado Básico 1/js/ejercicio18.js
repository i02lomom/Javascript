/* Implementa PorLineas que visualice los números del 0 al 100 separados por comas.
   Cada múltiplo de 7 ha de comenzar en una línea nueva

   Autor: Miguel Angel López Moyano */

{
	let cadena="0,";
	
	for(let i=1;i<101;i++) {
		cadena+=i+",";
		if(i%7==0){
			cadena+="\n";
		}
	}
	console.log(cadena);
}