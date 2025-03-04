/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function createNewArray (list) {

    const newArray = [];
    
    for (let i = 0; i < list.length; i++) { 

        const element = list[i];
        const firstLetter = element[0];
        newArray.push(firstLetter);
    }
    
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const result = createNewArray(names);
console.log(result);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]



// Versione con arrow fuctions

// Dichiara la funzione qui.

const singleLetterArray = (list) => {

    const newArray = [];
    
    for (let i = 0; i < list.length; i++) { 

        const element = list[i];
        const firstLetter = element[0];
        newArray.push(firstLetter);
    }
    
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const secondResult = createNewArray(names);
console.log(secondResult);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

