/* Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
 * Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). 
 * Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que 
 * cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). 
 * El usuario podrá averiguar la edad del gato partiendo de un evento.
 */
 {
	var gato;
	var estado=["Jugando","Durmiendo","Comiendo","Muerto"];

	let Gato=function(nombre,fechaNacimiento,raza,peso){
		this.nombre=nombre;
		this.fechaNacimiento=fechaNacimiento;
		this.raza=raza;
		this.peso=peso;
		this.estado=estado[0];
		this.animo=5;
	}

	Gato.prototype.calcularEdad=function(){

	}

	Gato.prototype.setEstado=function(estado){
		this.estado=estado;
	}

	Gato.prototype.comprobarEstado=function(){
		if(this.peso<=1)
			this.setEstado(estado[3]);
		if(this.peso>=15)
			this.setEstado(estado[3]);
		if(this.animo<=0)
			this.setEstado(estado[3]);

	}

	Gato.prototype.comer=function(){
		this.setEstado(estado[2]);
		this.peso++;
		this.animo++;
	}

	Gato.prototype.jugar=function(){
		this.setEstado(estado[0]);
		this.peso--;
		this.animo++;
	}

	Gato.prototype.dormir=function(){
		this.setEstado(estado[1]);
		this.animo--;
	}

	let nuevoGato=function(){
		if(peso.value<=1 || peso.value>15)
			error.innerHTML="Error. Peso incorrecto";
		else{
			error.innerHTML="";
			gato=new Gato(nombre.value,fechaNac.value,raza.value,peso.value);
			let ventana = window.open("lindoGatito.html","","height=600,width=510,top=0,left=0");
		}
	}

	var getGato=function(){
		return gato;
	}

	let init=function(){
		let nombre = document.getElementById("nombre");
		let fechaNac=document.getElementById("fechaNac");
		let peso=document.getElementById("peso");
		let raza=document.getElementById("raza");
        let crearGato = document.getElementById("crearGato");
        let error = document.getElementById("error");

		
        crearGato.addEventListener("click", nuevoGato);
	}
	window.onload=init;

}