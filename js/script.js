const myName = prompt("Scrivi il tuo nome");
const myLastname = prompt("Scrivi il tuo cognome");
const myAge = prompt("Scrivi la tua età");
const myColor = prompt("Ora dimmi il tuo colore preferito");
const result = myName + myLastname + myAge + myColor + '21';
console.log(result);
document.getElementById('result').innerHTML ='La tua nuova password incredibilmente sicura è: ' + result;