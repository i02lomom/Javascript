{
	let info;
	let evento;
	let mensaje;

	let init=function(){
		info=document.getElementById("info");

		document.onkeyup = muestraInformacion;
		document.onkeypress = muestraInformacion;
		document.onkeydown = muestraInformacion;
	}

	function muestraInformacion(elEvento) {
		evento = window.event || elEvento;
		 
		mensaje = "Tipo de evento: " + evento.type + "<br>" +
		            "Propiedad keyCode: " + evento.keyCode + "<br>" +
		            "Propiedad charCode: " + evento.charCode + "<br>" +
		            "Carácter pulsado: " + String.fromCharCode(evento.charCode);
		 
		info.innerHTML += "<br>" + mensaje;
	}

	window.onload=init;
}