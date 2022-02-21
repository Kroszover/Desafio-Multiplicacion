

/*1. Crear una función para solicitar el número y validar antes de mostrar el resultado que
el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al rango, mostrar un mensaje al usuario: "número fuera del rango"*/
/*2. Utilizar las características propias de ES6 como let y arrow function para desarrollar el ejercicio.*/

//Peticion de numero al usuario:
let num1 = parseInt(prompt("ingrese un número entre 1 y 20"))

//Variable para el factorial
const facto1 = num => {
    if (num <=1) return 1
    return num * facto1 (num-1)
}

//Verificacion si el número efectivamente está entre 1 y 20 usando funcion tipo arrow
const verinum = (num) => {
    if(num >= 1 && num <= 20){
        //Ciclo for para calcular las tablas de multiplicar
        for (let i = 1; i <=num; i++){
            /*3. Generar y mostrar por consola el resultado de las operaciones.*/
            console.log (`${num} x ${i} = ${num*i}`);
        }
        /*4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado.*/
        for (let i = 1; i <=num; i++){
            console.log(`El Factorial del Número  ${i} es: ${facto1(i)}`);
        }
    }
    //Mensaje por si el número está fuera de rango.
    else{
        console.log("Número fuera del Rango")
    }
}
//Llamado a la funcion para verificar.
verinum(num1);








