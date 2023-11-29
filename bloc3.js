/*~~~~~~~~~~~Bloc 1.3: Callbacks~~~~~~~~~~~*/
/*~~~~~~~~~~~Exercici 1~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Bloc 1.3: Callbacks~~~~~~~~~~~');
console.log('~~~~~~~~~~~Exercici 1~~~~~~~~~~~');
console.log(`Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres:
un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.`);

// Defineixo la funció processar
function processar (numero, callback) {
// Invoco la funció callback, passant el número com a paràmetre
callback(numero);
};

function callbackFunction (num) {
console.log(`El número processat és: ${num}`);
};

const inputNumber = 73;
processar(inputNumber, callbackFunction);

/*~~~~~~~~~~~Exercici 2~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 2~~~~~~~~~~~');
console.log(`Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres:
dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres.
Després, crida calculadora amb una funció que faci la suma dels dos nombres.`);

// Defineixo la funció calculadora
function calculadora (num1, num2, callback) {
    // Invoco la funció callback amb els dos números com a paràmetres
    callback(num1, num2);
  };
  
// Funció callback per a la suma
function sumaCallback (a, b) {
    const resultat = a + b;
    console.log(`Suma: ${resultat}`);
  };
  
// Crido a la funció calculadora amb la suma de callback
  const numero1 = 17;
  const numero2 = 493;
  calculadora(numero1, numero2, sumaCallback);

/*~~~~~~~~~~~Exercici 3~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 3~~~~~~~~~~~');
console.log(`Ús de callbacks en funcions asíncrones:
Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback.
La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.`);


// Defineixo la funció esperarISaludar
function esperarISaludar (nombre, callback) {
    // Ús setTimeout per a esperar 2 segons
    setTimeout(() => {
      // Invoco la funció callback, passant el nom com a paràmetre
      callback(nombre);
    }, 2000); // 2000 mil·lisegons (2 segons)
  };
  
// Funció callback per a la salutació
function saludarCallback (nombre) {
console.log(`¡Hola ${nombre}!`);
};
  
// Crido a la funció esperarISaludar amb el callback de la salutació
const personName = "Ismael";
esperarISaludar(personName, saludarCallback);

/*~~~~~~~~~~~Exercici 4~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 4~~~~~~~~~~~');
console.log(`Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres:
un array i una funció de callback.
La funció processarElements ha d'invocar la funció de callback per cada element de l'array.`);

// Defineixo la funció processarElements
function processarElements (array, callback) {
    // Utilitzo un bucle per iterar a través de cada element de l'array
    for (const element of array) {
      // Invoco la funció de callback per a cada element
      callback(element);
    }
    /* El mateix però usant un for normal
      for (let i = 0; i < array.length; i++) {
      callback(array[i]);
      }
    */
  };
  
// Funció callback
function mostrarElement (element) {
console.log(`Processant element: ${element}`);
};

// Crido a la funció processarElements amb el callback de mostrarElement
const nombresCatalanArray = [1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900, 2674440, 9694845, 35357670, 129644790, 477638700, 1767263190, 6564120420, 24466267020, 91482563640, 343059613650, 1289904147324, 4861946401452, 18367353072152, 69533550916004];
processarElements(nombresCatalanArray, mostrarElement);
  
/*~~~~~~~~~~~Exercici 5~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Exercici 5~~~~~~~~~~~');
console.log(`Escriu una funció processarCadena que accepti dos paràmetres:
una cadena de caràcters i una funció de callback.
La funció processarCadena ha de convertir la cadena
a majúscules i llavors invocar la funció de callback amb la cadena transformada.`);

// Defineixo la funció processarCadena
function processarCadena (cadenaDentrada, callback) {
    // Converteixo la cadena a majúscules
    const cadenaMajuscules = cadenaDentrada.toUpperCase();
  
    // Invoco la funció de callback amb la cadena transformada
    callback(cadenaMajuscules);
  };
  
// Funció callback
function mostrarCadena (resultat) {
console.log(`Text convertit a majúscules: ${resultat}`);
};

// Crido a la funció processarCadena amb el callback de mostrarCadena
const textDentrada = "Supercalifragilisticoexpialidoso cuenta con 32 caracteres en castellano, mientras que en alemán cuenta con 37 letras: Superkalifragilistischexpiallegetisch";
processarCadena(textDentrada, mostrarCadena);