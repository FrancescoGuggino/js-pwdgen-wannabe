//dati utente

let nome = prompt ("Inserisci il tuo nome:");
let surname = prompt ("Inserisci il tuo cognome:");
let favoriteColor = prompt ("Inserisci il tuo colore preferito:");
let number = 21;



//preparazione password

let password = nome + surname + favoriteColor + number;

//dati aggiuntivi per password più complessa

let numberOne = prompt ("Inserisci un numero:");
let

//password a console

console.log (`La tua password è:
 ${password}`);  

//stampo html

document.getElementById("password").innerHTML = password
