/*	Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
	mayor.

	Autor: Miguel Angel López Moyano */

{
	let ordenaTres=function(){

		let numero1=parseInt(prompt("Introduzca el primer número: "));
		let numero2=parseInt(prompt("Introduzca el segundo número: "));
		let numero3=parseInt(prompt("Introduzca el tercer número: "));

		if(numero1>numero2 && numero1>numero3 && numero2>numero3){
			console.log("Los numeros de mayor a menor son: " + numero1 + " " + numero2 +" " + numero3);
		}
		else if(numero1>numero2 && numero1>numero3 && numero2<numero3){
			console.log("Los numeros de mayor a menor son: " + numero1 + " " + numero3 +" " + numero2);
		}
		else if(numero2>numero1 && numero2>numero3 && numero1>numero3){
			console.log("Los numeros de mayor a menor son: " + numero2 + " " + numero1 +" " + numero3);
		}
		else if(numero2>numero1 && numero2>numero3 && numero1<numero3){
			console.log("Los numeros de mayor a menor son: " + numero2 + " " + numero3 +" " + numero1);
		}
		else if(numero3>numero1 && numero3>numero2 && numero1>numero2){
			console.log("Los numeros de mayor a menor son: " + numero3 + " " + numero1 +" " + numero2);
		}
		else if(numero3>numero1 && numero3>numero2 && numero1<numero2){
			console.log("Los numeros de mayor a menor son: " + numero3 + " " + numero2 +" " + numero1);
		}
	}

	ordenaTres();
}