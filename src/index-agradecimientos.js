function obtenerUltimoUsuario() {
  try {
    const datos = localStorage.getItem("datosUsuarios");
    const listaUsuarios = datos ? JSON.parse(datos) : [];
    if (listaUsuarios.length > 0) {
      return listaUsuarios[listaUsuarios.length - 1];
    }
    return null;
  } catch (error) {
    console.error("Error al leer los datos", error);
    return null;
  }
}

function mostrarDatos() {
  const usuario = obtenerUltimoUsuario();

  if (!usuario) {
    console.log("No hay datos de usuarios registrados.");
    return;
  }

  const contenedor = document.getElementById("datos-contenedor");
  if (contenedor) {
    contenedor.innerHTML = `
      <div class="tarjeta-datos">
        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Opinión:</strong> ${usuario.opinion}</p>
        <p><strong>¿Asiste al Gym?:</strong> ${usuario.asisteAlGym}</p>
        <p><strong>Fecha de envío:</strong> ${usuario.fechaEnvio}</p>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", mostrarDatos);
