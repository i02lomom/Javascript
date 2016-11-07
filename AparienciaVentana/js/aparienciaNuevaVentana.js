{
	let init = function() {
        let ventana=document.getElementById("boton");

        ventana.addEventListener('click', nuevaVentana,false);
    }

    let nuevaVentana=function(){

        let ventana = window.open("","","height=200,width=300,top=0,left=0");
        ventana.document.write("<html>" +
                                        "<head>" +
                                        "<title>Ventana de Prueba</title>" +
                                        "</head>" +
                                        "<body>" +
                                            "<p>Se han usado las siguiente propiedades:</p>" +
                                                "<ul>" +
                                                    "<li>height=200</li>" +     
                                                    "<li>width=300</li>" +
                                                "</ul>" +
                                        "</body>" +
                                    "</html>");
        ventana.document.close();
	}
	window.onload = init;
}