Array.prototype.mediaAritmetica = function() {

    if (this.length === 0) return 0;

    
    let suma = this.reduce((acumulador, valor) => acumulador + valor, 0);

    return suma / this.length;
};


let numeros = [10, 20, 30, 40, 50];
console.log("Media (10,20,30,40,50):", numeros.mediaAritmetica());  

let uno = [100];
console.log("Media (100):", uno.mediaAritmetica());  

let vacio = [];
console.log("Media ([]):", vacio.mediaAritmetica());  

let decimales = [1.5, 2.5, 3.5];
console.log("Media (decimales):", decimales.mediaAritmetica());

let mixto = [10, "hola", 30];
console.log("Media (mixto):", mixto.mediaAritmetica());
