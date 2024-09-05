document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("buttonText").addEventListener("click", function() {
localStorage.setItem("datoform",document.getElementById("inputText").value);
});
});

    