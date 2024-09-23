var Cancion = /** @class */ (function () {
    // Constructor
    function Cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = '';
    }
    Object.defineProperty(Cancion.prototype, "author", {
        // Métodos get y set para el atributo privado 'autor'
        get: function () {
            return this.autor;
        },
        set: function (autorParam) {
            this.autor = autorParam;
        },
        enumerable: false,
        configurable: true
    });
    // Método para mostrar los datos de la canción
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.author));
    };
    return Cancion;
}());
// Ejemplo
var cancion = new Cancion('Imagine', 'Pop');
cancion.author = 'John Lennon';
cancion.mostrarDatos();
