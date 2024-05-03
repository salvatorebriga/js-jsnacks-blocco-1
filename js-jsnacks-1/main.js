"use strict"

const parola1 = prompt();
const parola2 = prompt();

if(parola1.length > parola2.length){
    console.log(parola1);
}else if(parola1.length < parola2.length){
    console.log(parola2);
}else{
    console.log(parola1 + ' ' + parola2);
}