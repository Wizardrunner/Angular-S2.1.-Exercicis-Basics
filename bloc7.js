/*~~~~~~~~~~~Bloc 1.7: Promises & Async/Await~~~~~~~~~~~*/
/*~~~~~~~~~~~Exercici 1 i 2~~~~~~~~~~~*/
console.log('~~~~~~~~~~~Bloc 1.7: Promises & Async/Await~~~~~~~~~~~');

// Crec una promesa
let laMevaPromesa = new Promise(function(resolve) {
  // Utilitzo «setTimeout» per a produir el retard
  setTimeout(function() {
      // Resol la promesa amb el valor desitjat
      resolve(`~~~~~~~~~~~Exercici 1 i 2~~~~~~~~~~~
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
Hola, món`);
  }, 2000); // 2000 mil·lisegons (2 segons)
});

// Utilitzo la promesa
laMevaPromesa.then(function(resolucio) {
  // Aquesta funció es crida quan es resol la promesa
  console.log(resolucio);
});

/*~~~~~~~~~~~Exercici 3~~~~~~~~~~~*/

// Funció que retorna una promesa
function salutacio(input) {
  return new Promise(function(resolve, reject) {
      // Utilitzo «setTimeout» per a produir el retard
      setTimeout(function() {
          // Comproveu si l'entrada és «Hola»
          if (input === 'Hola') {
              // Si el input es «Hola», resol la promesa amb un missatge d'èxit
              resolve(`~~~~~~~~~~~Exercici 3~~~~~~~~~~~
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
¡Hola, mundo!`);
          } else {
              // Si no, rebutja la promesa amb un missatge d'error
              reject(`Entrada no vàlida. S'esperava «Hola»`);
          }
      }, 3000); // 3000 mil·lisegons (3 segons)
  });
}

// Utilitzo la promesa
salutacio('Hola')
  .then(function(result) {
      console.log(result); // Sortida: ¡Hola, mundo!
  })
  .catch(function(error) {
      console.error(error); // Això no s'executarà en aquest cas
  });

  salutacio('Hallo')
  .then(function(result) {
      console.log(result); // Això no s'executarà en aquest cas
  })
  .catch(function(error) {
      console.error(error); // Sortida: Entrada no vàlida. S'esperava «Hola».
  });

/*~~~~~~~~~~~Exercici 4~~~~~~~~~~~*/

// Funció que retorna una promesa
function salutacioRetardada() {
    return new Promise(function(resolve) {
        // Utilitzo «setTimeout» per a produir el retard
        setTimeout(function() {
            // Resol la promesa amb el valor desitjat
            resolve(`~~~~~~~~~~~Exercici 4~~~~~~~~~~~
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
Hola, món`);
        }, 4000); // 4000 mil·lisegons (4 segons)
    });
}

// Funció asíncrona utilitzant async/await
async function salutacioAsync() {
    try {
        // Utilitzo 'await' per esperar el resultat de la promesa
        const result = await salutacioRetardada();

        // Imprimeix el resultat a la consola
        console.log(result);
    } catch (error) {
        // Gestiona els errors que es puguin produir durant l'operació asíncrona
        console.error(error);
    }
}

// Crido a la funció asíncrona
salutacioAsync();

/*~~~~~~~~~~~Exercici 5~~~~~~~~~~~*/

// Funció que retorna una promesa
function salutacioRetardadaAmbError() {
    return new Promise(function(resolve, reject) {
        // Utilitzo «setTimeout» per a produir el retard
        setTimeout(function() {

        // Simula una condició d'error
        reject(`~~~~~~~~~~~Exercici 5~~~~~~~~~~~
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.
S'ha produït un error`);
            // Resol la promesa amb el valor desitjat
            resolve(`Hola, món`);
        }, 5000); // 5000 mil·lisegons (5 segons)
    });
}

// Funció asíncrona utilitzant async/await
async function salutacioAsyncAmbErrors() {
    try {
        // Utilitzo 'await' per esperar el resultat de la promesa
        const resultat = await salutacioRetardadaAmbError();

        // Imprimeix el resultat a la consola
        console.log(resultat);
    } catch (error) {
        // Gestiona els errors que es puguin produir durant l'operació asíncrona
        console.error(error);
    }
}

// Crido a la funció asíncrona
salutacioAsyncAmbErrors();
