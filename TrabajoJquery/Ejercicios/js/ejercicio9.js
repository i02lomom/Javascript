{
	let $enlace;
	let $divInfo;

	$(document).ready(inicio);

	function inicio(){
    	$divInfo=$('#info');
    	$enlace=$('a');
    	
    	$enlace.attr({
    		href: "",
    		title: "Mi enlace",
    		id: "enlace"
		});

		$enlace.on("click", clickAlEnlace);			
	}

	function clickAlEnlace(evento){
		evento.preventDefault();
		$divInfo.html('<img src="img/ej9.PNG" alt="Ejercicio 9">');
	}
}
