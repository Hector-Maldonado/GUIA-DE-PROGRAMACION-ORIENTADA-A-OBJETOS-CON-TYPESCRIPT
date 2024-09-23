var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipoCuentaParam, numeroCuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }
    Cuenta.prototype.depositar = function (cantidadDeposito) {
        if (cantidadDeposito < 5.00) {
            console.log("El valor a depositar debe ser mayor a $5.00.");
        }
        else {
            this.cantidad += cantidadDeposito;
            console.log("Se ha depositado correctamente: $".concat(cantidadDeposito, ". Saldo actual: $").concat(this.cantidad, "."));
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad <= 5.00) {
            console.log("No hay suficiente efectivo en la cuenta.");
        }
        else if (valor < 5.00) {
            console.log("El valor a retirar debe ser mayor a $5.00.");
        }
        else {
            this.cantidad -= valor;
            console.log("Se ha retirado: $".concat(valor, ". Saldo restante: $").concat(this.cantidad, "."));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de cuenta: ".concat(this.numeroCuenta));
    };
    return Cuenta;
}());
//Ejemplo
var cuenta = new Cuenta("Hector Maldonado", 100.00, "Ahorro", "123456789");
cuenta.mostrarDatos();
cuenta.depositar(20.00);
cuenta.retirar(20.00);
cuenta.retirar(80.00);
cuenta.depositar(3.00);
