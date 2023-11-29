/*~~~~~~~~~~~Bloc 1.6: Array loops~~~~~~~~~~~*/
/*~~~~~~~~~~~Exercici 1~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Bloc 1.6: Array loops~~~~~~~~~~~');
console.log('~~~~~~~~~~~Exercici 1~~~~~~~~~~~');
console.log(`forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];.`);

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(function(nom) {
    console.log(nom);
});

/*~~~~~~~~~~~Exercici 2~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 2~~~~~~~~~~~');
console.log(`for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];`);

for (const denominacio of noms) {
    console.log(denominacio);
}

/*~~~~~~~~~~~Exercici 3~~~~~~~~~~~*/
// Aquest exercici està repetit ja s'ha fet abans en l'exercici 2 del Bloc 1.5:

/*~~~~~~~~~~~Exercici 4~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 4~~~~~~~~~~~');
console.log(`for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.`);

let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };

// Utilitzo un bucle for...in per imprimir cada clau i el seu valor corresponent
for (let clau in obj) {
    if (obj.hasOwnProperty(clau)) {
        console.log(clau + ": " + obj[clau]);
    }
}

/*~~~~~~~~~~~Exercici 5~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 5~~~~~~~~~~~');
console.log(`for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];`);

let numeros = [1, 2, 3, 4, 5, 6];

for (const num of numeros) {
    console.log(num);

    // Atura el bucle quan es trobi el número 5
    if (num === 5) {
        break;
    }
}

/*~~~~~~~~~~~Exercici 6~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 6~~~~~~~~~~~');
console.log(`for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']`);

// Aquest array ja ho havia declarat abans 
// Utilitzo un bucle for...of amb entrades per a imprimir cada element i la seva posició
for (const [index, nom] of noms.entries()) {
    console.log(`Posició ${index}: ${nom}`);
}