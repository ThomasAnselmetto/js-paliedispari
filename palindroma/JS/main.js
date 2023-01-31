// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



//chiedere parola all'utente una parola da valutare come palindroma
const stringa = prompt("Inserisci una parola per vedere se e' palindroma");

// call the function
const evocoLaFunzione = checkPalindrome(stringa);

console.log(evocoLaFunzione);

function checkPalindrome(stringa) {

    // cerco la lunghezza della stringa
    const lunghezzaParola = stringa.length;

    // loop through half of the stringa
    for (let i = 0; i < lunghezzaParola / 2; i++) {

        // check if first and last stringa are same
        if (stringa[i] !== stringa[lunghezzaParola - 1 - i]) {
            return "La parola non e' palindroma";
        }
    }
    return "la parola e'palindroma";
}
