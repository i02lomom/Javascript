/*	Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
	fecha es correcta. Si lo fuera, ha de mostrar el día después

	Autor: Miguel Angel López Moyano */

{
	let dia = prompt("Introduzca el día: ");
	let mes= prompt("Introduzca el mes: ");
	let anno = prompt("Introduzca el año: ");

	if(isNaN(dia) || dia.length==0  ||
		isNaN(mes) || mes.length==0 ||
		isNaN(anno) || anno.length==0){

		console.log("Error. Se ha introducido un dato erróneo");
	}

	else{
		let comprobarDatos = function (dia,mes,anno){
			if(dia<=0 || dia>31)
				return true;

			if(mes<=0 || mes>12)
				return true;

			if(anno<0)
				return true;
			return false;
		}
		
		if(!comprobarDatos(dia,mes,anno)){
			let fecha = new Date(anno, mes-1, dia, 0, 0, 0, 0);
			fecha.setDate(fecha.getDate() + 1);
			console.log("El día siguiente de la fecha indicada es: "+fecha);
		}
		else
			console.log("Se ha introducido algún dato erróneo");
	}
	
}