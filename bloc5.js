/*~~~~~~~~~~~Bloc 1.5: Array transformations~~~~~~~~~~~*/
/*~~~~~~~~~~~Exercici 1~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Bloc 1.5: Array transformations~~~~~~~~~~~');
console.log('~~~~~~~~~~~Exercici 1~~~~~~~~~~~');
console.log(`Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.`);

// Array original
let arrayOriginal = [1, 2, 3, 4];

// Array nou per a emmagatzemar els quadrats
let arrayQuadrat = [];

// Bucle a través de l'array original
for (i = 0; i < arrayOriginal.length; i++) {
    // Elevo al quadrat cada element i el fico en el nou array
    arrayQuadrat.push(arrayOriginal[i] ** 2);
}

// Utilitzo la funció map per a crear un array nou que contingui els quadrats
let arrayQuadratMap = arrayOriginal.map(function (element) {
  return element ** 2;
});

console.log(`Array dels quadrats usant un for normal `,arrayQuadrat);
console.log(`Array dels quadrats usant map `,arrayQuadratMap);

/*~~~~~~~~~~~Exercici 2~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 2~~~~~~~~~~~');
console.log(`Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nou array que només contingui els números parells.`);

let arrayParells = arrayOriginal.filter(function (element) {
  return element % 2 === 0;
});

console.log(`Array dels nombres parells `,arrayParells);

/*~~~~~~~~~~~Exercici 3~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 3~~~~~~~~~~~');
console.log(`Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.`);

let arrayGran = [1, 10, 8, 11];

let majorDeTots = arrayGran.find(function (element) {
    return element > 10;
});

console.log(majorDeTots);

/*~~~~~~~~~~~Exercici 4~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 4~~~~~~~~~~~');
console.log(`Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.`);

let arrayPerSumar = [13, 7, 8, 21];

// Utilitzo la funció de reducció per calcular la suma total
let sumaTotal = arrayPerSumar.reduce(function (acumulador, valorActual) {
    return acumulador + valorActual;
}, 0); // El 0 aquí és el valor inicial de l'acumulador

console.log(sumaTotal);

/*~~~~~~~~~~~Exercici 5~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 5~~~~~~~~~~~');
console.log(`Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
Filtra els nombres majors o iguals a 10.
Multiplica cada nombre filtrat per 2.
Calcula la suma dels nombres filtrats i multiplicats per 2.
La funció ha de retornar el resultat de la suma.`);

let arrayDonat = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

let solucioFinal = arrayDonat.filter(numero => numero >= 10).map(numero => numero * 2).reduce((acumulador, numero) => acumulador + numero, 0) * 2;

console.log(solucioFinal);

/*~~~~~~~~~~~Exercici 6~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 6~~~~~~~~~~~');
console.log(`Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament.`);

var arrayMayoresDe10 = [11, 12, 13, 14];

// Comprova si tots els elements són més grans de 10 utilitzant every
let totsMajorsQue10 = arrayMayoresDe10.every(num => num > 10);

// Comprova si alguns elements són més grans de 10 utilitzant some
let algunsMajorsQue10 = arrayMayoresDe10.some(num => num > 10);

console.log("Tots els elements superiors a 10:", totsMajorsQue10);
console.log("Alguns elements superiors a 10:", algunsMajorsQue10);