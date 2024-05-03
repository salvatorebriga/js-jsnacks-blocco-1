"use strict"

let numero = 0;
let ultimaCifra = 0;
let somma = 0;
let input = false;

do{

    numero = parseInt(prompt('inserisci un numero da più cifre'));

    if(isNaN(numero)){
        input = false;
    }else{
        input = true;
    }

}
while(input === false);

while(numero >= 1){
    ultimaCifra = numero % 10;
    somma += ultimaCifra;
    numero = (numero - ultimaCifra) / 10;
}

console.log('La somma delle cifre è: ' + somma);