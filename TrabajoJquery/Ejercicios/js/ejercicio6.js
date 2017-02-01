{
	let lista;
	let $miLista;

	$(document).ready(inicio);

	function inicio(){

    	$miLista=$('#lista');

    	lista="<ul>";

    	for(let i=0;i<10;i++){
    		lista+="<li>"+(i+1)+"</li>";
		}

		lista+="</ul>";

		$miLista.append(lista);
	}
}
