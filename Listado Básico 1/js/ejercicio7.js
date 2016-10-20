/*	Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
	a. Cuántas cifras tiene (7 cifras)
	b. Lo muestre del revés

	Autor: Miguel Angel López Moyano */

{
	let num = prompt("Introduzca un número con decimales: ");

	if(isNaN(num) || num.length==0)
		console.log("Error. No has introducido un número entero");
	else{
		let numero = num.split(".");

		if(num=>0 && num<10){
			if(numero.length-1==0)
				console.log("El número no tiene decimales");
			else{
				let digitos = numero[1].length;
				console.log("El numero "+numero+" tiene "+ digitos +" decimales");
				console.log("El número invertido es: "+numero.reverse());
			}
		}
		else
			console.log("El número no es válido");
	}
}