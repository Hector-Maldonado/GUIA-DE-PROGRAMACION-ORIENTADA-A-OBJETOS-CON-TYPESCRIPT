class Cancion {
    // Atributos
    titulo: string;
    genero: string;
    private autor: string;
  
    // Constructor
    constructor(tituloParam: string, generoParam: string) {
      this.titulo = tituloParam;
      this.genero = generoParam;
      this.autor = ''; 
    }
  
    // Métodos get y set para el atributo privado 'autor'
    get author(): string {
      return this.autor;
    }
  
    set author(autorParam: string) {
      this.autor = autorParam;
    }
  
    // Método para mostrar los datos de la canción
    mostrarDatos(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Género: ${this.genero}`);
      console.log(`Autor: ${this.author}`);
    }
  }
  
  // Ejemplo
  const cancion = new Cancion('Imagine', 'Pop');
  cancion.author = 'John Lennon';
  cancion.mostrarDatos();