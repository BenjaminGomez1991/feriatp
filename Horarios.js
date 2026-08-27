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