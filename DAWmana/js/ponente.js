$(function() {
	$.ajax({
      url: "ponentes.php",
      type: "POST",
      //dataType: "json",
      success: function(data) {
      let array=$.parseJSON(data);

      $('#datos dl').append("<dd><img src=\""+array.ponente1.imagen+"\"></dd>"+
      						"<dt>Nombre:</dt>"+
							"<dd>"+array.ponente1.nombre+"</dd>"+
							"<dt>Empresa/organismo de procedencia:</dt>"+
							"<dd>"+array.ponente1.empresa+"</dd>"+
							"<dt>Posibilidad de patrocinio:</dt>"+
							"<dd>"+array.ponente1.patrocinio+"</dd>"+
							"<dt>Rango de días preferibles:</dt>"+
							"<dd>"+array.ponente1.dias+"</dd>"+
							"<dt>Observaciones:</dt>"+
							"<dd>"+array.ponente1.observaciones+"</dd>");
        }

    })

    $.ajax({
      url: "actividades.php",
      type: "POST",
      //dataType: "json",
      success: function(data2) {
      let arrayactividades=$.parseJSON(data2);

      $('#actividades dl').append("<dt>Nombre:</dt>"+
							"<dd>"+arrayactividades.actividad1.titulo+"</dd>"+
							"<dt>Descripción:</dt>"+
							"<dd>"+arrayactividades.actividad1.descripcion+"</dd>"+
							"<dt>URL de la imagen:</dt>"+
							"<dd>http://imagen.png</dd>"+
							"<dt>Material requerido (ponente):</dt>"+
							"<dd>"+arrayactividades.actividad1.material_ponente+"</dd>"+
							"<dt>Material requerido (asistentes):</dt>"+
							"<dd>"+arrayactividades.actividad1.material_alumnos+"</dd>"+
							"<dt>Número de asistentes recomendados:</dt>"+
							"<dd>"+arrayactividades.actividad1.asistentes+"</dd>");
        }
    })

	$('#cookies').hide();

	if (!navigator.cookieEnabled) {
		$('#cookies').show();
	}

	$('#aceptar').on('click', function() {
		$('#cookies').hide();
	});


	$('.perfil').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#perfil').offset().top
		}, 2000);
	});

	$('#tabs').tabs({
		event: "mouseover"
	});

	//Formulario de modificación de datos
	let formMod = $('#form-mod');
	let dialogMod = $('#dialog-mod');
	let msgMod = $('#message-mod');

	$('.modificar').on('click', function() {
		$(dialogMod).dialog('open');
	});

	$(dialogMod).dialog({
		title: 'Modificación de datos',
		autoOpen: false,
		modal: true,
		width: 600,
		buttons: {
			'Enviar': function() {
				if ($(formMod).valid()) {
					$(this).dialog('close');
					$(msgMod).dialog('open');
				}
			},
			'Cancelar': function() {
				$(this).dialog('close');
			}
		}
	});

	$(msgMod).dialog({
		title: 'Modificación de datos',
		autoOpen: false,
		modal: true,
		buttons: {
			'Ok': function() {
				$(this).dialog('close');
			}
		}
	});

	$(formMod).validate({
		debug: true,
		rules: {
			dnombre: {
				required: true,
				texto: true
			},
			dapellidos: {
				required: true,
				texto: true
			},
			empresa: {
				required: true
			},
			fechainicio: {
				required: true
			},
			fechafin: {
				required: true
			}
		},
		messages: {
			dnombre: {
				texto: "El formato del nombre no es válido."
			},
			dapellidos: {
				texto: "El formato de los apellidos no es válido."
			}
		}
	});

	$.validator.addMethod('texto', function(value) {
		return /^([a-záéíóúñA-ZÁÉÍÓÚÑ]{3,}\s*)+$/.test(value.trim());
	});

	//Formulario para añadir actividades
	var formAct = $('#form-act');
	var dialogAct = $('#dialog-act');
	var msgAct = $('#message-act');

	$('.annadir').on('click', function() {
		$(dialogAct).dialog('open');
	});

	$(dialogAct).dialog({
		title: 'Añadir actividad',
		autoOpen: false,
		modal: true,
		width: 600,
		buttons: {
			'Añadir': function() {
				if ($(formAct).valid()) {
					$(this).dialog('close');
					$(msgAct).dialog('open');
				}
			},
			'Cancelar': function() {
				$(this).dialog('close');
			}
		}
	});

	$(msgAct).dialog({
		title: 'Añadir actividad',
		autoOpen: false,
		modal: true,
		buttons: {
			'Ok': function() {
				$(this).dialog('close');
			}
		}
	});

	$(formAct).validate({
		debug: true,
		rules: {
			pnombre: {
				required: true,
				texto: true
			},
			resumen: {
				required: true
			},
			descripcion: {
				required: true
			},
			imagen: {
				required: true,
				url: true
			},
			numero: {
				required: true,
				number: true,
				min: 1
			}
		},
		messages: {
			pnombre: {
				texto: "El formato del nombre no es válido."
			}
		}
	});

	$('#fechainicio').datepicker({
		dateFormat: "dd-mm-yy",
		minDate: new Date(2016, 00, 25),
		maxDate: new Date(2016, 00, 29),
		dayNames: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ],
		dayNamesMin: [ "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ],
		monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
		monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
		showAnim: "drop",
		onClose: function(selectedDate) {
			if (selectedDate) {
				$('#fechafin').datepicker('option', 'disabled', false);
				$('#fechafin').datepicker('option', 'minDate', selectedDate);
			}
		}
	});

	$('#fechafin').datepicker({
		disabled: true,
		dateFormat: "dd-mm-yy",
		minDate: new Date(2016, 00, 25),
		maxDate: new Date(2016, 00, 29),
		dayNames: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ],
		dayNamesMin: [ "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ],
		monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
		monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
		showAnim: "drop",
		onClose: function(selectedDate) {
			if (selectedDate)
				$('#fechainicio').datepicker('option', 'maxDate', selectedDate);
		}
	});
});