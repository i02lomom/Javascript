// Autor: MIGUEL ANGEL LOPEZ MOYANO

{
	let nombre;
	let apellidos;
	let fecha;
	let dni;
	let info;
	let empleado;

	let init=function(){
		let fechaActual = new Date();
    	let fechaFinAno = new Date(2016, 11, 31);
    	let diasRestantes = fechaFinAno - fechaActual;
    	diasRestantes = Math.floor((diasRestantes / 1000) / 60 / 60 / 24);

		nombre=document.getElementById("nombre");
		apellidos=document.getElementById("apellidos");
		fecha=document.getElementById("fecha");
		dni=document.getElementById("dni");
		info=document.getElementById("info");

		empleado=window.opener.getEmpleado();

		nombre.innerHTML=empleado.getNombre();
		apellidos.innerHTML=empleado.getApellidos();
		fecha.innerHTML=empleado.getFecha();
		dni.innerHTML=empleado.getDni();
		info.innerHTML=diasRestantes;
	}

	window.onload=init;
}