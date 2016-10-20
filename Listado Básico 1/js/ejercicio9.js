/*	Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si
	es correcta. Si lo fuera, ha de mostrar la hora un segundo después

	Autor: Miguel Angel López Moyano */

{
	let hora = prompt("Introduzca la hora: ");
	let minutos= prompt("Introduzca los minutos: ");
	let segundos = prompt("Introduzca los segundos: ");

	if(isNaN(hora) || hora.length==0  ||
		isNaN(minutos) || minutos.length==0 ||
		isNaN(segundos) || segundos.length==0){

		console.log("Error. Se ha introducido un dato erróneo");
	}

	else{
		let comprobarDatos = function (hora,minutos,segundos){
			if(hora<0 || hora>23)
				return true;

			if(minutos<0 || minutos>59)
				return true;

			if(segundos<0 || segundos>59)
				return true;
			return false;
		}

		if(!comprobarDatos(hora,minutos,segundos)){
			let fecha = new Date(0, 0, 0, hora, minutos, segundos, 0);
			fecha.setSeconds(fecha.getSeconds() + 1);
			console.log("El segundo siguiente de la hora indicada es: "+fecha);
		}

		else
			console.log("Se ha introducido algún dato erróneo");	
	}	
}