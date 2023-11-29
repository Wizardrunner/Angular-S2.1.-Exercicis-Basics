/*~~~~~~~~~~~Bloc 1.1: Arrow functions~~~~~~~~~~~*/
/*~~~~~~~~~~~Exercici 1~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Bloc 1.1: Arrow functions~~~~~~~~~~~');
console.log('~~~~~~~~~~~Exercici 1~~~~~~~~~~~');
console.log(`Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma.
Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.`);

//ƒ normal
let resultado;

function add(a = 1, b = 2) {
    resultado = a + b;
    return resultado;
}
console.log(add(resultado));

//ƒ =>
(a = 1, b = 2) => resultado = a + b;

console.log(`El resultat de la funció fletxa es ${resultado}`);

/*~~~~~~~~~~~Exercici 2~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 2~~~~~~~~~~~');
console.log(`Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber
que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.`);

//ƒ normal
let x;
function randomNumber() {
    x = Math.floor((Math.random() * 100) + 1);
    return x;
}
console.log(randomNumber(x));

//ƒ =>
() => x = Math.floor((Math.random() * 100) + 1);
console.log(`El resultat de la funció fletxa es ${x}`);

/*~~~~~~~~~~~Exercici 3~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 3~~~~~~~~~~~');
console.log(`Ús de 'this' en les funcions de fletxa:
Crea una classe person que tingui una propietat
name i una funció greet que utilitzi una funció de fletxa.
La funció ha d'imprimir una salutació que inclogui el nom de la persona.
Per exemple: console.log(Hola, \${this.name});.`);

//ƒ =>
class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log(`Hello, ${this.name}`);
    };
}
const person1 = new Person('Alice');
person1.greet();

//ƒ normal
class Country {
    constructor(name) {
        this.name = name;
        this.welcomeTo = function() {
            console.log(`Welcome to ${this.name}`);
        };
    }
}
const planet1 = new Country('Wonderland');
planet1.welcomeTo();

/*~~~~~~~~~~~Exercici 4~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 4~~~~~~~~~~~');
console.log(`Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti
un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.`);

// Defineixo el array de números
const numbersArray = [2, 3, 5, 7, 11, 13, 17, 19, 23];

// Defineixo la funció printNumbers usant una arrow function
const printNumbers = (numbers) => {
    // Uso un bucle for per a iterar pel array de números
    for (i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
  };
    
// I crido a la funció
printNumbers(numbersArray);

/*~~~~~~~~~~~Exercici 5~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 5~~~~~~~~~~~');
console.log(`Funció de fletxa amb 'setTimeout':
Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.`);

const printMessageAfterDelay = () => {
    // Ús setTimeout per a retardar l'execució de la arrow function
    setTimeout(() => {
      console.log("Aquest missatge s'imprimeix després de 3 segons.");
    }, 3000); // 3000 mil·lisegons (3 segons)
  };
  
  // I crido a la funció per a veure el missatge amb retard
  printMessageAfterDelay();