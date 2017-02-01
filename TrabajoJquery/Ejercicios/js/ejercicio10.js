{
	let $enlace;
	let $divInfo;

	$(document).ready(inicio);

	function inicio(){
    	$divInfo=$('#info');
    	$enlace=$('#enlace');
    	$enlace.addClass("azul");

		$enlace
			.addClass("enlace")
			.on("click", clickAlEnlace)
			.on("mouseover", sobreElEnlace)
			.on("mouseout", fueraDelEnlace);	
	}

	function clickAlEnlace(evento){
		evento.preventDefault();
		$divInfo.html('<img src="img/ej10.PNG" alt="Ejercicio 10">');
	}

	function sobreElEnlace(){
		$enlace.removeClass("azul");
		$enlace.addClass("rojo");
	}

	function fueraDelEnlace(){
		$enlace.removeClass("rojo");
		$enlace.addClass("azul");
	}
}
