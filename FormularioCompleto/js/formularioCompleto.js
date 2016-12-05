{
	let inputNombre;
	let errorNombre;
	let inputApellidos;
	let errorApellidos;
	let inputIdiomas;
	let inputIdiomaCastellano;
	let inputIdiomaIngles;
	let inputIdiomaAleman;
	let inputIdiomaFrances;
	let errorIdiomas;
	let inputPeso;
	let errorPeso;
	let inputMail;
	let errorMail;
	let inputDni;
	let errorDni;
	let inputFecha;
	let errorFecha;
	let inputTelefono;
	let errorTelefono;
	let inputCuenta;
	let errorCuenta;
	let inputUrl;
	let errorUrl;
	let submit;
	let formularioOk;

	let init=function(){
		inputNombre = document.getElementById("nombre");
		errorNombre = document.getElementById("errorNombre");
		inputApellidos = document.getElementById("apellidos");
		errorApellidos= document.getElementById("errorApellidos");
		inputIdiomas = document.getElementsByClassName("idiomas");
		inputIdiomaCastellano = document.getElementById("castellano");
		inputIdiomaIngles = document.getElementById("ingles");
		inputIdiomaAleman = document.getElementById("aleman");
		inputIdiomaFrances = document.getElementById("frances");
		errorIdiomas= document.getElementById("errorIdioma");
		inputPeso = document.getElementById("peso");
		errorPeso = document.getElementById("errorPeso");
		inputMail = document.getElementById("email");
		errorMail = document.getElementById("errorEmail");
		inputDni = document.getElementById("dni");
		errorDni = document.getElementById("errorDni");
		inputFecha = document.getElementById("fechaNac");
		errorFecha = document.getElementById("errorFechaNac");
		inputTelefono = document.getElementById("telefono");
		errorTelefono = document.getElementById("errorTelefono");
		inputCuenta = document.getElementById("cuenta");
		errorCuenta = document.getElementById("errorCuenta");
		inputUrl = document.getElementById("url");
		errorUrl = document.getElementById("errorUrl");
		submit = document.getElementById("submit");
		formularioOk = document.getElementById("formularioOk");
		
		inputNombre.addEventListener("blur", comprobarNombre);
		inputApellidos.addEventListener("blur", comprobarApellidos);
		inputIdiomaCastellano.addEventListener("blur", comprobarIdiomas);
		inputIdiomaIngles.addEventListener("blur", comprobarIdiomas);
		inputIdiomaAleman.addEventListener("blur", comprobarIdiomas);
		inputIdiomaFrances.addEventListener("blur", comprobarIdiomas);
		inputPeso.addEventListener("blur", comprobarPeso);
		inputMail.addEventListener("blur", comprobarMail);
		inputDni.addEventListener("blur", comprobarDni);
		inputFecha.addEventListener("blur", comprobarFecha);
		inputTelefono.addEventListener("blur", comprobarTelefono);
		inputCuenta.addEventListener("blur", comprobarCuenta);
		inputUrl.addEventListener("blur", comprobarUrl);
		submit.addEventListener("click", comprobarTodo);
	}

	let comprobarNombre=function(){
		errorNombre.innerHTML=expresiones.validar(inputNombre.value,"nombre");
	}

	let comprobarApellidos=function(){
		errorApellidos.innerHTML=expresiones.validar(inputApellidos.value,"apellidos");
	}

	let comprobarIdiomas=function(){
		errorIdiomas.innerHTML=expresiones.validarIdiomas(inputIdiomas);
	}

	let comprobarPeso=function(){
		errorPeso.innerHTML=expresiones.validar(inputPeso.value,"peso");
	}

	let comprobarMail=function(){
		errorMail.innerHTML=expresiones.validar(inputMail.value,"email");
	}

	let comprobarDni=function(){
		errorDni.innerHTML=expresiones.validar(inputDni.value,"dni");
	}

	let comprobarFecha=function(){
		errorFecha.innerHTML=expresiones.validar(inputFecha.value,"fecha");
	}

	let comprobarTelefono=function(){
		errorTelefono.innerHTML=expresiones.validar(inputTelefono.value,"telefono");
	}

	let comprobarCuenta=function(){
		errorCuenta.innerHTML=expresiones.validar(inputCuenta.value,"cuenta");
	}

	let comprobarUrl=function(){
		errorUrl.innerHTML=expresiones.validar(inputUrl.value,"url");
	}

	let comprobarTodo=function(){
		let focus=undefined;

		comprobarNombre();
		comprobarApellidos();
		comprobarIdiomas();
		comprobarPeso();
		comprobarMail();
		comprobarDni();
		comprobarFecha();
		comprobarTelefono();
		comprobarCuenta();
		comprobarUrl();

		if(errorUrl.textContent!="")
			focus = inputUrl;
		if(errorCuenta.textContent!="")
			focus = inputCuenta;
		if(errorTelefono.textContent!="")
			focus = inputTelefono;
		if(errorFecha.textContent!="")
			focus = inputFecha;
		if(errorDni.textContent!="")
			focus = inputDni;
		if(errorMail.textContent!="")
			focus = inputMail;
		if(errorPeso.textContent!="")
			focus = inputPeso;
		if(errorIdiomas.textContent!="")
			focus = inputIdiomaCastellano;
		if(errorApellidos.textContent!="")
			focus = inputApellidos;
		if(errorNombre.textContent!="")
			focus = inputNombre;

		if(focus===undefined)
			formularioOk.innerHTML="Formulario correcto";
		else{
			formularioOk.innerHTML="Formulario incorrecto";
			focus.focus();
		}
	}

	window.onload=init;
}