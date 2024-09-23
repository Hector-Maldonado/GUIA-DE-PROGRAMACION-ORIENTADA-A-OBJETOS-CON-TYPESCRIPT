class Calculadora {
  
    // Método para sumar dos números
    sumar(num1: number, num2: number): number {
      return num1 + num2;
    }
  
    // Método para restar dos números
    restar(num1: number, num2: number): number {
      return num1 - num2;
    }
  
    // Método para multiplicar dos números
    multiplicar(num1: number, num2: number): number {
      return num1 * num2;
    }
  
    // Método para dividir dos números
    dividir(num1: number, num2: number): number {
      if (num2 === 0) {
        throw new Error("No se puede dividir entre 0");
      }
      return num1 / num2;
    }
  
    // Método para calcular la potencia de un número
    potencia(base: number, exponent: number): number {
      return Math.pow(base, exponent);
    }
  
    // Método para calcular el factorial de un número
    factorial(n: number): number {
      if (n < 0) {
        throw new Error("El factorial no está definido para números negativos");
      }
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * this.factorial(n - 1);
    }
  }
  
  // Ejemplo de uso
  const calcular = new Calculadora();
  
  console.log("Suma:", calcular.sumar(5, 4));           
  console.log("Resta:", calcular.restar(8, 3));         
  console.log("Multiplicación:", calcular.multiplicar(5, 3)); 
  console.log("División:", calcular.dividir(10, 2));
  console.log("Potencia:", calcular.potencia(2, 3)); 
  console.log("Factorial:", calcular.factorial(5));   
  