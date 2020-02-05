var chiffreMystere = Math.floor(Math.random()*100);
console.log(chiffreMystere);
var devine; 
var tentatives = 1;

do {
     devine = prompt("Je pense à quel chiffre?");
     tentative++;
     console.log(devine);
     if (devine < chiffreMystere) {
          alert("C'est plus !");
     }else if (devine > chiffreMystere) {
          alert("C'est moins !");
     }

}while(devine != chiffreMystere);


alert("Bravo, tu as deviné !");
console.log("Nombre de tentatives : " + tentatives);
