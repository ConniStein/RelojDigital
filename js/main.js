function mostrarHora(){
	var hora = new Date();
	var h = hora.getHours();
	var m = hora.getMinutes();
	document.getElementById("horayminuto").innerHTML = h + " : " + m;
	var laHora = setTimeout(mostrarHora, 600);
}

mostrarHora();

function mostrarFecha(){
	var fecha = new Date();
	var ds = diaDeLaSemana[fecha.getDay()]
	var dia = fecha.getDate();
	var mes = mesDelAño[fecha.getMonth()]
	var año = fecha.getFullYear();
	document.getElementById("fechacompleta").innerHTML = ds + " , " + dia + " de " + mes + " , " + año;
}

var diaDeLaSemana = ["Domingo", "Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

var mesDelAño = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"];

mostrarFecha();


$("#verzonahoraria").click(function(){
	$(".caja-zonahoraria").html("<div class='zonas-horarias'>hola hola hola</div>");
});



