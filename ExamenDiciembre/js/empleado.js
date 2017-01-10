let Empleado=function(nombre,apellidos,fecha,dni){
	this.nombre=nombre;
	this.apellidos=apellidos;
	this.fecha=fecha;
	this.dni=dni;
}

Empleado.prototype.getNombre=function(){
	return this.nombre;
}

Empleado.prototype.getApellidos=function(){
	return this.apellidos;
}

Empleado.prototype.getFecha=function(){
	return this.fecha;
}

Empleado.prototype.getDni=function(){
	return this.dni;
}