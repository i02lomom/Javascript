$(function() {
	$.ajax({
      url: "actividades.php",
      type: "POST",
      //dataType: "json",
      success: function(data) {
      let array=$.parseJSON(data);

      $('#act1 h3').html(array.actividad1.titulo);
      $('#act1 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad1.ponente+
   		"</td><td>"+array.actividad1.hora+" "+array.actividad1.lugar+"</td><td>"+
   		array.actividad1.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad1.descripcion+"</span>");

      $('#act2 h3').html(array.actividad2.titulo);
      $('#act2 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad2.ponente+
   		"</td><td>"+array.actividad2.hora+" "+array.actividad2.lugar+"</td><td>"+
   		array.actividad2.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad2.descripcion+"</span>");

      $('#act3 h3').html(array.actividad3.titulo);
      $('#act3 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad3.ponente+
   		"</td><td>"+array.actividad3.hora+" "+array.actividad3.lugar+"</td><td>"+
   		array.actividad3.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad3.descripcion+"</span>");

      $('#act4 h3').html(array.actividad4.titulo);
      $('#act4 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad4.ponente+
   		"</td><td>"+array.actividad4.hora+" "+array.actividad4.lugar+"</td><td>"+
   		array.actividad4.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad4.descripcion+"</span>");

      $('#act5 h3').html(array.actividad5.titulo);
      $('#act5 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad5.ponente+
   		"</td><td>"+array.actividad5.hora+" "+array.actividad5.lugar+"</td><td>"+
   		array.actividad5.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad5.descripcion+"</span>");

      $('#act6 h3').html(array.actividad6.titulo);
      $('#act6 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad6.ponente+
   		"</td><td>"+array.actividad6.hora+" "+array.actividad6.lugar+"</td><td>"+
   		array.actividad6.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad6.descripcion+"</span>");

      $('#act7 h3').html(array.actividad7.titulo);
      $('#act7 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad7.ponente+
   		"</td><td>"+array.actividad7.hora+" "+array.actividad7.lugar+"</td><td>"+
   		array.actividad7.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad7.descripcion+"</span>");

      $('#act8 h3').html(array.actividad8.titulo);
      $('#act8 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad8.ponente+
   		"</td><td>"+array.actividad8.hora+" "+array.actividad8.lugar+"</td><td>"+
   		array.actividad8.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad8.descripcion+"</span>");

      $('#act9 h3').html(array.actividad9.titulo);
      $('#act9 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad9.ponente+
   		"</td><td>"+array.actividad9.hora+" "+array.actividad9.lugar+"</td><td>"+
   		array.actividad9.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad9.descripcion+"</span>");

      $('#act10 h3').html(array.actividad10.titulo);
      $('#act10 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad10.ponente+
   		"</td><td>"+array.actividad10.hora+" "+array.actividad10.lugar+"</td><td>"+
   		array.actividad10.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad10.descripcion+"</span>");

      $('#act11 h3').html(array.actividad11.titulo);
      $('#act11 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad11.ponente+
   		"</td><td>"+array.actividad11.hora+" "+array.actividad11.lugar+"</td><td>"+
   		array.actividad11.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad11.descripcion+"</span>");

      $('#act12 h3').html(array.actividad12.titulo);
      $('#act12 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad12.ponente+
   		"</td><td>"+array.actividad12.hora+" "+array.actividad12.lugar+"</td><td>"+
   		array.actividad12.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad12.descripcion+"</span>");

      $('#act13 h3').html(array.actividad13.titulo);
      $('#act13 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad13.ponente+
   		"</td><td>"+array.actividad13.hora+" "+array.actividad13.lugar+"</td><td>"+
   		array.actividad13.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad13.descripcion+"</span>");

      $('#act14 h3').html(array.actividad14.titulo);
      $('#act14 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad14.ponente+
   		"</td><td>"+array.actividad14.hora+" "+array.actividad14.lugar+"</td><td>"+
   		array.actividad14.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad14.descripcion+"</span>");

      $('#act15 h3').html(array.actividad15.titulo);
      $('#act15 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad15.ponente+
   		"</td><td>"+array.actividad15.hora+" "+array.actividad15.lugar+"</td><td>"+
   		array.actividad15.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad15.descripcion+"</span>");

      $('#act16 h3').html(array.actividad16.titulo);
      $('#act16 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad16.ponente+
   		"</td><td>"+array.actividad16.hora+" "+array.actividad16.lugar+"</td><td>"+
   		array.actividad16.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad16.descripcion+"</span>");

      $('#act17 h3').html(array.actividad17.titulo);
      $('#act17 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad17.ponente+
   		"</td><td>"+array.actividad17.hora+" "+array.actividad17.lugar+"</td><td>"+
   		array.actividad17.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad17.descripcion+"</span>");

      $('#act18 h3').html(array.actividad18.titulo);
      $('#act18 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad18.ponente+
   		"</td><td>"+array.actividad18.hora+" "+array.actividad18.lugar+"</td><td>"+
   		array.actividad18.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad18.descripcion+"</span>");

      $('#act19 h3').html(array.actividad19.titulo);
      $('#act19 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad19.ponente+
   		"</td><td>"+array.actividad19.hora+" "+array.actividad19.lugar+"</td><td>"+
   		array.actividad19.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad19.descripcion+"</span>");

      $('#act20 h3').html(array.actividad20.titulo);
      $('#act20 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad20.ponente+
   		"</td><td>"+array.actividad20.hora+" "+array.actividad20.lugar+"</td><td>"+
   		array.actividad20.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad20.descripcion+"</span>");

      $('#act21 h3').html(array.actividad21.titulo);
      $('#act21 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad21.ponente+
   		"</td><td>"+array.actividad21.hora+" "+array.actividad21.lugar+"</td><td>"+
   		array.actividad21.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad21.descripcion+"</span>");

      $('#act22 h3').html(array.actividad22.titulo);
      $('#act22 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad22.ponente+
   		"</td><td>"+array.actividad22.hora+" "+array.actividad22.lugar+"</td><td>"+
   		array.actividad22.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad22.descripcion+"</span>");

      $('#act23 h3').html(array.actividad23.titulo);
      $('#act23 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad23.ponente+
   		"</td><td>"+array.actividad23.hora+" "+array.actividad23.lugar+"</td><td>"+
   		array.actividad23.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad23.descripcion+"</span>");

      $('#act24 h3').html(array.actividad24.titulo);
      $('#act24 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad24.ponente+
   		"</td><td>"+array.actividad24.hora+" "+array.actividad24.lugar+"</td><td>"+
   		array.actividad24.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad24.descripcion+"</span>");

      $('#act25 h3').html(array.actividad25.titulo);
      $('#act25 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad25.ponente+
   		"</td><td>"+array.actividad25.hora+" "+array.actividad25.lugar+"</td><td>"+
   		array.actividad25.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad25.descripcion+"</span>");

      $('#act26 h3').html(array.actividad26.titulo);
      $('#act26 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad26.ponente+
   		"</td><td>"+array.actividad26.hora+" "+array.actividad26.lugar+"</td><td>"+
   		array.actividad26.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad26.descripcion+"</span>");

      $('#act27 h3').html(array.actividad27.titulo);
      $('#act27 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad27.ponente+
   		"</td><td>"+array.actividad27.hora+" "+array.actividad27.lugar+"</td><td>"+
   		array.actividad27.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad27.descripcion+"</span>");

      $('#act28 h3').html(array.actividad28.titulo);
      $('#act28 div').html("<table><tr><td><strong>Ponente: </strong></td>"+
      	"<td><strong>Hora/Lugar: </strong>"+
      	"</td><td>"+"<strong>Asistentes:</strong></td>"+
   		"</tr><tr><td>"+array.actividad28.ponente+
   		"</td><td>"+array.actividad28.hora+" "+array.actividad28.lugar+"</td><td>"+
   		array.actividad28.asistentes+"</td></tr></table><br></br>"+
   		"<strong>Descripción: </strong><span>"+array.actividad28.descripcion+"</span>");
      },
   })

    $.ajax({
        url: "ponentes.php",
        type: "POST",
        //dataType: "json",
        success: function(data2) {
        let arrayponentes=$.parseJSON(data2);

        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente1.info+"\">"+arrayponentes.ponente1.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente2.info+"\">"+arrayponentes.ponente2.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente3.info+"\">"+arrayponentes.ponente3.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente4.info+"\">"+arrayponentes.ponente4.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente5.info+"\">"+arrayponentes.ponente5.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente6.info+"\">"+arrayponentes.ponente6.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente7.info+"\">"+arrayponentes.ponente7.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente8.info+"\">"+arrayponentes.ponente8.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente9.info+"\">"+arrayponentes.ponente9.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente10.info+"\">"+arrayponentes.ponente10.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente11.info+"\">"+arrayponentes.ponente11.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente12.info+"\">"+arrayponentes.ponente12.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente13.info+"\">"+arrayponentes.ponente13.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente14.info+"\">"+arrayponentes.ponente14.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente15.info+"\">"+arrayponentes.ponente15.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente16.info+"\">"+arrayponentes.ponente16.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente17.info+"\">"+arrayponentes.ponente17.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente18.info+"\">"+arrayponentes.ponente18.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente19.info+"\">"+arrayponentes.ponente19.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente20.info+"\">"+arrayponentes.ponente20.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente21.info+"\">"+arrayponentes.ponente21.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente22.info+"\">"+arrayponentes.ponente22.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente23.info+"\">"+arrayponentes.ponente23.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente24.info+"\">"+arrayponentes.ponente24.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente25.info+"\">"+arrayponentes.ponente25.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente26.info+"\">"+arrayponentes.ponente26.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente27.info+"\">"+arrayponentes.ponente27.nombre+
            "</a></li>");
        $('#listado ul').append("<li><a href=\""+arrayponentes.ponente28.info+"\">"+arrayponentes.ponente28.nombre+
            "</a></li>");
        },


    })

    $.ajax({
        url: "concurso.php",
        type: "POST",
        //dataType: "json",
        success: function(data3) {
        let arrayconcurso=$.parseJSON(data3);

        $('#descripcion_concurso').append("<p>"+arrayconcurso.concurso.descripcion+"</p>");
        $('#descripcion_concurso').append("<p>"+arrayconcurso.concurso.ultimoparrafo+"<a href=\""+arrayconcurso.concurso.url+"\">Concurso Twitter</a></p>");

        $('#clasificacion_concurso table').append("<tr><th style=\"text-align: center; padding-bottom: 0.5em;\">Posición</th><th style=\"text-align: center; padding-bottom: 0.5em;\">Concursante</th></tr>"+
            "<tr><td style=\"text-align: center; \">1º</td><td><a href=\"https://twitter.com/jponferrada26\" target=\"_blank\">"+arrayconcurso.clasificacion.primero+"</a></td></tr>"+
            "<tr><td style=\"text-align: center;\">2º</td><td><a href=\"https://twitter.com/PabloLeonPsi\" target=\"_blank\">"+arrayconcurso.clasificacion.segundo+"</a></td></tr>"+
            "<tr><td style=\"text-align: center;\">3º</td><td><a href=\"https://twitter.com/JuanRuMor\" target=\"_blank\">"+arrayconcurso.clasificacion.tercero+"</a></td></tr>"+
            "<tr><td style=\"text-align: center;\">4º</td><td><a href=\"https://twitter.com/Noloam\" target=\"_blank\">"+arrayconcurso.clasificacion.cuarto+"</a></td></tr>"+
            "<tr><td style=\"text-align: center;\">5º</td><td><a href=\"https://twitter.com/Vsevillanoo\" target=\"_blank\">"+arrayconcurso.clasificacion.quinto+"</a></td></tr>"+
            "<tr><td style=\"text-align: center;\">6º</td><td><a href=\"https://twitter.com/miguel5gavilan\" target=\"_blank\">"+arrayconcurso.clasificacion.sexto+"</a></td></tr>"+
            "<tr><td style=\"text-align: center;\">7º</td><td><a href=\"https://twitter.com/neogeo39\" target=\"_blank\">"+arrayconcurso.clasificacion.septimo+"</a></td></tr>");
        },


    })

	//Comprobación de cookies
	$('#cookies').hide();

	if (!navigator.cookieEnabled) {
		$('#cookies').show();
	}

	$('#aceptar').on('click', function() {
		$('#cookies').hide();
	});

	//Scroll de los enlaces
	$(window).scroll(function(){
		if ($(this).scrollTop() > 400)
			$('.arriba').fadeIn(1000);
		else 
			$('.arriba').fadeOut(1000);
	});

	$('.arriba').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 2000);
	});

	$('.actividades').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#actividades').offset().top
		}, 2000);
	});

	$('.ponentes').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#ponentes').offset().top
		}, 2000);
	});

	$('.concursos').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#concursos').offset().top
		}, 2000);
	});

	$('.eventos').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#eventos').offset().top
		}, 2000);
	});

	$('#act1, #act2, #act3, #act4, #act5, #act6, #act7, #act8, #act9, #act10, #act11, #act12, #act13, #act14, '+
		'#act15, #act16, #act17, #act18, #act19, #act20, #act21, #act22, #act23, #act24, #act25, #act26, #act27, #act28').accordion({
		collapsible: true,
		heightStyle: 'content',
		active: false
	});

	//Utilización del carrusel
	$('.img-ponentes').pgwSlideshow({
		autoSlide: true,
		intervalDuration: 5000,
		mainClassName: 'pgwSlideshowLight'
	});

	//Utilización del lightbox
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'showImageNumberLabel': false,
		'positionFromTop': 120,
		'disableScrolling': true
	});

	//Utilización del carrusel
	$('.img-carteles').pgwSlideshow({
		autoSlide: true,
		intervalDuration: 5000,
		mainClassName: 'pgwSlideshowLight',
		transitionEffect: 'fading'
	});

	//Formulario de login
	let formLogin = $('#form-login');
	let dialogLogin = $('#dialog-login');

	$('.login').on('click', function(evento) {
		evento.preventDefault();
		$(dialogLogin).dialog('open');
	});

	$(dialogLogin).dialog({
		title: 'Acceso de usuarios',
		autoOpen: false,
		modal: true,
		width: 300,
		buttons: {
			'Iniciar sesión': function() {
				if ($(formLogin).valid()) {
					$(this).dialog('close');
					window.location.href = 'ponente.html';
				}
			},
			'Cancelar': function() {
				$(this).dialog('close');
			}
		}
	});

	$(formLogin).validate({
		debug: true,
		rules: {
			usuario: {
				required: true,
				minlength: 6,
				usuario: true
			},
			password: {
				required: true,
				minlength: 6,
				password: true
			}
		},
		messages: {
			usuario: {
				usuario: "El usuario no puede contener espacios."
			},
			password: {
				password: "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter de puntuación."
			}
		}
	});

	$.validator.addMethod('usuario', function(value) {
		return /^[\w]+$/.test(value.trim());
	});

	$.validator.addMethod('password', function(value) {
		return /^[A-Za-z0-9\d\W]*$/.test(value.trim())
			&& /[A-Z]/.test(value.trim())
			&& /[a-z]/.test(value.trim())
			&& /[\d]/.test(value.trim())
			&& /[\W]/.test(value.trim());
	});

	//Formulario de registro
	let formRegistro = $('#form-registro');
	let dialogRegistro = $('#dialog-registro');
	let msgReg = $('#dialog-message');

	$('.registro').on('click', function(evento) {
		evento.preventDefault();
		$(dialogRegistro).dialog('open');
	});

	$(dialogRegistro).dialog({
		title: 'Registro de asistentes',
		autoOpen: false,
		modal: true,
		width: 300,
		buttons: {
			'Enviar': function() {
				if ($(formRegistro).valid()) {
					$(this).dialog('close');
					$(msgReg).dialog('open');
				}
			},
			'Cancelar': function() {
				$(this).dialog('close');
			}
		}
	});

	$(msgReg).dialog({
		title: 'Registro de asistentes',
		autoOpen: false,
		modal: true,
		buttons: {
			'Ok': function() {
				$(this).dialog('close');
			}
		}
	});

	$(formRegistro).validate({
		debug: true,
		rules: {
			nombre: {
				required: true,
				texto: true
			},
			apellidos: {
				required: true,
				texto: true
			},
			dni: {
				required: true,
				dni: true
			},
			email: {
				required: true,
				email: true
			},
			procedencia: {
				required: true,
				texto: true
			}
		},
		messages: {
			nombre: {
				texto: "El formato del nombre no es válido."
			},
			apellidos: {
				texto: "El formato del apellido no es válido."
			},
			dni: {
				dni: "El formato del DNI no es válido."
			},
			procedencia: {
				texto: "El formato de la procedencia no es válido."
			}
		}
	});

	$.validator.addMethod('dni', function(value) {
		return /^\d{8}[-]?[a-zA-Z]$/.test(value.trim());
	});

	$.validator.addMethod('texto', function(value) {
		return /^([a-záéíóúñA-ZÁÉÍÓÚÑ]{3,}\s*)+$/.test(value.trim());
	});
});



