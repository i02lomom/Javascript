{
	function anade() {
		let elemento = document.createElement("li");
		let texto = document.createTextNode("Elemento de prueba");
		elemento.appendChild(texto);
		let lista = document.getElementById("lista");
		lista.appendChild(elemento);
		let nuevoElemento = "<li>Texto de prueba</li>";
		lista.innerHTML = lista.innerHTML + nuevoElemento;
	}
}