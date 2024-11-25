document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todas las imágenes con la clase 'zoomable'
    const images = document.querySelectorAll(".zoomable");

    // Añade el evento 'click' a cada imagen
    images.forEach(image => {
        image.addEventListener("click", () => {
            // Si la imagen ya tiene zoom, quítalo
            if (image.classList.contains("zoomed")) {
                image.classList.remove("zoomed");
            } else {
                // Quita el zoom de cualquier otra imagen
                images.forEach(img => img.classList.remove("zoomed"));
                // Aplica el zoom a la imagen clickeada
                image.classList.add("zoomed");
            }
        });
    });

    // Cierra el zoom si se hace clic fuera de las imágenes
    document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("zoomable")) {
            images.forEach(img => img.classList.remove("zoomed"));
        }
    });
});
