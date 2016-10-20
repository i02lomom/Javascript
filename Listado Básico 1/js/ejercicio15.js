/* Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
   secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
   (menor que 1), que lo indique

   Autor: Miguel Angel López Moyano */

{
	let numero = prompt("Introduzca un número entero: ");

	let comprobarDatos = function (numero){
		if(numero<1)
			return true;
		if(isNaN(numero))
			return true;
		if(numero.length==0)
			return true;
		return false;
	}

	if(!comprobarDatos(numero)){
		numero=parseInt(numero);
		for(let i=1;i<=numero;i++)
			console.log(i);
	}

	else
		console.log("Se ha introducido un número erróneo");
}