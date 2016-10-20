{
	window.onload = function() {
		let info = document.getElementById("informacion");
		// Numero de enlaces de la pagina
		let enlaces = document.getElementsByTagName("a");
		info.innerHTML = "Numero de enlaces = "+enlaces.length;

		// Direccion del penultimo enlace
		let mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
		info.innerHTML = info.innerHTML + "<br/>" + mensaje;
		// Numero de enlaces que apuntan a http://prueba
		let contador = 0;
		for(let i=0; i<enlaces.length; i++) {
		// Es necesario comprobar los enlaces http://prueba y
		// http://prueba/ por las diferencias entre navegadores
			if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
				contador++;
			}
		}

		info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"
		// Numero de enlaces del tercer párrafo
		let parrafos = document.getElementsByTagName("p");
		enlaces = parrafos[2].getElementsByTagName("a");
		info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
	}
}