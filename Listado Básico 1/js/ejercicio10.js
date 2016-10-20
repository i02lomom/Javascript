/*	Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre
	escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que
	sea lo más eficiente posibleI

	Autor: Miguel Angel López Moyano */

{
	let numero = prompt("Introduzca un número de 0 a 99: ");

	let comprobarDato = function (numero){
		if(numero<0 || numero>99 || isNaN(numero) || numero.length==0){
			return true;
		}
		return false;
	}

	if(!comprobarDato(numero)){
		let unidades=function(numero){
			switch(numero){
  				case 0:
  					return "CERO";
    			case 1: 
    				return "UNO";
    			case 2: 
    				return "DOS";
    			case 3: 
    				return "TRES";
    			case 4: 
    				return "CUATRO";
    			case 5: 
    				return "CINCO";
    			case 6: 
    				return "SEIS";
    			case 7: 
    				return "SIETE";
    			case 8: 
    				return "OCHO";
    			case 9: 
    				return "NUEVE";
    		}
		}

		let decenasY=function(letras,unidad){
			if(unidad>0){
				return letras + " Y " + unidades(unidad);
			}else{
				return letras;
			}
		}

		let decenas=function(numero){
			var decenas= Math.floor(numero/10);
			var unidad =numero - (decenas*10);

			switch(decenas){
				case 1:
					let decenasEn1=function(unidad){
						switch(unidad){
							case 0: 
								return "DIEZ";
			        		case 1: 
			        			return "ONCE";
			        		case 2: 
			        			return "DOCE";
			        		case 3: 
			        			return "TRECE";
			        		case 4: 
			        			return "CATORCE";
			        		case 5: 
			        			return "QUINCE";
			        		default: 
			        			return "DIECI" + unidades(unidad);
						}
					}
					return decenasEn1(unidad);

				case 2:
					let decenasEn2=function(unidad){
						switch(unidad){
						case 0:
							return "VEINTE";
						default:
							return "VEINTI" + unidades(unidad);
						}
					}
					return decenasEn2(unidad);

				case 3:
					return decenasY("TREINTA", unidad);
				case 4:
					return decenasY("CUARENTA", unidad);
				case 5:
					return decenasY("CINCUENTA", unidad);
				case 6:
					return decenasY("SESENTA", unidad);
				case 7:
					return decenasY("SETENTA", unidad);
				case 8:
					return decenasY("OCHENTA", unidad);
				case 9:
					return decenasY("NOVENTA", unidad);
				case 0:
					return unidades(unidad);
			}
		}

		let fin=decenas(numero);
		console.log(fin);
	}

	else{
		console.log("Se ha introducido algún dato erróneo");
	}
}