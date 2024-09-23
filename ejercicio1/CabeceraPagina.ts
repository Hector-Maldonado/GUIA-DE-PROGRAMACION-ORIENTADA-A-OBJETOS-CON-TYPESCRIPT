class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(tituloParam:string, colorParam:string, fuenteParam:string,) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
        this.alineacion = ""; 
    }

    // Método para obtener las propiedades del título
    public obtenerPropiedades(): { tituloParam:string, colorParam:string, fuenteParam:string } {
        return {
            tituloParam: this.titulo,
            colorParam: this.color,
            fuenteParam: this.fuente
        };
    }

    // Método para alinear el título
    public alinearTitulo(alineacion: string): void {
        alineacion = alineacion.toLowerCase(); 
        
        if (alineacion === 'izquierda') {
            this.alineacion = 'izquierda';
        } else if (alineacion === 'derecha') {
            this.alineacion = 'derecha';
        } else if (alineacion === 'centrado') {
            this.alineacion = 'centrado';
        } else {
            console.log("Alineación no válida. Las opciones permitidas son: 'izquierda', 'derecha' o 'centrado'.");
        }
    }
    // Método para imprimir las propiedades 
    public imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

const cabecera = new CabeceraPagina("Holiwis", "#1b1639", "Arial");
cabecera.alinearTitulo('centrado');
cabecera.imprimirPropiedades();