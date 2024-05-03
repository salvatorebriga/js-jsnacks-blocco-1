"use strict"
let somma = 0;
for(let i = 0; i < 10; i++){
    somma += parseInt(prompt(`inserisci il ${i + 1} * numero`));
}
console.log('Totale: ' + somma);