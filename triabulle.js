var min = parseInt(prompt("Valeur minimum du tri ?"));
var max = parseInt(prompt("Valeur max du tri?"));
console.log("Minimum : " + min);
console.log("Maximum : " + max);
var tableau = [];
var permut =true;    
var nbInversions = 0;
const longueurTableau = parseInt(prompt("Combien de nombres veux-tu mettre dans la liste?"));
console.log(longueurTableau);


for (var i= 0;i<longueurTableau;i++) {
     tableau.push(Math.floor(Math.random()*(max - min +1))+min);
}

console.log(tableau);

     while (permut != false) { 
     permut = false;
     for (var x =0; x <longueurTableau-1 ;x++ ) {
          if(tableau[x+1]< tableau[x]) {
               var a = tableau[x+1];
               tableau[x+1] = tableau[x];
               tableau[x] = a;
               permut = true;
               nbInversions++;
          }
     }
} 
console.log("Dans l'ordre croissant :");
console.log(tableau);
console.log("Nombre d'inversions : " + nbInversions);

permut = true;
nbInversions = 0;

while(permut != false) { 
     permut = false;
     for(var y=0; y <longueurTableau-1; y++) {
          if(tableau[y+1]>tableau[y]) {
               var b = tableau[y+1];
               tableau[y+1] = tableau[y];
               tableau[y] = b;
               permut = true;
               nbInversions++;
          }
     }
}

console.log("Dans l'ordre décroissant :");
console.log(tableau);
console.log("Nombre d'inversions : " + nbInversions);



//FONCTION NOMBRE ALEATOIRE PROPRE

 function nbAlea(min, max) {
     return Math.floor(Math.random() * (max - min+1)) + min;
     };

