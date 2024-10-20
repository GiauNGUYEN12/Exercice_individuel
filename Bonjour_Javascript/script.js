let firstname = prompt("Quel est votre nom?","")
function sayHello(firstname,hour){
    if (hour >= 18){
        console.log("Bonsoir "+ firstname+"!")
    }
    else{
let message = "Bonjour !"
message = "Bonjour " + firstname + "!"
document.querySelector('h1').innerText = message;
    }
} 
sayHello(firstname)
