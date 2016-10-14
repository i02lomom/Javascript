/* Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
   secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
   (menor que 1), que lo indique

   Autor: Miguel Angel López Moyano */

{
	let numero = prompt("Introduzca un número entero: ");

	let comprobarDatos = function (numero){
		let flagError=false;

		if(numero<1)
			flagError=true;

		if(isNaN(numero))
			flagError=true;

		return flagError;
	}

	let error=comprobarDatos(numero);

	if(!error){
		for(let i=1;i<=numero;i++)
			console.log(i);
	}

	else
		console.log("Se ha introducido algún dato erróneo");
}