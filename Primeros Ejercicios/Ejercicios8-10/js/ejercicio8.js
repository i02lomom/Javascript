function parOImpar(numero){
	if(isNaN(numero))
		return "Error. No ha introducido un número";
	else {
		if(numero%2==0)
			return "El número es par";
		else
			return "El número es impar";
	}	
}

var numero=prompt("Introduzca un número. Le indicaremos si es par o no:");

alert(parOImpar(numero));