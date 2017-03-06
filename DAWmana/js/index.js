{

	let inicio=function(){
		let $cartel = $('#cartel');
		let $cookies = $('#cookies');
		let $aceptar = $('#aceptar');

		$cookies.hide();

		if (!navigator.cookieEnabled) {
			$cookies.show();
		}

		$aceptar.on('click', function() {
			$cookies.hide();
		});

		$cartel.hide();
		$cartel.show({
			effect: "explode",
			duration: 2000
		});
		$cartel.fadeOut(4000);

		window.setTimeout(function() {
			window.location.href = 'home.html';
		}, 5000);
	}
	
	$(document).ready(inicio);
}