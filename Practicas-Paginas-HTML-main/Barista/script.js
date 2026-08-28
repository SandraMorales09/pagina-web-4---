<script>
  // Mostrar saludo al cargar la página
  window.addEventListener("load", () => {
    console.log("Bienvenida a La Cafetería Los Acosta ☕");
  });

  // Alerta al hacer clic en "Comprar ahora"
  document.addEventListener("DOMContentLoaded", () => {
    const comprarBtn = document.querySelector(".contein-1 a");
    if (comprarBtn) {
      comprarBtn.addEventListener("click", () => {
        alert("Gracias por tu interés. Pronto podrás hacer tu pedido en línea.");
      });
    }

    // Suscripción al boletín
    const suscribirBtn = document.querySelector(".newslatter button");
    const emailInput = document.querySelector(".newslatter input[type='email']");
    if (suscribirBtn && emailInput) {
      suscribirBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        if (email) {
          alert(`¡Gracias por suscribirte, ${email}!`);
          emailInput.value = "";
        } else {
          alert("Por favor, ingresa un correo válido.");
        }
      });
    }

    // Mostrar descripción al hacer clic en imágenes de sucursales
    const imagenes = document.querySelectorAll("img[class^='sucur-']");
    imagenes.forEach(img => {
      img.addEventListener("click", () => {
        const nombre = img.getAttribute("alt") || "Sucursal Barista";
        alert(`Estás viendo: ${nombre}`);
      });
    });
  });

  // Cambiar fondo con un botón (puedes agregar este botón en tu HTML)
  function cambiarFondo() {
    document.body.style.background = "linear-gradient(to right, #fff8dc, #d2b48c)";
  }
</script>