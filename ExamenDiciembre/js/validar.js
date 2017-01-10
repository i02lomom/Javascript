// Autor: MIGUEL ANGEL LOPEZ MOYANO

let expresiones= {
	regexNombre: /^([A-ZÁÉÍÓÚÑ][a-zñáéíóú]+[\s]*)+$/,
	errorNombre: "Nombre no válido",
	regexApellidos: /^([A-ZÁÉÍÓÚÑ][a-zñáéíóú]+[\s]*){2}$/,
	errorApellidos: "Apellidos no válidos",
	regexFecha: /(0?[1-9]|[12][0-9]|3[01])[- \/](0?[1-9]|1[012])[- \/](19|20)\d\d/,
	errorFecha: "Fecha no válida",
	regexDni: /(\d{8})([-]?)([A-Z]{1})/,
	errorDni: "DNI no válido",
	errorLetraDni: "Letra DNI no válida",
	arrayLetras: ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"],
	
	comprobarSiVacio:function(campo){
		if(campo=="")
			return true;
		return false;
	},

	comprobarLetraDni:function(dni){
		let numeroDni = dni.substr(0, 8);
    	let letraDni = dni.substr(8, 1);
    	letraDni = letraDni.toUpperCase();
    	if (expresiones.arrayLetras[numeroDni % 23] != letraDni)
        	return false;
    	return true;
	},

	comprobarRegex:function(regex,cadena){
		return regex.test(cadena);
	},

	validar:function(campo,cadena){
		if(expresiones.comprobarSiVacio(campo))
			return "Campo vacío";

		else{
			switch(cadena){
				case "nombre":
					if(!expresiones.comprobarRegex(expresiones.regexNombre,campo))
						return expresiones.errorNombre;
					break;
				case "apellidos":
					if(!expresiones.comprobarRegex(expresiones.regexApellidos,campo))
						return expresiones.errorApellidos;
					break;
				case "fecha":
					if(!expresiones.comprobarRegex(expresiones.regexFecha,campo))
						return expresiones.errorFecha;
					break;
				case "dni":
					if(!expresiones.comprobarRegex(expresiones.regexDni,campo))
						return expresiones.errorDni;
					if(!expresiones.comprobarLetraDni(campo))
						return expresiones.errorLetraDni;
					break;
			}
		}
		return "";
	}
};