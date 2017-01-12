// Autor: MIGUEL ANGEL LOPEZ MOYANO

{
	let inputNombre;
	let errorNombre;
	let inputFecha;
	let errorFecha;
	let inputDni;
	let errorDni;
	let inputCheck;
	let errorCheck;
	let errorFormulario;
	let crear;
	let limpiar;
	let ventana;
	var empleado;

	let comprobarNombre=function(){
		errorNombre.innerHTML=expresiones.validar(inputNombre.value,"nombre");
	}

	let comprobarFecha=function(){
		errorFecha.innerHTML=expresiones.validar(inputFecha.value,"fecha");
	}

	let comprobarDni=function(){
		errorDni.innerHTML=expresiones.validar(inputDni.value,"dni");
	}

	let comprobarCheck=function(){
		if (inputCheck.checked)
            errorCheck.innerHTML = "";
        else
            errorCheck.innerHTML = "Debe aceptar las condiciones";
	}

	let comprobarTodo=function(){
		let bandera=false;

		comprobarNombre();
		comprobarFecha();
		comprobarDni();
		comprobarCheck();

		if(errorNombre.textContent!="" || errorFecha.textContent!="" || errorDni.textContent!="" || errorCheck.textContent!="")
			bandera=true;

		if(bandera)
			errorFormulario.innerHTML="Uno de los campos es incorrecto";
		else{
			empleado=new Empleado(inputNombre.value,inputFecha.value,inputDni.value);
			ventana=window.open("datosEmpleado.html","Datos Empleado","witdh=600,height=400,top=0,left=0");
			limpiarTodo();
		}
	}

	var getEmpleado=function(){
		return empleado;
	}

	let limpiarTodo=function(){
		inputNombre.value="";
		errorNombre.textContent="";
		inputFecha.value="";
		errorFecha.textContent="";
		inputDni.value="";
		errorDni.textContent="";
		errorFormulario.textContent="";
		inputCheck.checked = false;
	}

	let init=function(){
		inputNombre=document.getElementById("inputNombre");
		errorNombre=document.getElementById("errorNombre");
		inputFecha=document.getElementById("inputFecha");
		errorFecha=document.getElementById("errorFecha");
		inputDni=document.getElementById("inputDni");
		errorDni=document.getElementById("errorDni");
		inputCheck=document.getElementById("check");
		errorCheck=document.getElementById("errorCheck");
		errorFormulario=document.getElementById("errorFormulario");
		crear=document.getElementById("crear");
		limpiar=document.getElementById("limpiar");

		inputNombre.addEventListener("blur",comprobarNombre);
		inputFecha.addEventListener("blur",comprobarFecha);
		inputDni.addEventListener("blur",comprobarDni);
		inputCheck.addEventListener("blur",comprobarCheck);

		crear.addEventListener("click",comprobarTodo);
		limpiar.addEventListener("click",limpiarTodo);
	}
	
	window.onload=init;
}