// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no


let parolaUtente = prompt('inserisci un parola palidroma')


// se la parola inzia e finisce con le stesse parole console.log(parole è palidroma)

//come faccio a capire se hanno le stesse parole
let parolaMinuscola = parolaUtente.toLowerCase()

let wordSection = parolaMinuscola.split('')

let firstWord = wordSection[0]
let secondWord = wordSection[1]

let lastWord = wordSection[wordSection.length-1]
let pnLastWord = wordSection[wordSection.length-2]


if ((firstWord === lastWord) || (secondWord === pnLastWord)) {
    console.log('questa parola è polidroma')
} else{
    console.log('questa parola è normale')
}

console.log(parolaUtente, parolaMinuscola)
console.log(wordSection)
console.log(firstWord,secondWord,pnLastWord,lastWord)



