let Empleado=function(nombre,fecha,dni){
	this.nombre=nombre;
	this.fecha=fecha;
	this.dni=dni;
}

Empleado.prototype.getNombre=function(){
	return this.nombre;
}

Empleado.prototype.getFecha=function(){
	return this.fecha;
}

Empleado.prototype.getDni=function(){
	return this.dni;
}