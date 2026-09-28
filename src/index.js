function cargarDatosLocales() {
  try {
    const datos = localStorage.getItem("datosUsuarios");
    const datosJson = datos ? JSON.parse(datos) : []; 
    console.log("Lectura correcta");
    console.table(datosJson);
    return datosJson;
  } catch (error) {
    console.error("Error al leer los datos", error);
    return [];
  }
}

const formulario = document.getElementsByClassName("formulario")[0];

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const opinion = document.getElementById("opinion").value;
  const gymRadio = document.querySelector('input[name="gym"]:checked');

  let asisteGym;
  if (gymRadio) {
    asisteGym = gymRadio.value;
  } else {
    asisteGym = "no especificado";
  }

  const datosUsuario = {
    nombre: nombre,
    opinion: opinion,
    asisteAlGym: asisteGym,
    fechaEnvio: new Date().toLocaleDateString(),
  };

  añadirDatos(datosUsuario);

  window.location.href = "./paginas/agradecimientos.html";
});

function añadirDatos(nuevoUsuario) {
  const listaUsuarios = cargarDatosLocales();
  listaUsuarios.push(nuevoUsuario);
  localStorage.setItem("datosUsuarios", JSON.stringify(listaUsuarios, null, 2));
  console.log("Datos añadidos correctamente");
}

const botonBorrar = document.getElementsByClassName("boton-borrar-interactivo")[0];
botonBorrar.addEventListener("click", () => {
  formulario.reset();
});

cargarDatosLocales();
