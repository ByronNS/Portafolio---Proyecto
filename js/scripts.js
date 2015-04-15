$(document).ready(function(){
		$.ajax({
			type: "GET",
		    url:'js/proyectos.json',
		    data:{},
			dataType: "json",
			success: function(data){
			    listaProductos(data.productos);			  
		    },
			error:function(jqXHR,textStatus, errorThrown){
			    console.log("Text Status:"+textStatus+"\nError:"+errorThrown);
		    }
		});

	function listaProductos(productos){
	   var articulos="";
       for(var i = 0; i < productos.length; i++){
           articulos += "<li class='list-projects-item' id='"+productos[i].Id+"'><img src="+productos[i].img + "/></br><span class='nombre'>Nombre: "+productos[i].nombre+" </span></br></li>";
       };
       $(".list-projects").append("<ul class='list-projects'>"+articulos+"</ul>"); 
    };

    $(".list-projects").on("click","li",function(){
    	var elId=$(this).attr("id");
    	$.ajax({
			type: "GET",
		    url:'js/proyectos.json',
		    data:{},
			dataType: "json",
			success: function(data){
			    detalleProductos(data.productos, elId);			  
		    },
			error:function(jqXHR,textStatus, errorThrown){
			    console.log("Text Status:"+textStatus+"\nError:"+errorThrown);
		    }
		});

    });
    function detalleProductos(productos,elId){
    	var img="";
    	var nombre="";
    	var descripcion="";
    	var url="";
    	for(i=0;i<productos.length;i++){
    		if(elId == productos[i].Id){
    		   img = productos[i].img;
    		   nombre = productos[i].nombre;
    		   descripcion = productos[i].descripcion;
    		   url = productos[i].url;
    		}
    	}
    	$(".description-project").css("display","block").html("<img src='"+img+"'/></br><h2 class='project-title-site'>" + nombre + "</h2><br/><p class='description-project-text'>"+ descripcion + "</p><a class='link-project' href='"+url+"' target='_blank'>Ir al Sitio</a>");
    } 
});  