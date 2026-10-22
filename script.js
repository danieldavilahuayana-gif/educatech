const formulario=document.getElementById("formulario");

const mensaje=document.getElementById("mensaje");

const botones=document.querySelectorAll(".elegir");

botones.forEach(function(boton){
boton.addEventListener("click",function(){
const programaSeleccionado=boton.getAttribute("data-programa");

document.getElementById("programa").value=programaSeleccionado;

document.getElementById("registro").scrollIntoView({
behavior:"smooth"
});
});
});

formulario.addEventListener("submit",function(evento){

evento.preventDefault();

const nombre=document.getElementById("nombre").value.trim();

const correo=document.getElementById("correo").value.trim();

const telefono=document.getElementById("telefono").value.trim();

const programa=document.getElementById("programa").value;

const aceptar=document.getElementById("aceptar").checked;

document.getElementById("errorNombre").textContent="";

document.getElementById("errorCorreo").textContent="";

document.getElementById("errorTelefono").textContent="";

document.getElementById("errorPrograma").textContent="";

document.getElementById("errorAceptar").textContent="";

mensaje.innerHTML="";

let correcto=true;

if(nombre===""){
document.getElementById("errorNombre").textContent="Ingresa tus nombres completos.";
correcto=false;
}

if(correo===""){
document.getElementById("errorCorreo").textContent="Ingresa tu correo electrónico.";
correcto=false;
}else{
const formatoCorreo=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!formatoCorreo.test(correo)){
document.getElementById("errorCorreo").textContent="Ingresa un correo válido.";
correcto=false;
}
}

if(telefono===""){
document.getElementById("errorTelefono").textContent="Ingresa tu teléfono.";
correcto=false;
}else if(!/^\d+$/.test(telefono)){
document.getElementById("errorTelefono").textContent="El teléfono debe contener solamente números.";
correcto=false;
}

if(programa===""){
document.getElementById("errorPrograma").textContent="Selecciona un programa.";
correcto=false;
}

if(!aceptar){
document.getElementById("errorAceptar").textContent="Debes aceptar el registro de tus datos.";
correcto=false;
}

if(correcto){

const datos={
nombre:nombre,
correo:correo,
telefono:telefono,
programa:programa
};

console.log("Datos registrados:",datos);

mensaje.innerHTML='<div class="alert alert-success">¡Registro realizado correctamente!</div>';

formulario.reset();

}

});