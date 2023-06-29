//dati utente

let nome = prompt ("Inserisci il tuo nome:");
let surname = prompt ("Inserisci il tuo cognome:");
let favoriteColor = prompt ("Inserisci il tuo colore preferito:");
let number = 21;


//preparazione password

let password = nome + surname + favoriteColor + number;

//dati aggiuntivi per password più complessa

let numberOne = prompt ("Inserisci un numero:");
let numberTwo = prompt ("Inserisci un'altro numero:");

let passwordHard = nome + surname + favoriteColor + numberOne / numberTwo;

//password a console

console.log (`La tua password è:
 ${password}`);  

console.log (`La tua password più complessa è:
${passwordHard}`);

//stampo html

document.getElementById("password").innerHTML = password
document.getElementById("passwordHard").innerHTML = passwordHard
