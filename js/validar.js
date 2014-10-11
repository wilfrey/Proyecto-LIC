//////////////////////////////////////////////////////////////////////////////
/*************** validaciones y Expresiones regulares ***********************/
//////////////////////////////////////////////////////////////////////////////

function texto(e){ 
    if (window.event) {keyval=e.keyCode}
    else
    if (e.which) {keyval=e.which}
    if (keyval == "13") {
    if (document.contact_form.nom.value == "") {
        document.getElementById("validar").style.display = "block";
    } else { 
    var f = document.contact_form.nom.value;
    validaSoloTexto(f);
    }
 }
}//fin de funcion texto

function validaSoloTexto(cadena) { 
    var patron = /^[a-zA-Z\s]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
  if (!cadena.search(patron)){
      document.getElementById("validar").style.display = "none";
      document.getElementById("validar3").style.display = "none";
      document.getElementById("validar2").style.display = "none";
      document.contact_form.email.disabled = false;
      document.contact_form.email.focus();
  }  
  else
      document.getElementById("validar").style.display = "block";
}


function mensaje(e) { 
if (window.event) {keyval=e.keyCode}
    else
    if (e.which) {keyval=e.which}
    if (keyval == "13") {
    if (document.contact_form.asun.value == "") {
        document.getElementById("validar").style.display = "block";
    } else { 
    var f = document.contact_form.asun.value;
    message(f);
    }
 }
}//fin de funcion mensaje

function message(cadena) { 
    var patron = /^[a-zA-Z\s]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
  if (!cadena.search(patron)){
      document.getElementById("validar").style.display = "none";
      document.contact_form.message.disabled = false;
      document.contact_form.message.focus();
  }  
  else
      document.getElementById("validar").style.display = "block";
}//fin de cadena

function correo(e) { 
if (window.event) {keyval=e.keyCode}
    else
    if (e.which) {keyval=e.which}
    if (keyval == "13") {
    if (document.contact_form.email.value == "") {
        document.getElementById("validar").style.display = "block";
    } else { 
    var f = document.contact_form.email.value;
    email(f);
    }
 }
}//fin de fncion correo

function email(cadena) { 
    var patron = /^[A-Z0-9._%+-]+@(?: |gmail|outlook|hotmail|yahoo)+\.(?: |com|org|net|es|info)$/i;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
  if (!cadena.search(patron)){
      document.getElementById("validar").style.display = "none";
      document.contact_form.asun.disabled = false;
      document.contact_form.asun.focus();
  }  
  else
      document.getElementById("validar").style.display = "block";
}

function coment(e) { 
if (window.event) {keyval=e.keyCode}
    else
    if (e.which) {keyval=e.which}
    if (keyval == "13") {
    if (document.contact_form.message.value == "") {
        document.getElementById("validar").style.display = "block";
    } else { 
    var f = document.contact_form.message.value;
    chang(f);
    }
 }
}

function chang(cadena) { 
var patron = /^[a-zA-Z\s]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
  if (!cadena.search(patron)){
      document.getElementById("validar").style.display = "none";
      document.contact_form.send.disabled = false;
      document.contact_form.send.focus();
  }  
  else
      document.getElementById("validar").style.display = "block";
}//fin de funcion cadena

function envio() {
    var j = document.contact_form;
    if (j.nom.value != "" && j.asun.value != "" && j.email.value != "" && j.message.value != "") {
        document.getElementById("validar2").style.display = "block";
        crear();
    } else { 
     document.getElementById("validar3").style.display = "block";
    }
}//fin de function envio

function crear() {
var j = document.contact_form;
var asunto = j.asun.value;
var nombre = j.nom.value;
document.getElementById("cont").innerHTML += "<tr><td>"+ asunto+"</td><td>"+ nombre+"</td><tr>";
limpiar();
}

function limpiar() { 
var j = document.contact_form;
j.asun.value = "";
j.nom.value = "";
j.message.value = "";
j.email.value = "";
j.email.disabled = true;
j.asun.disabled = true;
j.message.disabled = true;
}