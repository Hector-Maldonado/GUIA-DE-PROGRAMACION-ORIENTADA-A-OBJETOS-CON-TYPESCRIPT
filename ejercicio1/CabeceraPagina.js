var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
        this.alineacion = "";
    }
    // Método para obtener las propiedades del título
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return {
            tituloParam: this.titulo,
            colorParam: this.color,
            fuenteParam: this.fuente
        };
    };
    // Método para alinear el título
    CabeceraPagina.prototype.alinearTitulo = function (alineacion) {
        alineacion = alineacion.toLowerCase();
        if (alineacion === 'izquierda') {
            this.alineacion = 'izquierda';
        }
        else if (alineacion === 'derecha') {
            this.alineacion = 'derecha';
        }
        else if (alineacion === 'centrado') {
            this.alineacion = 'centrado';
        }
        else {
            console.log("Alineación no válida. Las opciones permitidas son: 'izquierda', 'derecha' o 'centrado'.");
        }
    };
    // Método para imprimir las propiedades 
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Ejemplo de uso
var cabecera = new CabeceraPagina("Holiwis", "#1b1639", "Arial");
cabecera.alinearTitulo('centrado');
cabecera.imprimirPropiedades();
