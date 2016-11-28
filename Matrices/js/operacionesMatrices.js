{
	let init=function(){
		let filas1;
	    let columnas1;
	    let filas2;
	    let columnas2;
	    let array1;
	    let array2;
	    let operacion;

    	let generarFormulario=function(){
	        operacion = document.getElementById("operacion").value;
	        let tamano = document.getElementById("tamano");
	        let errorTamano = document.getElementById("errorTamano");
	        if(operacion != "trasponer"){
	            tamano.innerHTML = "Numero filas primera matriz:<br/>"+
	                    "<input type='text' id='filas1'/><br/></br>"+
	                    "Numero columnas primera matriz:<br/>"+
	                    "<input type='text' id='columnas1'/><br/></br>"+
	                    "Numero filas segunda matriz:<br/>"+
	                    "<input type='text' id='filas2'/><br/></br>"+
	                    "Numero columnas segunda matriz:<br/>"+
	                    "<input type='text' id='columnas2'/><br/></br>"+
	                    "<input type='button' class='submit' id='generar' value='Introducir Valores'></br>";
	        }
	        else {
	            tamano.innerHTML = "Numero filas matriz:<br/>"+
	                    "<input type='text' id='filas1'/><br/></br>"+
	                    "Numero columnas matriz:<br/>"+
	                    "<input type='text' id='columnas1'/><br/></br>"+
	                    "<input type='button' class='submit' id='generar' value='Introducir Valores'></br>";
	        }
	        document.getElementById("generar").addEventListener("click", function(){
	            try{
	                errorTamano.innerHTML = "";
	                filas1 = parseInt(document.getElementById("filas1").value);
	                columnas1 = parseInt(document.getElementById("columnas1").value);
	                if(operacion != "trasponer") {
	                    filas2 = parseInt(document.getElementById("filas2").value);
	                    columnas2 = parseInt(document.getElementById("columnas2").value);
	                    if (validacionEntradaNAN(filas1) && validacionEntradaNAN(columnas1) && validacionEntradaNAN(filas2)
	                        && validacionEntradaNAN(columnas2) && validacionEntradaPositivo(filas1) &&
	                        validacionEntradaPositivo(columnas1) && validacionEntradaPositivo(filas2) &&
	                        validacionEntradaPositivo(columnas2)) {
	                        if (validacionTamano(filas1, columnas1, filas2, columnas2)) {
	                            generarCasillas();
	                        }
	                    }
	                }
	                else{
	                    if (validacionEntradaNAN(filas1) && validacionEntradaNAN(columnas1) &&
	                        validacionEntradaPositivo(filas1) && validacionEntradaPositivo(columnas1)) {
	                        generarCasillas();
	                    }
	                }
	            }
	            catch(e){
	                errorTamano.innerHTML = e.mensaje;
	            }
	        });
	    }

	    let generarCasillas=function(){
	        filas1 = parseInt(document.getElementById("filas1").value);
	        columnas1 = parseInt(document.getElementById("columnas1").value);
	        let valores1 = document.getElementById("valores_matriz1");
	        let enviar = document.getElementById("enviar");
	        let errorValores = document.getElementById("errorValores");
	        let arrayValores = [];
	        if(operacion != "trasponer"){
	            filas2 = parseInt(document.getElementById("filas2").value);
	            columnas2 = parseInt(document.getElementById("columnas2").value);
	            let valores2 = document.getElementById("valores_matriz2");
	            valores1.innerHTML += "Matriz 1:</br>";
	            for (let i = 0; i < filas1; i++) {
	                for (let j = 0; j < columnas1; j++) {
	                    valores1.innerHTML += "<input type='text' id='matriz1f" + i + "c" + j + "'/>";
	                    arrayValores.push(parseInt(document.getElementById("matriz1f" + i + "c" + j + "").value));
	                }
	                valores1.innerHTML += "</br>";
	            }
	            valores2.innerHTML += "Matriz 2:</br>";
	            for (let i = 0; i < filas2; i++) {
	                for (let j = 0; j < columnas2; j++) {
	                    valores2.innerHTML += "<input type='text' id='matriz2f" + i + "c" + j + "'/>";
	                    arrayValores.push(parseInt(document.getElementById("matriz2f" + i + "c" + j + "").value));
	                }
	                valores2.innerHTML += "</br>";
	            }
	        }
	        else {
	            valores1.innerHTML += "Matriz 1:</br>";
	            for (let i = 0; i < filas1; i++) {
	                for (let j = 0; j < columnas1; j++) {
	                    valores1.innerHTML += "<input type='text' id='matriz1f" + i + "c" + j + "'/>";
	                    arrayValores.push(parseInt(document.getElementById("matriz1f" + i + "c" + j + "").value));
	                }
	                valores1.innerHTML += "</br>";
	            }
	        }
	        enviar.innerHTML = "<input type='button' class='submit' id='calcular' value='Enviar'>";
	        document.getElementById("calcular").addEventListener("click", function(){
	            let errorEntrada = false;
	            try{
	                errorValores.innerHTML = "";
	                if(operacion === "trasponer") {
	                    for (let i = 0; i < filas1; i++) {
	                        for (let j = 0; j < columnas1; j++) {
	                            if (!validacionEntradaNAN(parseInt(document.getElementById("matriz1f" + i + "c" + j + "").value))) {
	                                errorEntrada = true;
	                            }
	                        }
	                    }
	                }
	                else{
	                    for (let i = 0; i < filas1; i++) {
	                        for (let j = 0; j < columnas1; j++) {
	                            if (!validacionEntradaNAN(parseInt(document.getElementById("matriz1f" + i + "c" + j + "").value))) {
	                                errorEntrada = true;
	                            }
	                        }
	                    }
	                    for (let i = 0; i < filas2; i++) {
	                        for (let j = 0; j < columnas2; j++) {
	                            if (!validacionEntradaNAN(parseInt(document.getElementById("matriz2f" + i + "c" + j + "").value))) {
	                                errorEntrada = true;
	                            }
	                        }
	                    }
	                }
	                if(!errorEntrada) {
	                    crearArrays();
	                }
	            }
	            catch(e){
	                errorValores.innerHTML = e.mensaje;
	            }
	        });
	    }

		let crearArrays=function(){
	        if(operacion != "trasponer"){
	            array1 = new Matriz(filas1, columnas1);
	            array2 = new Matriz(filas2, columnas2);
	        }
	        else {
	            array1 = new Matriz(filas1, columnas1);
	        }
	        rellenarArrays();
	    }

	    let rellenarArrays=function(){
	        if(operacion != "trasponer"){
	            for (let i = 0; i < filas1; i++) {  
	                for (let j = 0; j < columnas1; j++) {
	                    array1.datos[i][j] = parseInt(document.getElementById("matriz1f" + i + "c" + j + "").value);
	                }
	            }
	            for (let i = 0; i < filas2; i++) {
	                for (let j = 0; j < columnas2; j++) {
	                    array2.datos[i][j] = parseInt(document.getElementById("matriz2f" + i + "c" + j + "").value);
	                }
	            }
	        }
	        else {
	            for (let i = 0; i < filas1; i++) {
	                for (let j = 0; j < columnas1; j++) {
	                    array1.datos[i][j] = parseInt(document.getElementById("matriz1f" + i + "c" + j + "").value);
	                }
	            }
	        }
	        elegirOperacion();
	    }

	    let elegirOperacion=function(){
	        let operacion = document.getElementById("operacion").value;
	        switch(operacion){
	            case "sumar":
	                mostrarResultado(array1.sumar(array2));
	                break;
	            case "restar":
	                mostrarResultado(array1.restar(array2));
	                break;
	            case "multiplicar":
	                mostrarResultado(array1.multiplicar(array2));
	                break;
	            case "trasponer":
	                mostrarResultado(array1.trasponer());
	                break;
	            default:
	                break;
	        }
	    }

	    let mostrarResultado=function(array){
	        let resultado = document.getElementById("resultado");
	        for(let i = 0; i < array.filas; i++){
	            for(let j = 0; j <array.columnas; j++){
	                resultado.innerHTML += "" + array.datos[i][j] + "    ";
	            }
	            resultado.innerHTML += "</br>";
	        }
	    } 

		let validacionTamano=function(filas1, columnas1, filas2, columnas2){
	        if(operacion === "sumar" || operacion === "restar") {
	            if (filas1 != filas2 || columnas1 != columnas2) {
	                throw new ExcepcionTamano("Filas y columnas de ambas matrices deben coincidir.");
	            }
	            else {
	                return true;
	            }
	        }
	        if(operacion === "multiplicar"){
	            if (filas1 != columnas2) {
	                throw new ExcepcionTamano("Filas de la matriz primera deben ser igual a columnas de segunda matriz.");
	            }
	            else {
	                return true;
	            }
	        }
	    }

		let validacionEntradaNAN=function(entrada){
	        if(isNaN(entrada)) {
	            throw new ExcepcionEntradaDato("Debe introducir números.");
	        }
	        else{
	            return true;
	        }
	    }

	    let validacionEntradaPositivo=function(entrada){
	        if(entrada <= 0){
	            throw new ExcepcionEntradaDato("Debe introducir números positivos.");
	        }
	        else{
	            return true;
	        }
	    }

		let ExcepcionTamano=function(mensaje) {
	        this.mensaje = mensaje;
	    }

	    let ExcepcionEntradaDato=function(mensaje) {
	        this.mensaje = mensaje;
	    }

		document.getElementById("operacion").addEventListener("change", generarFormulario);

	}

	window.onload=init;
}