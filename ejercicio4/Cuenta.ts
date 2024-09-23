class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombreParam: string, cantidadParam: number, tipoCuentaParam: string, numeroCuentaParam: string) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }

    depositar(cantidadDeposito: number): void {
        if (cantidadDeposito < 5.00) {
            console.log("El valor a depositar debe ser mayor a $5.00.");
        } else {
            this.cantidad += cantidadDeposito;
            console.log(`Se ha depositado correctamente: $${cantidadDeposito}. Saldo actual: $${this.cantidad}.`);
        }
    }

    retirar(valor: number): void {
        if (this.cantidad <= 5.00) {
            console.log("No hay suficiente efectivo en la cuenta.");
        } else if (valor < 5.00) {
            console.log("El valor a retirar debe ser mayor a $5.00.");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado: $${valor}. Saldo restante: $${this.cantidad}.`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}

//Ejemplo
const cuenta = new Cuenta("Hector Maldonado", 100.00, "Ahorro", "123456789");


cuenta.mostrarDatos();
cuenta.depositar(20.00);
cuenta.retirar(20.00);
cuenta.retirar(80.00);
cuenta.depositar(3.00);