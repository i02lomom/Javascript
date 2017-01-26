let Empleado=function(nombre,fecha,dni){
	this.nombre=nombre;
	this.fecha=fecha;
	this.dni=dni;
}

Empleado.prototype.nuevaVentana=function(){
	let fechaActual=new Date();
    let fechaFinAno=new Date(fechaActual.getFullYear(), 11, 31);
    let diasRestantes=fechaFinAno - fechaActual;
    diasRestantes=Math.floor((diasRestantes / 1000) / 60 / 60 / 24);

    let nuevaVentana=window.open("", "Datos Empleado","witdh=600,height=400,top=0,left=0");
    nuevaVentana.document.write("<h1 style=\"text-align:center;\">Miguel Ángel López Moyano</h1>" +
    	"<h2 style=\"text-align:center;\">Examen diciembre 2016</h2>" +
        "<p style=\"text-align:center;\">Nombre: " + this.nombre + "</p>" +
        "<p style=\"text-align:center;\">Fecha Nacimiento: " + this.fecha + "</p>" +
        "<p style=\"text-align:center;\">Dni: " + this.dni + "</p>" +
        "<p style=\"text-align:center;\">Dias hasta fin de año: " + (diasRestantes + 1) + "</p>");
}