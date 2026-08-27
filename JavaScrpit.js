var correoCorrecto = "benjamin.gomez.fuentes@alumnos.sip.cl";
var passwordCorrecta = "SIP12345";

var formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    var correo = document.querySelector("#correo").value;
    var password = document.querySelector("#password").value;

    if (correo == correoCorrecto && password == passwordCorrecta) {

        alert("Inicio de sesión correcto");

        window.location.href = "https://feriatp-ffdu.vercel.app/Horarios.html";

    } else {

        alert("Correo o contraseña incorrectos");

    }

});