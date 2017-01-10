// Autor: MIGUEL ANGEL LOPEZ MOYANO

{
	let empleado;
	let deTodo;

	let ejEmpleado=function(){
		window.open("empleado.html","Empleado","width=600,height=400,top=0,left=0");
	}

	let ejDeTodo=function(){
		window.open("deTodo.html","De todo","width=600,height=400,top=0,left=0");
	}

	let init=function(){
		empleado=document.getElementById("empleado");
		deTodo=document.getElementById("deTodo");

		empleado.addEventListener("click",ejEmpleado);
		deTodo.addEventListener("click",ejDeTodo);
	}


	window.onload=init;
}