///////////arrays /////////////
var reserva = []; //datos total de reserva
var origen = new Array(); //toma cada dato del form

///////////Metodos y clases//////////
//instancias y clases();
function cliente() {
var report = new Array();
var datos = new Object();
//metodos de las clases
var x = document.contact_form;
datos.nombre = x.nom1.value;
datos.cantidad = x.tot.value;
datos.tel = x.tel1.value;
datos.correo = x.email1.value;

//agregar datos a aun array
push.report(datos.nombre);
push.report(datos.tel);
push.report(datos.correo);
push.report(datos.cantidad);

//mandamos el array con datos
mark(report());
}

function mark(e) {
    var fin_report = [];
    fin_report = e;

////////Definicion de propiedades///////////
var reservacion = function (info) {
        //Definiendo propiedades
        this.hora = usuario.direc;
        this.fecha = datos.total;

        var informe = new Array(this.hora, this.fecha);
        registrar(informe()); //mandado datods
    }
}

if(window.addEventListener){
window.addEventListener("load", mark, false);
}
else if(window.attachEvent){
window.attachEvent("onload", mark);
}