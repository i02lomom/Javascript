/* Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente
   tipo:

   1
   22
   333
   4444
   55555
   666666
   7777777
   88888888
   999999999
   0000000000

   Autor: Miguel Angel López Moyano */

{
	let cadena="";

	for(let i=1;i<10;i++){
    	for(let j=1;j<=i;j++){
    		cadena += i;
        }
        cadena+="\n";
    }
    console.log(cadena);
}