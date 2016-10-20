/*	Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
	mayor.

	Autor: Miguel Angel López Moyano */

{
	let ordenaTres=function(){

		let numero1=prompt("Introduzca el primer número: ");
		let numero2=prompt("Introduzca el segundo número: ");
		let numero3=prompt("Introduzca el tercer número: ");

		if(isNaN(numero1) || numero1.length==0  ||
			isNaN(numero2) || numero2.length==0 ||
			isNaN(numero3) || numero3.length==0){

			console.log("Error. No has introducido tres números enteros");
		}

		else{

			let comprobarNumeros=function(numero1,numero2,numero3){
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
			comprobarNumeros(numero1,numero2,numero3);
		}	
	}
	ordenaTres();
}