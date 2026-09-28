const formulario = document.getElementsByClassName("formulario")[0];

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const opinion = document.getElementById("opinion").value;

  const radioAsiste = document.querySelector('input[name="grupo-checks"]:checked');
  let asisteGym = radioAsiste;

  const datosUsuario = { nombre, opinion, asisteGym };

  localStorage.setItem("datosFormulario", JSON.stringify(datosUsuario));

  console.log("datos recogidos", datosUsuario);

  window.location.href = "../paginas/agradecimientos.html";
});