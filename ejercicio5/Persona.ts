abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }

    public verificarEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    public abstract mostrarDatos(): void; // Método abstracto
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number) {
        super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam);
        this.sueldo = 0; // Inicializamos el sueldo a 0
    }

    public cargarSueldo(sueldoParam: number): void {
        this.sueldo = sueldoParam;
    }

    public imprimirSueldo(): void {
        console.log(`Sueldo de ${this.nombre} ${this.apellido}: $${this.sueldo}`);
    }

    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.verificarEdad();
    }
}

// Definición de un objeto de la clase Empleado
const empleado = new Empleado("Hector", "Maldonado", "Calle 123", "2682-1234", 30);
empleado.cargarSueldo(2500);
empleado.mostrarDatos();
empleado.imprimirSueldo();