var appBriefCase={};
//Crear una funcion donde almacene el llamado Ajax junto con el Json.
appBriefCase.ajaxProjects=function(){
//En esta sección crearemos una variable donde pueda mostrar mi documento de proyecto Json, donde haremos que 
//el evento onreadystatechange se dispare cada vez que cambia el readyState.
//responseText va hacer donde tendremos la respuesta del servidor.
//
//La propiedad readyState mantiene el estado de la XMLHttpRequest.
var listProjects =new XMLHttpRequest();
listProjects.onreadystatechange = function(){
  if (listProjects.readyState === 4 &&  listProjects.status == 200){
     var document_json = JSON.parse(listProjects.responseText);
         appBriefCase.mostrarProyectos(document_json.proyectos);
  }
}
//Uilizando la variable le decimos las acciones que tinen que realizar al llamar el Json.
listProjects.open("GET", "js/proyectos.json", true);
listProjects.send();
}();
//Habiendo hecho el Ajax, creamos una funcion donde mostraremos la lista de proyectos que ya esta dentro del json, solo que le damos 
//diferentes clases para el estilo, y lo abrimos en el navegador con document.getElementById().innerHTML.
appBriefCase.mostrarProyectos=function(proyectos){
	var list_projects = "";
	for(var i = 0; i < proyectos.length; i++){
		list_projects += "<li onclick='appBriefCase.ajaxProjectSelected("+proyectos[i].Id+")' class='list-projects-item' ><img src="+proyectos[i].img + "/></br><span class='nombre'>Nombre: "+proyectos[i].nombre+" </span></br></li>";
	};
	document.getElementById("projects").innerHTML="<ul class='list-projects'>"+list_projects+"</ul>";
};

appBriefCase.ajaxProjectSelected=function(Id){
// Hacemos un siguiente llamado de la function ajax para mostrar en otra seccion los detalles de cada proyecto, al agregar
//en la funcion de arriba un onclick, puedo ir de posicion en posicion de cada proyecto viendo su respectiva información.
//Utilizo las mismas propiedades que anteriormente use, pero además agrego className que sirve para devolver el nombre de la clase de un elemento.
var deatilsProjects =new XMLHttpRequest();
deatilsProjects.onreadystatechange = function(){
  if (deatilsProjects.readyState === 4 &&  deatilsProjects.status == 200){
     var array_json = JSON.parse(deatilsProjects.responseText);
         appBriefCase.detalleProyectos(array_json.proyectos,Id);
  }
}
deatilsProjects.open("GET", "js/proyectos.json", true);
deatilsProjects.send();
};
//En esta funcion es donde se va a almacenar el llamado de las imagenes, descripcion y la url de cada proyecto.
//Es muy importante el uso de los paramatros porque sera una forma de controlar la función.
appBriefCase.detalleProyectos=function(array_json, Id){
	    var detalle_proyecto="";
	    document.getElementById("project-information").className="container";
    	for(i=0;i<array_json.length;i++){
    	if(Id == array_json[i].Id){
    	   detalle_proyecto= "<img src='"+array_json[i].img+"'/></br><h2 class='project-title-site'>" + array_json[i].nombre + "</h2><br/><p class='description-project-text'>"+ array_json[i].descripcion + "</p><a class='link-project' href='"+array_json[i].url+"' target='_blank'>Ir al Sitio</a>"
    	}
        }
	document.getElementById("project-information").innerHTML=detalle_proyecto;
};

