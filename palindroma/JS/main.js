// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedi all'utente di inserire una parola

const userWord = prompt("inserisci una parola per vedere se e' palindroma!");

parolaInvertita = invertiLaParola(userWord);

// se la parola data dall'user sara' uguale alla parola invertita sara' palindroma in caso contrario non lo sara'

if (userWord == parolaInvertita) {
    console.log("la parola " + userWord + " è palindroma!")
} else {
    console.log("la parola " + userWord + " non è palindroma!")
}


// crea una funzione che inverta la parola

function invertiLaParola(string) {
    parolaInvertita = userWord;

    let i = string.length - 1;

    // finche la variabile prendi le lettere della parola partendo dalla fine e decrementale

    while (i >= 0) {
        parolaInvertita += parolaInvertita[i];
        i--;
        console.log(parolaInvertita);
    }

    return parolaInvertita;
}