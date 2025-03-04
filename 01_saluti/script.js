/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

function string (name){

    const helloPlusUser = 'Ciao' + ' ' + name;
    return helloPlusUser;

}

// Invoca la funzione qui e stampa il risultato in console

const result = string('Giorgia');
console.log(result);

//Risultato atteso se si passa 'Mario': // ciao Mario



// versione arrow fuction

// Dichiara la funzione qui.

const helloUser = (name) => 'Ciao' + ' ' + name;

// Invoca la funzione qui e stampa il risultato in console

const secondResult = helloUser ('Mario');
console.log(secondResult);

//Risultato atteso se si passa 'Mario': // ciao Mario




