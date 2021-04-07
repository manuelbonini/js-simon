// Generatore dei numeri
var numbers = [];
// puo generare numeri tra 1 e maxNumeri
var maxNumeri = 100;
// totale dei numeri da memorizzare
var totNumbers = 5;

// Ciclo while finchè non riempie l'array con 5 numeri che non siano uguali
while(numbers.length < totNumbers) {
    var numberGenerated = numeroCasuale(maxNumeri);
    if(numbers.includes(numberGenerated) == false) {
        numbers.push(numberGenerated);
    }
}

// funzione che genera un numero casuale
function numeroCasuale(max) {
    return Math.floor(Math.random() * max) + 1;
}

// console.log(numbers);

// alert con i 5 numeri
alert('I numeri da memorizzare sono:' + numbers);

// creo un timer di 30 secondi 
var milliseconds = 30000;
var userNumbers = [];

setTimeout(askUser, milliseconds);

function askUser() {
    // chiedo all'utente di inserire i 5 numeri dopo 30 secondi
    var userNumbers = [];
    var number = 0;

    while(userNumbers.length < totNumbers) {
        number = parseInt(prompt('Inserisci un numero'));
        userNumbers.push(number);
        // console.log(userNumbers);
    }
    console.log(userNumbers);

    var guessNumbers = [];
    var sum = 0;
    for( i = 0 ; i < totNumbers ; i++) {
        if(numbers.includes(userNumbers[i]) == true) {
            guessNumbers.push(numbers[i]);
            sum++;
            // console.log(guessNumbers);
        }
    }

    if(sum == totNumbers) {
        alert('Hai indovinato tutti i numeri e sono: ' + guessNumbers);

    }else {
        alert('Hai indovintao ' + sum + ' e sono: ' + guessNumbers);
    }
}