function agregarInputs() {
    var cantidad = document.getElementById("cantidad").value;
    // Verificar y ajustar la cantidad si excede el máximo permitido
    cantidad = Math.min(cantidad, 99);
    var contenedorPreguntasRespuestas = document.getElementById("contenedorPreguntasRespuestas");
    contenedorPreguntasRespuestas.innerHTML = ""; // Limpiar el contenedor de preguntas y respuestas
    for (var i = 0; i < cantidad; i++) {
        // Input Pregunta
        var nuevaPregunta = document.createElement("input");
        nuevaPregunta.type = "text";
        nuevaPregunta.name = "pregunta" + (i + 1);
        nuevaPregunta.placeholder = "Pregunta " + (i + 1);
        contenedorPreguntasRespuestas.appendChild(nuevaPregunta);
        contenedorPreguntasRespuestas.appendChild(document.createElement("br"));
        // Input numero de respuestas
        var cantidadRespuestas = document.createElement("input");
        cantidadRespuestas.type = "number";
        cantidadRespuestas.name = "cantidadRespuestas" + (i + 1);
        cantidadRespuestas.placeholder = "Cantidad de respuestas";
        cantidadRespuestas.min = "-1";
        cantidadRespuestas.max = "99";
        //<input type="button" id="btnAnadirPreguntas" name="btnPreguuntas" value="Añadir Preguntas" onclick="agregarInputs()">
        var btnAñadirRespuestas = document.createElement("input");
        btnAñadirRespuestas.type="button"
        btnAñadirRespuestas.name = "btnAñadirRespuestas";
        btnAñadirRespuestas.value = "Añadir respuestas";
        btnAñadirRespuestas.onclick = function(index, inputCantidadRespuestas) {
        return function() {
            agregarRespuestas(index, inputCantidadRespuestas);
        };
        }(i + 1, cantidadRespuestas);
        contenedorPreguntasRespuestas.appendChild(cantidadRespuestas);
        contenedorPreguntasRespuestas.appendChild(document.createElement("br"));
    }
}
function agregarRespuestas(preguntaIndex, inputCantidadRespuestas) {
    var contenedorPreguntasRespuestas = document.getElementById("contenedorPreguntasRespuestas");
    // Obtener el valor del input de cantidad de respuestas
    var cantidadRespuestas = parseInt(inputCantidadRespuestas.value);
    console.log(`Cantidad de respuestas: ${cantidadRespuestas}`);
    for (var j = 0; j < cantidadRespuestas; j++) {
        console.log(`Pregunta ${preguntaIndex} respuesta ${j + 1}`);
        // Input respuesta
        var nuevaRespuesta = document.createElement("input");
        nuevaRespuesta.type = "text";
        nuevaRespuesta.name = "respuesta" + preguntaIndex + "-" + (j + 1);
        nuevaRespuesta.placeholder = "P " + preguntaIndex + " R " + (j + 1) ;
        contenedorPreguntasRespuestas.appendChild(nuevaRespuesta);
        contenedorPreguntasRespuestas.appendChild(document.createElement("br"));
    }
}
function redireccionarAgregarRespuestas() {
    // Obtén el número de preguntas del input "cantidad"
    var cantidad = document.getElementById("cantidad").value;
    // Redirige al usuario a la sección correspondiente
    window.location.href = "#seccionRespuestas";
  }

  function mostrarRespuestas() {
    // Obtén la cantidad de preguntas
    var cantidadPreguntas = document.getElementById("cantidad").value;
  
    // Obtén las respuestas ingresadas por los usuarios y muestra cada una
    var respuestasIngresadas = document.getElementById("respuestasIngresadas");
    respuestasIngresadas.innerHTML = ""; // Limpiar el contenido existente antes de mostrar las respuestas
  
    for (var i = 1; i <= cantidadPreguntas; i++) {
      var respuesta = document.getElementById("respuesta" + i).value;
      respuestasIngresadas.innerHTML += "Respuesta " + i + ": " + respuesta + "<br>";
    }
  }