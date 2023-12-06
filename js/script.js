function agregarInputs() {
    document.getElementById("contenedorRespuestas").innerHTML = '';
    var cantidad = document.getElementById("cantidad").value;
    // Verificar y ajustar la cantidad si excede el máximo permitido
    cantidad = Math.min(cantidad, 99);
    var contenedorPreguntas = document.getElementById("contenedorPreguntas");
    contenedorPreguntas.innerHTML = ""; // Limpiar el contenedor de preguntas y respuestas
    for (var i = 0; i < cantidad; i++) {
        // Input Pregunta
        var nuevaPregunta = document.createElement("input");
        nuevaPregunta.type = "text";
        nuevaPregunta.name = "pregunta" + (i + 1);
        nuevaPregunta.placeholder = "Pregunta " + (i + 1);
        contenedorPreguntas.appendChild(nuevaPregunta);
        contenedorPreguntas.appendChild(document.createElement("br"));
        // ingresar el total  de respuestas
        var cantidadRespuestas = document.createElement("input");
        cantidadRespuestas.type = "number";
        cantidadRespuestas.name = "cantidadRespuestas" + (i + 1);
        cantidadRespuestas.placeholder = "Cantidad de respuestas";
        cantidadRespuestas.min = "-1"; // Abierto
        cantidadRespuestas.max = "99";
        cantidadRespuestas.maxLength= "2";
        //boton pa añadir respuestas
        var btnAñadirRespuestas = document.createElement("button");
        btnAñadirRespuestas.name = "btnAñadirRespuestas";
        btnAñadirRespuestas.innerText = "Añadir Respuestas";
        btnAñadirRespuestas.onclick = function(index, inputCantidadRespuestas) {
        return function() {
            agregarRespuestas(index, inputCantidadRespuestas);
        };
        }(i + 1, cantidadRespuestas);
        contenedorPreguntas.appendChild(cantidadRespuestas);
        contenedorPreguntas.appendChild(btnAñadirRespuestas);
        contenedorPreguntas.appendChild(document.createElement("br"));
    }
}       

// Create div for every question
// Rebuild div every time a this function is called
function agregarRespuestas(preguntaIndex, inputCantidadRespuestas) {
    // Obtener el valor del input de cantidad de respuestas
    var cantidadRespuestas = parseInt(inputCantidadRespuestas.value);
    // Donde van todas las repuestas
    const contenedorRespuestas = document.getElementById("contenedorRespuestas");
    // Contenedor que contiene todas las respuestas de una pregunta dada
    const contenedorRespuestaPregunta = obtenerDivRespuestas(`respuestasPregunta${preguntaIndex}`)

    contenedorRespuestas.appendChild(contenedorRespuestaPregunta)
    contenedorRespuestaPregunta.setAttribute('id', `respuestasPregunta${preguntaIndex}`)

    llenarContenedorRespuestas(preguntaIndex, cantidadRespuestas, contenedorRespuestaPregunta);
}

function obtenerDivRespuestas(id) {
    let contenedorRespuestaPregunta = document.getElementById(id)

    if (contenedorRespuestaPregunta == null) {
        contenedorRespuestaPregunta = document.createElement("div")
    }
    contenedorRespuestaPregunta.innerHTML = '';

    return contenedorRespuestaPregunta;
}

function llenarContenedorRespuestas(preguntaIndex, cantidadRespuestas, contenedorRespuestaPregunta) {
    for (var j = 0; j < cantidadRespuestas; j++) {
        var nuevaRespuesta = document.createElement("input");
        nuevaRespuesta.type = "text";
        nuevaRespuesta.id = "respuesta" + preguntaIndex + "-" + (j + 1);
        console.log(nuevaRespuesta.id);
        nuevaRespuesta.placeholder = "Pregunta " + preguntaIndex + " Respuesta " + (j + 1) ;
        contenedorRespuestaPregunta.appendChild(nuevaRespuesta);
        contenedorRespuestaPregunta.appendChild(document.createElement("br"));   
    }
}

//{nombrecampana / index / pregunta / es opción multiple? 5 : 3}

// Modelo de pregunta
// en el modelo

function generarCSV(datos) {
    alert("ya guardé ue")
    const csvFilas = [];
    const encabezados = Object.keys(datos[0]);
    csvFilas.push(encabezados.join(','));
    for (const fila of datos) {
        const values = encabezados.map(encabezado => fila[encabezado]);
        csvFilas.push(values.join(','));
    }
    return csvFilas.join('\n');
 }

 function desargarCSV(datos, nombreArchivo) {
    const datosCSV = convertToCSV(datos);
    const blob = new Blob([datosCSV], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', nombreArchivo);
    a.click();
 }

 