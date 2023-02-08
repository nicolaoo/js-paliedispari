// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Comunichiamo all’utente chi ha vinto. (decidete voi come)  


let pariDispariUser = prompt('scegli tra pari e dispari') 
let numUser = parseInt(prompt('segli un numero da 1 a 5'))



let numPc = Math.floor(Math.random() * (5 - 1 + 1) + 1);

let sommaPcUser = numPc + numUser

let restoSomma = sommaPcUser % 2

if (restoSomma === 0){
    console.log(numUser, numPc, sommaPcUser, 'il numero è pari')
}else if (restoSomma === 1){
    console.log(numUser, numPc, sommaPcUser, 'il numero è dispari')
}

if ((restoSomma === 0) && (pariDispariUser === 'pari')){
    console.log('hai vinto tu!!')
    document.getElementById('winner-is').innerHTML = 'Hai vinto'
} else if ((restoSomma === 1) && (pariDispariUser === 'dispari')){
    console.log('hai vinto')
    document.getElementById('numero-is').innerHTML = 'Hai vinto' 
} else {
    console.log('hai perso')
    document.getElementById('winner-is').innerHTML = 'Hai perso'
}

document.getElementById('numero-user').innerHTML = numUser
document.getElementById('numero-pc').innerHTML = numPc
document.getElementById('risultato').innerHTML = sommaPcUser + ' ' + pariDispariUser



console.log(pariDispariUser, sommaPcUser)