document.addEventListener("DOMContentLoaded", function(){
    let dato= localStorage.getItem("datoform");
    let spanDato= document.getElementById('data');
    spanDato.innerHTML+= dato;
});