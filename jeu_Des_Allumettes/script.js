let matchCount = 10
function removeMatch(matchToRemove){
    matchCount = matchCount - matchToRemove
}
function askPlayerNumberOfMatchToRemove(player){
    let matchToRemove = parseInt(prompt(`Combien d'allumette tu veux retirer?
Joueur ${player}.
Il reste ${matchCount} allumettes.`,""))
    if(matchToRemove != NaN && matchToRemove > 0 && matchToRemove < 7 && matchToRemove <= matchCount){
        removeMatch(matchToRemove)
        console.log("le nombre restant est", matchCount)
    }else{
        askPlayerNumberOfMatchToRemove()
    }
}
let nombreDeJouer = prompt("Combien de joueur tu veux?")
let turn = nombreDeJouer - 1

function selectPlayer(turn){
    console.log("le joueur est", turn % nombreDeJouer + 1)
    return turn % nombreDeJouer + 1
}
while (matchCount > 0){
    turn++ 
    askPlayerNumberOfMatchToRemove(selectPlayer(turn))
}
console.log("le jeu est fini")
alert (`le joueur ${selectPlayer(turn)} a gagné!!!`)