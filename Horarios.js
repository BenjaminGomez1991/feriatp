function handleSubmit() {
  let valid = true;

  const firstName = document.getElementById('firstName');
  const email     = document.getElementById('email');

  // Limpiar errores previos
  [firstName, email].forEach(el => el.classList.remove('field-error'));

  // Validar nombre
  if (!firstName.value.trim()) {
    firstName.classList.add('field-error');
    valid = false;
  }

  // Validar email
  if (!email.value.trim() || !email.value.includes('@')) {
    email.classList.add('field-error');
    valid = false;
  }

  // Validar deporte
  const sports = ['futbol', 'basquetbol', 'volei']
    .filter(id => document.getElementById(id).checked);

  if (sports.length === 0) {
    alert('Por favor selecciona al menos un deporte.');
    valid = false;
  }

  if (!valid) return;

  // Mostrar banner de éxito
  const banner = document.getElementById('successBanner');
  banner.classList.add('visible');
  banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Aquí puedes enviar los datos a tu backend con fetch()
  console.log('Datos del formulario:', {
    nombre:      firstName.value.trim(),
    apellido:    document.getElementById('lastName').value.trim(),
    email:       email.value.trim(),
    deportes:    sports,
    nivel:       document.querySelector('input[name="nivel"]:checked')?.id || '',
    dia:         document.getElementById('dia').value,
    hora:        document.getElementById('hora').value,
    duracion:    document.getElementById('duracion').value,
    comentarios: document.getElementById('comentarios').value.trim()
  });
}