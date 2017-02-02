{
	let estado=true;

	$(document).ready(inicio);

	function inicio(){
		$("#draggable").draggable();	
		$("#alumno").selectmenu();
	    $("#button").on("click",animacion);
	}

	function animacion() {
	    if (estado) {
	    	$("#effect").animate({
	        	backgroundColor: "#3383BB",
	        	color: "#fff",
	        	width: 500
	        }, 1000 );
	    } 

	    else {
	        $("#effect").animate({
	        	backgroundColor: "#fff",
	        	color: "#000",
	        	width: 240
	        }, 1000 );
	    }

	    estado= !estado;
	}
}