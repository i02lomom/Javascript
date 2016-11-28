{
	let gato;

	let mostrarDatos=function(){
		let datos=document.getElementById("informacion").innerHTML = "<ul>"+
																		"<li>Nombre: "+gato.nombre+"</li>"+
																		"<li>Fecha de nacimiento: "+gato.fechaNacimiento+"</li>"+
																		"<li>Peso: "+gato.peso+" Kg</li>"+
																		"<li>Raza: "+gato.raza+"</li>"+
																		"<li>Estado: "+gato.estado+"</li>"+
																		"<li>Animo: "+gato.animo+"</li>"+
																		"</ul>";
	}

	let darDeComer=function(){
		gato.comer();
		gato.comprobarEstado();
		mostrarDatos();	
		foto.innerHTML="<img src=\"img/comiendo.jpg\">";
		if(gato.estado=="Muerto")
			desactivarBotones();
	}

	let dormirAlGato=function(){
		gato.dormir();
		gato.comprobarEstado();
		mostrarDatos();	
		foto.innerHTML="<img src=\"img/durmiendo.jpeg\">";
		if(gato.estado=="Muerto")
			desactivarBotones();
	}

	let jugarConGato=function(){
		gato.jugar();
		gato.comprobarEstado();
		mostrarDatos();	
		foto.innerHTML="<img src=\"img/jugando.jpg\">";
		if(gato.estado=="Muerto")
			desactivarBotones();
	}

	let desactivarBotones=function(){
		comer.disabled = true;
		dormir.disabled = true;
		jugar.disabled = true;
		foto.innerHTML="<img src=\"img/muerto.jpg\">";
	}

	let init=function(){
		gato=window.opener.getGato();
		mostrarDatos();

        let comer = document.getElementById("comer");
        let dormir = document.getElementById("dormir");
        let jugar = document.getElementById("jugar");
        let foto = document.getElementById("foto");

        comer.addEventListener("click", darDeComer);
        dormir.addEventListener("click", dormirAlGato);
        jugar.addEventListener("click", jugarConGato);

	}

	window.onload=init;
}