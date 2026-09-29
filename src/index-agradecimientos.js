document.addEventListener("DOMContentLoaded", () => {
  const datosGuardados = localStorage.getItem("datosFormulario");

  console.log(datosGuardados);
  const datosUsuario = JSON.parse(datosGuardados);

  const contenedor = document.getElementById("datos-contenedor");

  // esto uso el += para mantener los datos que ya estaban en el contendor "datos-contenedor", como en este casp no hay nada solo pondré =
  contenedor.innerHTML = `
    <h1 class="h1-gracias"> Muchas gracias por su contribución ${datosUsuario.nombre} </h2>
    <h3 class="resumen-datos"> Resumen de los datos introducidos: </h3>
    <div class="datosUsuario"> 
          <p>${datosUsuario.nombre}</p>
          <p>${datosUsuario.opinion}</p>
          <p>${datosUsuario.asisteGym}</p>
    </div>
`;
});
