const formulario = document.querySelector(".form-body");

formulario.addEventListener("submit", function(event) {

  const deportes = document.querySelectorAll(
    'input[name="Deporte"]:checked'
  );

  if (deportes.length === 0) {

    event.preventDefault();

    alert("Por favor selecciona al menos un deporte.");

    return;

  }

});