function toggleCarta() {
  const carta = document.getElementById('carta');
  const fotos = document.querySelectorAll('.foto');

  fotos.forEach(foto => {
    foto.classList.add('animar');
    setTimeout(() => {
      foto.classList.remove('animar');
    }, 500);
  });

  if (carta.style.display === 'block') {
    carta.style.display = 'none';
  } else {
    carta.style.display = 'block';
  }
}

function mostrarMensaje() {
  const mensaje = document.getElementById('mensaje');
  mensaje.style.display = 'block';
}
