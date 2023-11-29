/*~~~~~~~~~~~Bloc 1.2: Operador ternari~~~~~~~~~~~*/
/*~~~~~~~~~~~Exercici 1~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Bloc 1.2: Operador ternari~~~~~~~~~~~');
console.log('~~~~~~~~~~~Exercici 1~~~~~~~~~~~');
console.log(`Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com
a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir.
Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.`);

const potConduir = (edat) => {
    // Operador ternari per a verificar si l'edat és de 18 anys o més.
    return edat >= 18 ? "Pots conduir" : "No pots conduir";
  };
let usuariEdat = 20;
console.log(potConduir(usuariEdat)); // 'Pots conduir'
usuariEdat = 16;
console.log(potConduir(usuariEdat)); // 'No pots conduir'

/*~~~~~~~~~~~Exercici 2~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 2~~~~~~~~~~~');
console.log(`Ús amb operadors de comparació: Escriu una expressió que utilitzi
l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran.
Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.`);


function compareNumbers (num1, num2) {
    // Operador ternari per a comparar num1 i num2
    return num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
  };
  
const number1 = 23;
const number2 = 17;
console.log(compareNumbers(number1, number2)); // 'num1 és més gran'

/*~~~~~~~~~~~Exercici 3~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 3~~~~~~~~~~~');
console.log(`Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços
d'operadors ternaris per determinar si un número és positiu, negatiu o zero.`);

function comprovaNumero (numero) {
    // Operador ternari per a determinar si el número és positiu, negatiu o zero.
    const resultat = numero > 0 ? 'Positiu' : (numero < 0 ? 'Negatiu' : 'Zero');
    return resultat;
  };
  
console.log(comprovaNumero(7));   // 'Positiu'
console.log(comprovaNumero(-8));  // 'Negatiu'
console.log(comprovaNumero(0));   // 'Zero'


console.log(`Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c)
i utilitzi l'operador ternari per determinar el valor màxim.`);
// Aquí he provat de fer-ho amb una arrow function
const trobarMaxim = (a, b, c) => {
// Uso l'operador ternari per a determinar el valor màxim
const max = a > b ? (a > c ? a : c) : (b > c ? b : c);
return max;
};

const maxim = trobarMaxim(9, 13, -81);
console.log(maxim);  // 13
  
/*~~~~~~~~~~~Exercici 4~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 4~~~~~~~~~~~');
console.log(`Operador ternari dins un bucle:
Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array.
Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.`);

function parOImpar (numeros) {
    for (i = 0; i < numeros.length; i++) {
      // Uso l'operador ternari per a determinar si el número és parell o imparell
      const veredicte = numeros[i] % 2 === 0 ? 'parell' : 'imparell';
      console.log(`${numeros[i]} és ${veredicte}`);
    }
  };
  
const numerosArray = [8, 71, 2, 53, 42];
parOImpar(numerosArray);