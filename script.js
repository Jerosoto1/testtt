function toggleCarta(id) {
  const carta = document.getElementById(id);
  carta.style.display = carta.style.display === 'block' ? 'none' : 'block';
}

function mostrarMensaje(id) {
  const mensaje = document.getElementById(id);
  mensaje.style.display = mensaje.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-element");
  const mensajes = document.querySelectorAll(".mensaje");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (entry.target.classList.contains("mensaje")) {
          const text = entry.target.getAttribute("data-text");
          entry.target.textContent = "";
          let i = 0;
          const interval = setInterval(() => {
            entry.target.textContent += text[i];
            i++;
            if (i === text.length) clearInterval(interval);
          }, 50);
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
  mensajes.forEach(msj => observer.observe(msj));
});

// Botón que se mueve hasta 12 clics
let intentos = 0;
const btnFinal = document.getElementById("btnFinal");
const mensajeFinal = document.getElementById("mensajeFinal");

btnFinal.addEventListener("click", () => {
  intentos++;

  if (intentos < 12) {
    // mover el botón aleatoriamente
    const x = Math.floor(Math.random() * 200 - 100); // entre -100px y 100px
    const y = Math.floor(Math.random() * 200 - 100); // entre -100px y 100px
    btnFinal.style.transform = `translate(${x}px, ${y}px)`;
  } else {
    // al toque 12 mostrar mensaje
    btnFinal.style.display = "none";
    mensajeFinal.style.display = "block";
  }
});
