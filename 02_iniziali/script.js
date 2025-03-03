/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

const newArray = [];

function createNewArray (arrayOne,arrayTwo) {

    
    for (let i = 0; i < arrayOne.length; i++) { 
        
        const firstLetter = arrayOne[i].substring(0,1);
        arrayTwo.push(firstLetter);
    }
    
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const result = createNewArray(names,newArray);
console.log(result);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]



// Versione con arrow fuctions

const secondArray = [];

// Dichiara la funzione qui.

const singleLetterArray = (arrayOne,arrayTwo) => {

    for (let i = 0; i < arrayOne.length; i++) { 
        
        const firstLetter = arrayOne[i].substring(0,1);
        arrayTwo.push(firstLetter);
    }
    
    return secondArray;
}

// Invoca la funzione qui e stampa il risultato in console

const secondResult = createNewArray(names,secondArray);
console.log(secondResult);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

