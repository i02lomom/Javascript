{
	let info;
	let evento;
	let cajaEvento;

	let init=function(){
		info=document.getElementById("info");
		cajaEvento=document.getElementById("evento");

		document.addEventListener("mousemove", informacion);
	    document.addEventListener("click", informacion);
	    document.addEventListener("dblclick", informacion);
	    document.addEventListener("mousedown", informacion);
	    document.addEventListener("mouseup", informacion);
	    document.addEventListener("mouseout", informacion);
	    document.addEventListener("mouseover", informacion);
	}

	let muestraInformacion=function(mensaje) {
        info.innerHTML = "<h1>"+mensaje[0]+"</h1>";
        for(let i=1; i<mensaje.length; i++)
            info.innerHTML += "<p>"+mensaje[i]+"</p>"; 
    }

    let informacion=function(elEvento) {
        evento = elEvento || window.event;
        switch(evento.type) {
            case "mousemove":
                let xRelativa, yRelativa, xAbsoluta, yAbsoluta;
                xAbsoluta = evento.pageX;
                yAbsoluta = evento.pageY;
                xRelativa = evento.clientX;
                yRelativa = evento.clientY;
                muestraInformacion(["Ratón", "Navegador [" + xRelativa + ", " + yRelativa +
                    "]", "Pagina [" + xAbsoluta + ", " + yAbsoluta + "]"]);
                break;
            case "click":
                cajaEvento.innerHTML = "<h1>Click</h1>";
                break;
            case "dblclick":
                cajaEvento.innerHTML = "<h1>Doble Click</h1>";
                break;
            case "mousedown":
                cajaEvento.innerHTML = "<h1>Mouse Down</h1>";
                break;
            case "mouseup":
                cajaEvento.innerHTML = "<h1>Mouse Up</h1>";
                break;
            case "mouseout":
                cajaEvento.innerHTML = "<h1>Mouse Out</h1>";
                break;
            case "mouseover":
                cajaEvento.innerHTML = "<h1>Mouse Over</h1>";
                break;
        }
    }

	window.onload=init;
}