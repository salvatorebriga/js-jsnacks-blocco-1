"use strict"

let parola1 = prompt();
let parola2 = prompt();

if(parola1.length > parola2.length){
    console.log(parola1);
}else if(parola1.length < parola2.length){
    console.log(parola2);
}else{
    console.log(parola1 + ' ' + parola2);
}