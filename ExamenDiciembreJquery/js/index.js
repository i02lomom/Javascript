{
	let url;
	let $empleado;
	let $deTodo;
	let $botones;
	let $h1;

	$(document).ready(function(){
		$empleado= $("#empleado");
		$deTodo= $("#deTodo");
		$botones= $('#botones');
		$h1= $('h1');

		$empleado.click(function(){
			window.open("empleado.html","Empleado","width=800,height=600,top=0,left=0");
		});

		$deTodo.click(function(){
			window.open("deTodo.html","De todo","width=600,height=400,top=0,left=0");

			localStorage.setItem("htmlDetodo",'<body>'+
					'<noscript>'+
				    	'<p>Esta página requiere ejecutar Javascript. Por favor active la ejecución de scripts.</p>'+
					'</noscript>'+
					'<h1 style="text-align:center;">Miguel Ángel López Moyano</h1>'+
					'<h2 style="text-align:center;">Examen diciembre 2016</h2>'+

					'<div style="text-align:center;" id="botones">'+
						'<p><input type="button" id="informa" value="Informa">'+
						'<input type="button" id="raton" value="Ratón">'+
						'<input type="button" id="salir" value="Salir"></p>'+
					'</div>'+

					'<div style="text-align:center;" id="info">'+

					'</div>'+
				'</body>');
		});

		$botones.slideUp(1000);
		$botones.slideDown(1000);

		for(let n=0;n<10;n++){
			$h1.animate({
				"color": "red"
			}, 1000);

			$h1.animate({
				"color": "blue"
			}, 1000);

			$h1.animate({
				"color": "green"
			}, 1000);

			$h1.animate({
				"color": "black"
			}, 1000);

			$h1.delay(1000);

		}

	});
}