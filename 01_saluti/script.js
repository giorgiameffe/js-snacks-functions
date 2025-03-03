/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function string (word){

    const helloPlusUser = word + ' ' + userName;
    return helloPlusUser;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(string('Ciao'));

//Risultato atteso se si passa 'Mario': // ciao Mario
