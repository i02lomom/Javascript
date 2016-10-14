/*	Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
	fecha es correcta. Si lo fuera, ha de mostrar el día después

	Autor: Miguel Angel López Moyano */

{
	let dia = parseInt(prompt("Introduzca el día: "));
	let mes= parseInt(prompt("Introduzca el mes: "));
	let anno = parseInt(prompt("Introduzca el año: "));

	let comprobarDatos = function (dia,mes,anno){
		var flagError=false;

		if(dia<=0 || dia>31)
			flagError=true;

		if(mes<=0 || mes>12)
			flagError=true;

		if(anno<0)
			flagError=true;
		return flagError;
	}

	let error=comprobarDatos(dia,mes,anno);
	
	if(!error){
		let fecha = new Date(anno, mes-1, dia, 0, 0, 0, 0);
		fecha.setDate(fecha.getDate() + 1);
		console.log("El día siguiente de la fecha indicada es: "+fecha);
	}

	else
		console.log("Se ha introducido algún dato erróneo");	
}