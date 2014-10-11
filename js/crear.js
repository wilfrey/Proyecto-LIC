function iniciar(){
    var j = document.contact_form;
var sonido = j.getElementById("Enviarr")
if (sonido.addEventListener) {
    sonido.addEventListener("dblclick",registrar(),false)
    sonido.addEventListener("onclick",registrar(),false)
} else if(sonido.attachEvent){ 
    sonido.addEventListener("ondblclick",registrar(),false)
}
}

function registrar() { 
var j = document.contact_form;
var personas = j.tot.value;
var nombre = j.nom1.value;
var indice = j.hour.selectedIndex;
var horas = j.hour.options[indice].value 
var cel = j.tel1.value;
var cor = j.email1.value;
var fecha = j.fecha.value;

if (nombre != "" && personas != "" && cel != "" && cor != "" && fecha != "") {
    document.getElementById("cont1").innerHTML += "<tr><td>"+ nombre+"</td><td>"+ personas+"</td><td>"+horas+"</td><td>"+cel+"</td><td>"+cor+"</td><td>"+fecha+"</td><tr>";
    document.getElementById("validar5").style.display = "block";
    document.getElementById("reservas").style.display = "block";
    limpiar();
} else { 
    document.getElementById("validar6").style.display = "block";
    document.getElementById("validar5").style.display = "none";
} 
}

function limpiar() {
var j = document.contact_form;
j.tot.value = "";
j.nom1.value = "";
j.tel1.value = "";
j.email1.value = "";
j.fecha.value = "";

j.hour.disabled = true;
j.tot.disabled = true;
j.tel1.disabled = true;
j.email1.disabled = true;
j.fecha.disabled = true;
}