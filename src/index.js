$(document).ready(function () {
  let evento = $(".boton-interactivo").click(function () {
    let nombre = $("#nombre").val();
    let comentarioSobrePagina = $("#opinion").val();
    let vaAlgym = $(".input-selecion:checked").val();
    console.log(nombre);
    console.log(comentarioSobrePagina);
    console.log(vaAlgym);

    $("#contenedor-datos").append(` 
      <h1> Muchas gracias por tu colaboracion ${nombre} </h1>
        <p> Nombre: ${nombre} </p>
        <p> Opinion: ${comentarioSobrePagina} </p>
        <p> Asistencia al gimnasio: ${vaAlgym} </p>
    `);
  });

  $(".boton-borrar-interactivo").click(function () {
    $("#contenedor-datos").remove();
  });
});
