{
	let $inputNombre;
	let $inputFecha;
	let $inputDni;
	let empleado;

	$(document).ready(function(){
		$inputNombre=$('#inputNombre');
		$inputFecha=$('#inputFecha');
		$inputDni=$('#inputDni');

		$('#formulario p').addClass('has-error');

		$.validate({
  			lang : 'es',
  			modules : 'date'
		});

		$('#formulario input').on('keyup blur click', function(){
			if($('#formulario p').hasClass('has-error')){
				$('#crear').prop('disabled','disabled');
			}
			else{
				$('#crear').prop('disabled',false);
			}
		});

		$('#crear').click(function(){
			empleado=new Empleado($inputNombre.val(),$inputFecha.val(),$inputDni.val());
			empleado.nuevaVentana();
			location.reload();
		});

	});
}