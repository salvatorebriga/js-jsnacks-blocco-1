"use strict"
let somma = 0;
let numero = 0;
for(let i = 0; i < 10; i++){
    numero = parseInt(prompt(`inserisci il ${i + 1}* numero, non inserire caratteri!`));
    if(isNaN(numero)){
        i--;
    }else{
        somma += numero;
    }
}
console.log('Totale: ' + somma);