export class Elemento {
    titulo: string;
    descripcion: string;
    director: string;
    caratula: string;
  
    constructor(titulo: string, descripcion: string, director: string, caratula: string) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.director = director;
      this.caratula = caratula;
    }
}
