{
	function informacion(elEvento) {
		let evento = elEvento || window.event;
		switch(evento.type) {
			case 'mousemove':
				document.getElementById('info').style.backgroundColor = '#FFFFFF';
				let ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
				let coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta,
				coordenadaYabsoluta;
				if(ie) {
					if(document.documentElement && document.documentElement.scrollTop){
						coordenadaXabsoluta = evento.clientX + document.documentElement.scrollLeft;
						coordenadaYabsoluta = evento.clientY + document.documentElement.scrollTop;
					}
					else {
						coordenadaXabsoluta = evento.clientX + document.body.scrollLeft;
						coordenadaYabsoluta = evento.clientY + document.body.scrollTop;
					}
				}
				else {
					coordenadaXabsoluta = evento.pageX;
					coordenadaYabsoluta = evento.pageY;
				}
				coordenadaXrelativa = evento.clientX;
				coordenadaYrelativa = evento.clientY;
				muestraInformacion(['Ratón', 'Navegador ['+coordenadaXrelativa+','+coordenadaYrelativa+']', 'Pagina ['+coordenadaXabsoluta+','+coordenadaYabsoluta+']']);
				break;

			case 'keypress':
				document.getElementById('info').style.backgroundColor = '#CCE6FF';
				let caracter = evento.charCode || evento.keyCode;
				let letra = String.fromCharCode(caracter);
				let codigo = letra.charCodeAt(0);
				muestraInformacion(['Teclado', 'Carácter ['+letra+']', 'Código ['+codigo+']']);
				break;

			case 'click':
				document.getElementById('info').style.backgroundColor = '#FFFFCC';
				break;
		}
	}

	function muestraInformacion(mensaje) {
		document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
		for(let i=1; i<mensaje.length; i++) {
			document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
		}
	}

	document.onmousemove = informacion;
	document.onkeypress = informacion;
	document.onclick = informacion;
}
