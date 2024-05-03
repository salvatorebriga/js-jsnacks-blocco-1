"use strict"

/*dichiarazione variabili globali*/
let input = false;
let numeroIterazioni = 0;
let somma = 0;

/*controllo dell'input tramite un ciclo per falso*/
do{

    numeroIterazioni = parseInt(prompt('Quanti numeri vuoi generare?'));

    if(isNaN(numeroIterazioni)){
        input = false;
    }else{
        input = true;
    }

}
while(input === false);

/*algoritmo di randomizzazione*/
for(let i = 0, randomN = 0; i < numeroIterazioni; i++){
    randomN = Math.floor(Math.random() * 100);
    somma += randomN;
    console.log(`Numero ${i + 1}: ${randomN}`);
}

/*calcoli*/
console.log('La somma è: ' + somma);
console.log('La media è: ' + somma/numeroIterazioni.toFixed(2));