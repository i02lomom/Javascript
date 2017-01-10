// Autor: MIGUEL ANGEL LOPEZ MOYANO

{
	let informa;
	let raton;
	let salir;
	let info;
	let fecha=new Date();
	let arrayDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

	let mostrarInformacion=function(){
		info.innerHTML="Hoy es "+arrayDias[fecha.getDay()]+". "+mensajeHora();
	}

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

	let mostrarRaton=function(elEvento){
		info.innerHTML = "Posición Ratón: X: "+elEvento.clientX+", Y: "+elEvento.clientY;
        setTimeout(limpiar, 2000);
	}

	let limpiar = function(){
        info.innerHTML = "";
    }

	let cerrarVentana=function(){
        window.close();
    }

	let init=function(){
		informa=document.getElementById("informa");
		raton=document.getElementById("raton");
		salir=document.getElementById("salir");
		info=document.getElementById("info");

		informa.addEventListener("click",mostrarInformacion);
		raton.addEventListener("click",mostrarRaton);
		salir.addEventListener("click",cerrarVentana);
	}

	window.onload=init;
}