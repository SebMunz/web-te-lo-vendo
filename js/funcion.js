var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");



function enviarFormulario() {
   if (nombre.value === null || nombre.value === ""){
       alert("Ingresa tu nombre");
       document.getElementById("nombre").focus();
    }else if (email.value === null || email.value === ""){
        alert("Ingresa tu email");
        document.getElementById("email").focus();
    }else if(mensaje.value === null || mensaje.value === ""){
        alert("Ingresa tu mensaje");
        document.getElementById("mensaje").focus();
    }else{
        alert("Formulario Enviado con éxito");
    }
    
}
//https://www.youtube.com/watch?v=_a2dhymoTHw


$(document).ready(function() {
    $('#table-id').DataTable({
        ajax:'./js/datostabla.json',
        'columns':[
            {'data':'id'},
            {'data':'Fecha'},
            {'data':'Nombre'},
            {'data':'Contacto'},
            {'data':'Producto'},
            {'data':'Cantidad'},
            {'data':'Precio'}
        ]
    });
} );