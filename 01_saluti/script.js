/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

function string (word){

    const helloPlusUser = word + ' ' + userName;
    return helloPlusUser;

}

// Invoca la funzione qui e stampa il risultato in console

const result = string('Ciao');
console.log(result);

//Risultato atteso se si passa 'Mario': // ciao Mario



// versione arrow fuction

// Dichiara la funzione qui.

const helloUser = (word) => {

    const stringPlusString = word + ' ' + userName;
    return stringPlusString;

}

// Invoca la funzione qui e stampa il risultato in console

const secondResult = helloUser('Ciao');
console.log(secondResult);

//Risultato atteso se si passa 'Mario': // ciao Mario




