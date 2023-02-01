// Pari e Dispari

// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)

// Dichiariamo chi ha vinto.


// l'utente sceglie pari o dispari
let sceltaUtente = prompt("scegli pari o dispari")
if (sceltaUtente != "pari" && sceltaUtente != "dispari") {
    sceltaUtente = "pari";
    alert(`ho scelto "pari" per te`)
}
let sceltaNumeroUtente = parseInt(prompt("inserisci un numero da 1 a 5!"));

const pcNumber = generateRandomNumber(1, 5);

//sommiamo i due numeri 

let gameSum = pcNumber + sceltaNumeroUtente;

// dichiariamo chi ha vinto

let userWon = false;
if (isEven(gameSum)) {
    if (sceltaUtente == "pari") {
        userWon = true;
    } else {
        if (sceltaUtente == "dispari") {
            userWon = true;
        }
    }

    if (userWon = true) {
        console.log("ha vinto l'utente")

    } else {
        console.log("ha vinto il pc")
    }



}





//TODO: funzione che genera un numero random.
// utilizzo una formula di un numero in un range

function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber;

}


//TODO: funzione che dice se un numero e' pari o dispari
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false

}


console.log(isEven(5));







