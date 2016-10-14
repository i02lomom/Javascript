/* Implementa PiramideDos que mediante un bucle for visualice una pirámide del
   siguiente tipo:
   
   1
   12
   123
   1234
   12345
   123456
   1234567
   12345678
   123456789
   1234567890

   Autor: Miguel Angel López Moyano */

{
   let cadena="";

   for(let i=1;i<11;i++){
      for(let j=1;j<=i;j++){
         cadena += j;
        }
        cadena+="\n";
    }
    console.log(cadena);
}