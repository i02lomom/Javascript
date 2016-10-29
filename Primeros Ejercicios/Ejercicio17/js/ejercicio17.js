{
	const max=100;

	let init = function() {
		let texto=document.getElementById("texto");

		texto.addEventListener('keydown', actualizaInfo,false);
		texto.addEventListener('keypress', limitar,false);
		
	}

	let limitar=function () {
		let elemento = document.getElementById("texto");
		// Obtener la tecla pulsada
		let evento = event || window.event;
		let codigoCaracter = evento.charCode || evento.keyCode;
		// Permitir utilizar las teclas con flecha horizontal
		if(codigoCaracter == 37 || codigoCaracter == 39) {
			return true;
		}
		if(codigoCaracter == 8 || codigoCaracter == 46) {
			return true;
		}
		else if(elemento.value.length >= max ) {
			evento.preventDefault();
		}
		else {
			return true;
		}
	}

	let actualizaInfo=function() {
		let elemento = document.getElementById("texto");
		let info = document.getElementById("info");
		if(elemento.value.length >= max ) {
			info.innerHTML = "Máximo "+max+" caracteres";
		}
		else {
			info.innerHTML = "Puedes escribir hasta "+(max-elemento.value.length)+" caracteres adicionales";
		}
	}

		
	window.onload = init;
	
}