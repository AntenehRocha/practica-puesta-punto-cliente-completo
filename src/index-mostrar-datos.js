document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtenemos el texto en formato JSON desde el LocalStorage
    const jsonGuardado = localStorage.getItem('datosCuestionario');

    if (jsonGuardado) {
        // 2. Transformamos el texto JSON a un objeto JavaScript funcional
        const datos = JSON.parse(jsonGuardado);

        // 3. Buscamos un contenedor en tu nuevo HTML (ej. <div id="gracias"></div>)
        const contenedor = document.getElementById('contenedorResultados');

        // 4. Pintamos las propiedades del JSON en el DOM
        contenedor.innerHTML = `
            <div class="tarjeta-resultado">
                <h3>¡Gracias por tu opinión, ${datos.nombre}!</h3>
                <p><strong>Tu comentario:</strong> "${datos.opinion}"</p>
                <p><strong>¿Vas al gimnasio?:</strong> ${datos.asisteAlGym.toUpperCase()}</p>
                <small>Enviado el: ${datos.fechaEnvio}</small>
            </div>
        `;
    } else {
        console.log("No se encontraron datos en el sistema.");
    }
});
