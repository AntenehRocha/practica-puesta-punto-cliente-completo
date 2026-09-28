function mostrarDatos() {
    const parametros = new URLSearchParams(window.location.search);

    const nombre = parametros.get("nombre");
    const opinion = parametros.get("opinion");
    const gym = parametros.get("gym");
    const fecha = parametros.get("fecha");

    if (!nombre) return;

    const contenedor = document.getElementById("datos-contenedor");
    if (contenedor) {
        contenedor.innerHTML = `
      <div class="tarjeta-datos">
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Opinión:</strong> ${opinion}</p>
        <p><strong>¿Asiste al Gym?:</strong> ${gym}</p>
        <p><strong>Fecha de envío:</strong> ${fecha}</p>
      </div>
    `;
    }
}

document.addEventListener("DOMContentLoaded", mostrarDatos);
