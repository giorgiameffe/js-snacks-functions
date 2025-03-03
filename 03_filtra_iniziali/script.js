/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const newArray = [];

function firstLetterArrow (firstArray, letterString) {

    for (let i = 0; i < firstArray.length; i++) {

        if(firstArray[i].startsWith(letterString)) {

            newArray.push(firstArray[i]);
        }
        
    }

    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const result = firstLetterArrow(names, 'A');
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


