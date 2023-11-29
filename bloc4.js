/*~~~~~~~~~~~Bloc 1.4: Rest & Spread operators~~~~~~~~~~~*/
/*~~~~~~~~~~~Exercici 1~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Bloc 1.4: Rest & Spread operators~~~~~~~~~~~');
console.log('~~~~~~~~~~~Exercici 1~~~~~~~~~~~');
console.log(`Operador Spread en Arrays: Crea dues arrays, array1 i array2.
Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.`);

// Creo dos arrays
const array1 = [9, 8, 7];
const array2 = [6, 5, 4];

// Utilitzo l'operador spread per combinar elements de array1 i array2 en un nou array
const arrayCombinat = [...array1, ...array2];

// Imprimeixo el resultat
console.log(arrayCombinat);

/*~~~~~~~~~~~Exercici 2~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 2~~~~~~~~~~~');
console.log(`Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.`);

function suma(...numeros) {
// Utilitzo el mètode de reducció per a sumar tots els nombres del array
return numeros.reduce(function(sum, numero) { 
   return sum + numero;
 }, 0);
}

const sumatori = suma(1, 2, 3, 4, 5);

// Imprimeixo el resultat
console.log(sumatori); // 15

/*~~~~~~~~~~~Exercici 3~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 3~~~~~~~~~~~');
console.log(`Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.`);

// Crec el object1
const object1 = {
    propietat0: 'valor0',
    propietat1: 'valor1',
    propietat2: 'valor2'
  };
  
// Crec el object2 com a còpia de l'objecte1 utilitzant l'operador de spread
const object2 = { ...object1 };

// Modifico una propietat a l'objecte2
object2.propietat1 = 'valorModificat';

// Imprimeixo els objectes original i modificat
console.log('Object1 original:', object1);
console.log('Object2 modificat:', object2);
  

console.log('~~~~~~~~~~~Exercici 4~~~~~~~~~~~');
console.log(`Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.`);

const miArray = [0, 1, 2, 3, 4, 5, 6, 7];

// Utilitzo destructuring i l'operador rest per assignar els dos primers elements a variables i la resta d'elements a una tercera variable
const [primerElement, segonElement, ...restaDeElements] = miArray;

console.log('Primer Element:', primerElement);
console.log('Segon Element:', segonElement);
console.log('Resta de Elements:', restaDeElements);

console.log('~~~~~~~~~~~Exercici 5~~~~~~~~~~~');
console.log(`Spread en Funcions: Crea una funció que accepti cinc arguments. Després, crea una array amb cinc elements i crida la funció utilitzant l'operador spread amb aquesta array.`);

function cincArguments(argument1, argument2, argument3, argument4, argument5) {
    console.log(`Arguments: ${argument1}, ${argument2}, ${argument3}, ${argument4}, ${argument5}`);
}

const pentaArray = [0, 1, Math.E, Math.PI, Math.sqrt(-1)];
cincArguments(...pentaArray);

console.log('~~~~~~~~~~~Exercici 6~~~~~~~~~~~');
console.log(`Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.`);

// Creo dos objectes amb propietats diferents
const sistemaSolarInterior = { Mercuri: 1, Venus: 2, Terra: 3, Mart: 4 };
const sistemaSolarExterior = { Jupiter: 5, Saturn: 6, Ura: 7, Neptu: 8 };

// Utilitzo l'operador de difusió per a fusionar els dos objectes en un de nou
const sistemaSolar = { ...sistemaSolarInterior, ...sistemaSolarExterior };

console.log('Sistema Solar:', sistemaSolar);