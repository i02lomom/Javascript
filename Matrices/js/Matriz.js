let Matriz=function(filas,columnas){
	this.filas = filas;
	this.columnas = columnas;
	this.datos=new Array(filas);
	for (let i=0;i<filas;i++) {
		this.datos[i] = new Array(columnas);
		for (let j = 0; j < columnas; j++) {
		    this.datos[i][j] = 0;
		}
	}
}

Matriz.prototype.sumar=function(matriz){
    let suma = new Matriz(this.filas, this.columnas);
    for (let i=0; i<this.filas;i++) {
        for (let j=0; j<this.columnas;j++) {
            suma.datos[i][j] = this.datos[i][j] + matriz.datos[i][j];
        }
    }
    return suma;
}

Matriz.prototype.restar=function(matriz){
    let resta = new Matriz(this.filas, this.columnas);
    for (let i=0; i<this.filas;i++) {
        for (let j=0; j<this.columnas;j++) {
            resta.datos[i][j] = this.datos[i][j] - matriz.datos[i][j];
        }
    }
    return resta;
}

Matriz.prototype.multiplicar=function(matriz){
    let producto = new Matriz(this.filas, matriz.columnas);
	for (let i=0; i<this.filas;i++){
	   for (let j=0; j<matriz.columnas;j++){
	       for (let k=0; k< this.columnas; k++) {
	           producto.datos[i][j] += this.datos[i][k] * matriz.datos[k][j];
	       }
	   }
	}
	return producto;
}

Matriz.prototype.trasponer = function() {
    let traspuesta = new Matriz(this.columnas, this.filas);
    for(let i = 0; i < traspuesta.filas; i++){
        for(let j = 0;j < traspuesta.columnas; j++){
            traspuesta.datos[i][j] = this.datos[j][i];
        }
    }
    return traspuesta;
}