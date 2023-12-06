class Pregunta {
  constructor(nombreCampana, indice, pregunta, esOpcionMultiple, cantidadRespuestas) {
    this.nombreCampana = nombreCampana;
    this.indice = indice;
    this.pregunta = pregunta;
    this.esOpcionMultiple = esOpcionMultiple;
    this.cantidadRespuestas = esOpcionMultiple? cantidadRespuestas : -1
  }

  get nombreCampana() {
    return this.nombreCampana;
  }

  get indice() {
    return this.indice;
  }

  get pregunta() {
    return this.pregunta;
  }

  get esOpcionMultiple() {
    return this.esOpcionMultiple;
  }

  get cantidadRespuestas() {
    return this.cantidadRespuestas;
  }
}