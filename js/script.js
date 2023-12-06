function agregarInputs() {
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
        // Input numero de respuestas
        var cantidadRespuestas = document.createElement("input");
        cantidadRespuestas.type = "number";
        cantidadRespuestas.name = "cantidadRespuestas" + (i + 1);
        cantidadRespuestas.placeholder = "Cantidad de respuestas";
        cantidadRespuestas.min = "-1";
        cantidadRespuestas.max = "99";
        cantidadRespuestas.maxLength= "2";
        /*cantidadRespuestas.oninput = function(index,  inputCantidadRespuestas) {
            return function() {
                agregarRespuestas(index, inputCantidadRespuestas);
            };
        }(i + 1, cantidadRespuestas);
*/
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

function agregarRespuestas(preguntaIndex, inputCantidadRespuestas) {
    var contenedorPreguntas = document.getElementById("contenedorPreguntas");
    // Obtener el valor del input de cantidad de respuestas
    var cantidadRespuestas = parseInt(inputCantidadRespuestas.value);
    let existeDuplicados = false;
    //console.log(`Cantidad de respuestas: ${cantidadRespuestas}`);
    for (var j = 0; j < cantidadRespuestas; j++) {
        var nuevaRespuesta = document.createElement("input");
        nuevaRespuesta.type = "text";
        nuevaRespuesta.id = "respuesta" + preguntaIndex + "-" + (j + 1);
        console.log(nuevaRespuesta.id);
        nuevaRespuesta.placeholder = "Pregunta " + preguntaIndex + " Respuesta " + (j + 1) ;
        contenedorPreguntas.appendChild(nuevaRespuesta);
        contenedorPreguntas.appendChild(document.createElement("br"));   
    }
}

function generarCSV(datos) {
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

