console.log('funzia');


/*
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

// Tramite form, chiedere quant km sono da paercorrere
// età passeggero
// 0,21 € al km
// se minorenne, sconto 20%
// se over 65, sconto 40%

// dichiaro costanti che prendo dal file html

const nameEL = document.getElementById('name-field')
const kmEL = document.getElementById('km-field')
const buttonEL = document.getElementById('button')
const km = Number(0.21)
console.log(km);



buttonEL.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("Nome:", nameEL.value)
    console.log("Km:", kmEL.value)
})