const formulario = document.getElementsByClassName("formulario")[0];

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const opinion = document.getElementById("opinion").value;

  const radioAsiste = document.querySelector(
    'input[name="grupo-checks"]:checked',
  );
  let asisteGym;

  if (radioAsiste) {
    if (radioAsiste.value === "Sí") {
      asisteGym = "Asiste al gym";
    } else if (radioAsiste.value === "No") {
      asisteGym = "No asiste al gym";
    } else {
      asisteGym = radioAsiste.value;
    }
  } else {
    asisteGym = "no has respondido a la pregunta";
  }

  const datosUsuario = { nombre, opinion, asisteGym };

  localStorage.setItem("datosFormulario", JSON.stringify(datosUsuario));

  console.log("datos recogidos", datosUsuario);

  window.location.href = "../paginas/agradecimientos.html";
});
