function isValidDate(dateEnString){
    //return !isNaN(Date.parse(dateEnString))
    const dateArray = dateEnString.split("/")
    //console.log(dateArray)
    const day = parseInt(dateArray[0], 10) //parseInt convertit une chiane de caractère en un nombre entier
    const month = parseInt(dateArray[1], 10)// 10 système numérique décimal est un système de base 10. chauque chiffre représente une puissance de 10
    const year = parseInt(dateArray[2], 10) //10 garantit une chaine sont correctement interprétées comm des nombres décimaux, même si il commence par 0 par ex
    if (month < 1 || month > 12 || day < 1 || day > 31|| year < 999 || year > 9999) {
        return false;
    }
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
        return false;
    }
    if (month === 2) { // Check for leap year
        const isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
        if (day > 29 || (day === 29 && !isLeap)) {
            return false;
        }
    }
    return true;
}
//console.log(isValidDate("19/12/2024"))

function isPalindrome(dateEnString){
    if (!isValidDate(dateEnString)){
        console.log("Merci d'ajouter une date valide")
        return false
     } 
    const cleanedDate = dateEnString.replace(/\//g, "")
    console.log(cleanedDate)
    const len = cleanedDate.length 
     for( let i = 0; i < len/2; i++){
        if ( cleanedDate[i] !== cleanedDate[len - 1 -i]){
            return false
        }
} 
return true
}
console.log(isPalindrome("19/13/2024"))
console.log(isPalindrome("11/02/2011"))
console.log(isPalindrome("12/12/2021"))
function getNextPalindromes(x){
    
}
getNextPalindromes(8)