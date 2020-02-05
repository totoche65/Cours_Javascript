const fruits = [];   //créer le tableau
fruits.push("banane");   //rajouter une valeur en dernier
fruits["toto"] = "kiwi";       //on peut attribuer une valeur à l'index qu'on veut
fruits['coques'] = ['noisettes', 'noix', 'pistaches', 'cacahuètes'];  //on crée un tableau DANS le premier tableau
fruits['rouges'] = ['fraises', 'framboises'];           
fruits['exotiques'] = ['ananas', 'papaye', 'litchi'];

fruits['coques'][1] = 'noix de cajou' ;   //rajoute en position index 1 de coques
console.log(fruits);       
console.log(fruits['toto']);          // affiche "kiwi"

fruits['coques'].forEach (function(value, index) {
     console.log(value, index);               //affiche la valeur & l'index de chaque élément du tableau 'coques'
})

fruits['coques'].sort();     //trier les valeurs du tableau dans l'ordre alphabétique

console.log(fruits['coques']);      //affiche les valeurs de "coques"

console.log(fruits ['coques']['1']);      //affiche "noisettes" car c'est la valeur de l'index 1


//NOM PRENOM GENRE & afficher


const gens = [];
const personnes = [];
const hommes = [];
const femmes = [];

var longueur = parseInt(prompt("Combien de personnes vas-tu rajouter?"));

for (let i= 0; i<=longueur; i++) {
     let personne = [];
     personne['prenom'] = prompt("Comment s'appelle-t-elle?");
     personne['nom'] = prompt("Quel est son nom de famille?");
     personne['genre'] = prompt("C'est un homme ou une femme?");
     personnes.push(personne);
}

console.log(personnes);

personnes.forEach( function (valeur) {
     console.log(valeur['prenom']);
});

/*
personnes.forEach(function (valeur) {
     if (personne['genre'] = 'homme') {
          hommes.push(personne);
     } else if (personne['genre']= 'femme') {
          femmes.push(personne);
     }
});
*/
/*
console.log(hommes);
console.log(femmes);



/*CORRECTION XAVIER */
//On affiche les hommes et les femmes séparément 

personnes.forEach(function (ligne) {
     console.log(ligne);
     if (ligne['genre'] == 'homme') {
          hommes.push(ligne);
     }else{
          femmes.push(ligne);
     }
});

console.log("Les hommes : ");
console.log(hommes);
console.log("Les femmes : ");
console.log(femmes);
