class respuestaspreguntas {
    constructor(nombreCampana, indicePregunta, indiceRespuesta, respuesta, esOpcionMultiple) {
      this.nombreCampana = nombreCampana;
      this.indicePregunta = indicePregunta;
      this.indiceRespuesta = indiceRespuesta;
      this.respuesta = respuesta;
      this.respuesta = esOpcionMultiple? respuesta : '';
    }
  
    get nombreCampana() {
      return this.nombreCampana;
    }
  
    get indicePregunta() {
      return this.indicePregunta;
    }
  
    get indiceRespuesta() {
      return this.indiceRespuesta;
    }
  
    get esOpcionMultiple() {
      return this.esOpcionMultiple;
    }
  
    get respuesta() {
      return this.respuesta;
    }
  }