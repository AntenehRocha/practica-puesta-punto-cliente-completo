const formulario = document.getElementsByClassName("formulario")[0];

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const opinion = document.getElementById("opinion").value;
  const gymRadio = document.querySelector('input[name="gym"]:checked');

  let asisteGym = gymRadio ? gymRadio.value : "no especificado";

  window.location.href = `./paginas/agradecimientos.html?nombre=${encodeURIComponent(nombre)}&opinion=${encodeURIComponent(opinion)}&gym=${encodeURIComponent(asisteGym)}}`;
});

const botonBorrar = document.getElementsByClassName("boton-borrar-interactivo")[0];
botonBorrar.addEventListener("click", () => {
  formulario.reset();
});
