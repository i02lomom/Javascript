{
	function informacion(elEvento) {
		let evento = elEvento || window.event;
		let coordenadaX = evento.clientX;
		let coordenadaY = evento.clientY;
		let dimensiones = tamanoVentanaNavegador();
		let tamanoX = dimensiones[0];
		let tamanoY = dimensiones[1];
		let posicionHorizontal = "";
		let posicionVertical = "";
		if(coordenadaX > tamanoX/2) {
			posicionHorizontal = "derecha";
		}
		else {
			posicionHorizontal = "izquierda";
		}
		if(coordenadaY > tamanoY/2) {
			posicionVertical = "abajo";
		}
		else {
			posicionVertical = "arriba";
		}
		muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
	}

	function muestraInformacion(mensaje) {
		document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
		for(let i=1; i<mensaje.length; i++) {
			document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
		}
	}

	function tamanoVentanaNavegador(){
		let dimensiones = [];
		if(typeof(window.innerWidth) == 'number') {
			// No es IE
			dimensiones = [window.innerWidth, window.innerHeight];
		} 
		else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			//IE 6 en modo estandar (no quirks)
			dimensiones = [document.documentElement.clientWidth,
			document.documentElement.clientHeight];
		} 
		else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
			//IE en modo quirks
			dimensiones = [document.body.clientWidth, document.body.clientHeight];
		}
		return dimensiones;
	}
	document.onclick = informacion;
}