//dati utente

let nome = prompt ("Inserisci il tuo nome:");
let surname = prompt ("Inserisci il tuo cognome:");
let favoriteColor = prompt ("Inserisci il tuo colore preferito:")
let number = 21;



//preparazione password

let password = nome + surname + favoriteColor + number;


//password a console

console.log (`La tua password è:
 ${password}`);

//stampo html

document.getElementById("password").innerHTML = password
