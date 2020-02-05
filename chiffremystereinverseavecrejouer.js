var rejouer; 
function jeu () {
     alert ("Choisis un nombre entre 1 et 100");
     var min = 0;
     var max = 100;
     var guess;
     var saisie;
     var tentatives = 0;
   
do{

     guess = Math.floor(((max - min) / 2) + min);
     saisie = prompt("Est-ce que c'est " +  guess + " ?");
     console.log(guess);
     tentatives++;
     if (saisie == "+") {
        min = guess;
        console.log("Le minimum est maintenant : " + min);
     }else if (saisie == "-") {
        max = guess;
        console.log("Le maximum est maintenant : " + max);
     }
}while(saisie != "=");

console.log("Le chiffre à deviner était : " + guess);
console.log("Nombre de tentatives : " + tentatives);
alert("Nombre de tentatives : " + tentatives);
rejouer = prompt("J'ai gagné! Tu veux rejouer ?");
}

do {
     jeu();
}while (rejouer != "non") ;

alert("Au revoir!");

