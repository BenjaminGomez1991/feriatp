// Formulario de solicitud de horarios deportivos.
const formulario = document.querySelector(".form-body");

formulario.addEventListener("submit", function(event) {

  // Comprueba que el usuario haya elegido un deporte antes de enviar.
  const deportes = document.querySelectorAll(
    'input[name="Deporte"]:checked'
  );

  if (deportes.length === 0) {

    // Detiene el envío y muestra una indicación al usuario.
    event.preventDefault();

    alert("Por favor selecciona al menos un deporte.");

    return;

  }

});

let curso1 = document.getElementById("curso1");
let curso2 = document.getElementById("curso2");

curso1.addEventListener("change", function() {

    for (let i = 0; i < curso2.options.length; i++) {

        if (curso2.options[i].value == curso1.value) {
            curso2.options[i].disabled = true;
        } else {
            curso2.options[i].disabled = false;
        }

    }

    if (curso2.value == curso1.value) {
        curso2.value = "";
    }

});