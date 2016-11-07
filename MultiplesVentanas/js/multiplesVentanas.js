{
	let init = function() {
        let ventana=document.getElementById("boton");

        ventana.addEventListener('click', multiplesVentanas,false);
    }

    let multiplesVentanas=function(){
        for (let i = 0; i < 5; i++) {
            let ventana = window.open("","","height=200,width=300,top=0,left=0");
            ventana.document.write("<html>" +
                                            "<head>" +
                                             "<title>Ventana"+i+"</title>" +
                                            "</head>" +
                                            "<body> Ventana"+i+"</body>" +
                                        "</html>");
            ventana.document.close();
        }
	}
	window.onload = init;
}