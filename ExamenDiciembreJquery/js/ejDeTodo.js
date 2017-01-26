{
	let html;
	let $informa;
	let $raton;
	let $salir;
	let $info;
	let fecha=new Date();
	let arrayDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

	let mensajeHora=function(){
		let hora=fecha.getHours();
        let minutos=fecha.getMinutes();

        if(hora>=18 && hora<=23)
            if ((hora==18 && minutos>0) || hora>18)
                return "Son las "+fecha.getHours()+":"+fecha.getMinutes()+" Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
        if(hora>=0 && hora<8)
            return "Son las "+fecha.getHours()+":"+fecha.getMinutes()+" Ya es hora de que comiences a trabajar. Hay que levantar el país.";
        if(hora>=8 && hora<=18)
            if((hora==18 && minutos==0) || hora<18)
                return "Son las "+fecha.getHours()+":"+fecha.getMinutes()+" Pronto llegan las vacaciones. Aguanta";
	}

	let limpiar = function(){
        $info.html("");
    }
	
	$(document).ready(function(){
		html=localStorage.getItem("htmlDetodo");
		$('body').html(html);
		localStorage.removeItem("htmlDetodo");

		$informa=$('#informa');
		$raton=$('#raton');
		$salir=$('#salir');
		$info=$('#info');

		$informa.click(function(){
			$info.append("Hoy es "+arrayDias[fecha.getDay()]+". "+mensajeHora());
		});

		$raton.click(function(elEvento){
			$info.append("Posición Ratón: X: "+elEvento.clientX+", Y: "+elEvento.clientY);
        	setTimeout(limpiar, 2000);
		});

		$salir.click(function(){
			window.close();
		});

	});
}