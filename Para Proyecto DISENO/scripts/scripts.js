
var dicc = [];
dicc[0]= "Manzana"
dicc[1]= "Pera"
dicc[2]= "Melocoton"
dicc[4]= "Fresa"
dicc[5]= "Kiwi"
dicc[3]= "Jocote"
dicc[6]= "Nance"
dicc[7]= "Ciruela"
dicc[8]= "Cereza"
dicc[9]= "Sandia"
dicc[10]= "Tamarindo"

/*Escoger opcion aleatoriamente
/*utilizar func Rand para generar un numero de 0-5, los mismos
numeros que tiene el arreglo por posiciones
/*Si utilizamos */
 var indice_escogida = Math.floor(Math.random())*5;
 var palabra_ahorcado = dicc[indice_escogida];
 console.log(palabra_ahorcado);

 var palabra_separada = palabra_ahorcado.split("");
 console.log(palabra_separada);

for(i = 0; i < palabra_separada.length; i++){
	document.getElementById('ahor').innerHTML += "<div id="+i+" class='caja_ahorcado'>" + palabra_separada[i] + "</div>";
}

function validar(letra){
	var XXX = 1;
	var XX = 6;
	var X= "";
	for(i = 0; i < palabra_separada.length; i++){
		if(letra == palabra_separada[i]){
		   document.getElementById(i).className = "caja_ahorcado_2";
		}
	}
}