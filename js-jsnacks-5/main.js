"use strict"
const somma = [];
let numero = 0;
for(let index = 0, i = 0; i < 6; i++){
    numero = parseInt(prompt(`inserisci il ${i + 1}* numero, non inserire caratteri!`));
    if(isNaN(numero)){
        i--;
    }else if(numero % 2 === 1){
        somma[index] = numero;
        index ++;
    }
}
console.log('Numeri dispari: ' + somma);