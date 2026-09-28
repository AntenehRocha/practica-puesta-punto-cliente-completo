document.addEventListener("DOMContentLoaded", () => {
  const datosGuardados = localStorage.getItem("datosFormulario");

  console.log(datosGuardados);
  const datosUsuario = JSON.parse(datosGuardados);

  const contenedor = document.getElementById("datos-contenedor");

  // esto uso el += para mantener los datos que ya estaban en el contendor "datos-contenedor", como en este casp no hay nada solo pondré =
  contenedor.innerHTML = `
    <table>
      <tbody>
        <tr>
          <td>Nombre</td>
          <td>${datosUsuario.nombre}</td>
        </tr>
        <tr>
          <td>Opinión</td>
          <td>${datosUsuario.opinion}</td>
        </tr>
        <tr>
          <td>¿Asiste al Gym?</td>
          <td>${datosUsuario.asisteGym}</td>
        </tr>
      </tbody>
    </table>
`;
});
