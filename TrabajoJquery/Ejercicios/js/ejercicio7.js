{
	let $enlace;
	let $divInfo;

	$(document).ready(inicio);

	function inicio(){
    	$divInfo=$('#info');
    	$enlace=$('#enlace');

		$enlace.on("click", manejadorDeEnlace);	
	}

	function manejadorDeEnlace(evento){
		evento.preventDefault();
		$divInfo.html('<img src="img/ej7.PNG" alt="Ejercicio 7">');
	}
}
