var chiffreMystereInverse;
var min = 0;
var max = 100;
var guess = Math.floor(max/2);
var saisie = prompt("Est-ce que c'est " +  guess + " ?");
var tentatives = 0;

alert ("Choisis un nombre entre 1 et 100");
do {
     guess();
     saisie();
     tentatives++;
     console.log(guess);
     if (saisie = "+") {
        min = guess;
     }else if (saisie = "-") {
        max = guess;
    }
}while(guess != chiffreMystereInverse);


alert("J'ai gagné!");
console.log("Nombre de tentatives : " + tentatives);
alert("Nombre de tentatives : " + tentatives);
