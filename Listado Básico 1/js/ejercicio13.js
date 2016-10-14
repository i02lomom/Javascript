/* Implementa ProductoPotencias que calcule y visualice el producto de las potencias de
   2 entre 0 y 10.
   
   Autor: Miguel Angel López Moyano */
{
	let producto=1;

	for(let i=0;i<=10;i++){
		let calcularProducto=function(i){
			return ((Math.pow(2,i)));
		}

		let resultado=calcularProducto(i);
		console.log("2 elevado a " + i + " = " + resultado);
		producto*=resultado;
	}
	console.log("El producto total es: " + producto);
}