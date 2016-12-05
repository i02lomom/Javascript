let expresiones = {
	regexNombre:/^([A-ZÁÉÍÓÚÑ][a-zñáéíóú]+[\s]*)+$/,
	errorNombre:"Nombre incorrecto. Ejemplo: Miguel Angel",
	regexApellidos:/^([A-ZÁÉÍÓÚÑ][a-zñáéíóú]+[\s]*){2}$/,
	errorApellidos:"Apellidos incorrectos. Ejemplo: López Moyano",
	regexPeso:/^[1-9][0-9]{0,2}$/,
	errorPeso:"Peso incorrecto. Ejemplo: 70",
	regexEmail:/^[a-z0-9]+([\._a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/,
	errorEmail:"Email incorrecto. Ejemplo: usuario@dominio.com",
	errorIdiomas:"Debe seleccionar un idioma",
	regexDni:/(\d{8})([-]?)([A-Z]{1})/,
	errorDni:"DNI incorrecto. Ejemplo: 12345678A",
	regexFecha:/(0?[1-9]|[12][0-9]|3[01])[- \/](0?[1-9]|1[012])[- \/](19|20)\d\d/,
	errorFecha:"Fecha incorrecta. Ejemplo: 10-10-2000",
	regexTelefono:/[6-9]\d{2}[- ]*\d{3}[- ]*\d{3}/,
	errorTelefono:"Teléfono incorrecto. Ejemplo: 957123456",
	regexCuenta:/ES\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|ES\d{22}/,
	errorCuenta:"Cuenta incorrecta. Ejemplo: ES11 2222 3333 4444 5555 6666",
	regexUrl:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
	errorUrl:"URL incorrecta. Ejemplo: https://www.google.es",

	comprobarSiVacio:function(cadena){
		if(cadena.length==0)
			return true;
		return false;
	},

	comprobarRegex:function(regex,cadena){
		return regex.test(cadena);
	},

	validar:function(campoAValidar,cadena){
		if(expresiones.comprobarSiVacio(campoAValidar))
			return "El campo no puede estar vacío";
		switch(cadena){
			case "nombre":
				if(!expresiones.comprobarRegex(expresiones.regexNombre, campoAValidar))
					return expresiones.errorNombre;
				break;
			case "apellidos":
				if(!expresiones.comprobarRegex(expresiones.regexApellidos, campoAValidar))
					return expresiones.errorApellidos;
				break;
			case "peso":
				if(!expresiones.comprobarRegex(expresiones.regexPeso, campoAValidar))
					return expresiones.errorPeso;
				break;
			case "email":
				if(!expresiones.comprobarRegex(expresiones.regexEmail, campoAValidar))
					return expresiones.errorEmail;
				break;
			case "dni":
				if(!expresiones.comprobarRegex(expresiones.regexDni, campoAValidar))
					return expresiones.errorDni;
				break;
			case "fecha":
				if(!expresiones.comprobarRegex(expresiones.regexFecha, campoAValidar))
					return expresiones.errorFecha;
				break;
			case "telefono":
				if(!expresiones.comprobarRegex(expresiones.regexTelefono, campoAValidar))
					return expresiones.errorTelefono;
				break;
			case "cuenta":
				if(!expresiones.comprobarRegex(expresiones.regexCuenta, campoAValidar))
					return expresiones.errorCuenta;
				break;
			case "url":
				if(!expresiones.comprobarRegex(expresiones.regexUrl, campoAValidar))
					return expresiones.errorUrl;
				break;

		}

		return "";
	},

	validarIdiomas:function(array){
		for (let i=0;i<array.length;i++){
        	if (array[i].checked) {
            	return "";
        	}
    	}
	    return expresiones.errorIdiomas;
	}

};
