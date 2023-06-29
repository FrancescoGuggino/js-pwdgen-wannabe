//dati utente

let name = prompt ("Inserisci il tuo nome:");
let surname = prompt ("Inserisci il tuo cognome:");
let favoriteColor = prompt ("Inserisci il tuo colore preferito:")
let number = 21;



//preparazione password

let password = ${name + surname + favoriteColor + number};


//password a console

console.log(password);
