{
	function muestraOculta(id) {
		let elemento = document.getElementById('contenidos_'+id);
		let enlace = document.getElementById('enlace_'+id);
		if(elemento.style.display == "" || elemento.style.display == "block") {
			elemento.style.display = "none";
			enlace.innerHTML = 'Mostrar contenidos';
		}
		else {
			elemento.style.display = "block";
			enlace.innerHTML = 'Ocultar contenidos';
		}
	}
}