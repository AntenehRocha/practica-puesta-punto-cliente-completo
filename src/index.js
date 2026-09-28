import readline from "node:readline/promises";
import fs from "fs/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main(archivo) {
  try {
    const datos = await fs.readFile(archivo, "utf-8");
    const datosJson = JSON.parse(datos);
    console.log("Lectura correcta");
    console.table(datosJson);
    return datosJson;
  } catch (error) {
    console.error("Lectura incorrecta");
  }
}

// 1. Seleccionamos el formulario por su clase (tomamos el primer elemento)
const formulario = document.getElementsByClassName("formulario")[0];

// 2. Escuchamos el evento de envío
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitamos que la página busque recargarse

  // 3. Capturamos los valores usando el DOM mediante sus IDs
  const nombre = document.getElementById("nombre").value;
  const opinion = document.getElementById("opinion").value;

  // Para el radio button, buscamos cuál está marcado (checked)
  const gymRadio = document.querySelector('input[name="gym"]:checked');
  const asisteGym = gymRadio ? gymRadio.value : "no especificado";

  // 4. Creamos nuestro objeto estructurado
  const datosUsuario = {
    nombre: nombre,
    opinion: opinion,
    asisteAlGym: asisteGym,
    fechaEnvio: new Date().toLocaleDateString(),
  };

  // 5. Convertimos el objeto de JavaScript a una cadena de texto JSON
  const datosJSON = JSON.stringify(datosUsuario, null, 2);

  async function añadirDatos(datosJSON) {}

  // 7. Redirigimos al usuario a la página de resultados
  window.location.href = "../paginas/agradecimientos.html";
});

// Opcional: Programar el botón de borrar para limpiar el formulario
const botonBorrar = document.getElementsByClassName(
  "boton-borrar-interactivo",
)[0];
botonBorrar.addEventListener("click", () => {
  formulario.reset();
});

await main("datos.json");
