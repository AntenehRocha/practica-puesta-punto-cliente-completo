$(document).ready(function () {
  let evento = $(".boton-interactivo").click(function () {
    let nombre = $("#nombre").val();
    let comentarioSobrePagina = $("#opinion").val();
    let vaAlgym = $(".input-selecion:checked").val();
    console.log(nombre);
    console.log(comentarioSobrePagina);
    console.log(vaAlgym);

    $(".seccion-formulario").append(` 
      <div id="contenedor-datos">
        <h4> Muchas gracias ${nombre} </h4>
      </div>
    `);
  });

  $(".boton-borrar-interactivo").click(function () {
    $("#contenedor-datos").remove();
  });
});
