const myName = prompt("Scrivi il tuo nome");
const myLastname = prompt("Scrivi il tuo cognome");
const myAge = prompt("Scrivi la tua età");
const result = myName + myLastname + myAge + '21';
console.log(result);
document.getElementById('result').innerHTML ='La tua nuova password incredibilmente sicura è: ' + result;