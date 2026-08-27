// Datos de acceso permitidos para ingresar al formulario de reservas.
var correoCorrecto = "benjamin.gomez.fuentes@alumnos.sip.cl";
var passwordCorrecta = "SIP12345";

// Formulario de inicio de sesión.
var formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    // El acceso se valida antes de redirigir a la página de horarios.
    event.preventDefault();

    var correo = document.querySelector("#correo").value;
    var password = document.querySelector("#password").value;

    if (correo == correoCorrecto && password == passwordCorrecta) {

        // Credenciales correctas: informa al usuario y abre las reservas.
        alert("Inicio de sesión correcto");

        window.location.href = "https://feriatp-ffdu.vercel.app/Horarios.html";

    } else {

        // Credenciales incorrectas: permanece en la página de acceso.
        alert("Correo o contraseña incorrectos");

    }

});

tyr