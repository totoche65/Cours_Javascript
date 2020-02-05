
function getPersonnes(){
    const person = [];
    person.push(["Rouze","Martine","female"]);
    person.push(["Carrière","Lowell","male"]);
    person.push(["Lavallée","Philip","male"]);
    person.push(["Tougas","Honoré","male"]);
    person.push(["Rossignol","Marveille","female"]);
    person.push(["Deschamps","Benoît","male"]);
    person.push(["Bussière","Adèle","female"]);
    person.push(["Course","Isaac","male"]);
    person.push(["Caisse","Christophe","male"]);
    person.push(["Montminy","Curtis","male"]);
    person.push(["Rhéaume","Huon","male"]);
    person.push(["Riel","Eliot","male"]);
    person.push(["Vincent","Loyal","male"]);
    person.push(["Bonenfant","Percy","male"]);
    person.push(["Coudert","Romaine","female"]);
    person.push(["Sorel","Roslyn","male"]);
    person.push(["Bordeleau","Eustache","male"]);
    person.push(["Laux","Vincent","male"]);
    person.push(["Lavallée","Emmanuel","male"]);
    person.push(["Boulanger","Estelle","female"]);
    person.push(["Champagne","Adèle","female"]);
    person.push(["Chalifour","Archaimbau","male"]);
    person.push(["Panetier","Grégoire","male"]);
    person.push(["Simard","Medoro","male"]);
    person.push(["Lacharité","D'Arcy","male"]);
    person.push(["Jetté","Guy","male"]);
    person.push(["Paquet","Lowell","male"]);
    person.push(["Bertrand","Anne","female"]);
    person.push(["Lamoureux","Agramant","male"]);
    person.push(["Pelletier","Bevis","male"]);
    person.push(["Labbé","Berangaria","female"]);
    person.push(["Chrétien","Faye","female"]);
    person.push(["Chalut","Gradasso","male"]);
    person.push(["Sirois","Dorene","female"]);
    person.push(["Cliche","Beltane","male"]);
    person.push(["Émond","Bernadette","female"]);
    person.push(["Paquin","Felicienne","female"]);
    person.push(["Garcia","Tristan","male"]);
    person.push(["Davignon","Marveille","female"]);
    person.push(["Chenard","Avelaine","female"]);
    person.push(["Monjeau","Raoul","male"]);
    person.push(["Couet","Adèle","female"]);
    person.push(["Duffet","Fabrice","male"]);
    person.push(["Petrie","Patrice","female"]);
    person.push(["Plouffe","Byron","male"]);

    let nbrPerson = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

    while(person.length>nbrPerson){
        person.pop();
    }

    return person;
}

console.log(getPersonnes());

//DEBUT EG

const liste = getPersonnes();
const total = [];
let couleurs = document.getElementsByClassName("couleurs");
let bleus = document.getElementById("bleus");
let rouges = document.getElementById("rouges");
let verts = document.getElementById("verts");
let jaunes = document.getElementById("jaunes");
let femmes = [];
let hommes = [];

const listeCouleurs = ['listeBleus', 'listeRouges', 'listeVerts', 'listeJaunes'];
//const listeBleus = [];
//const listeRouges = [];
//const listeVerts = [];
//const listeJaunes = [];

/*let afficherBase = document.querySelectorAll("ul li");
for(let i=0;i<afficherBase.length ; i++) {
    console.log(afficherBase[i].textContent);     //affiche le CONTENU de chaque <li> ds la console
    afficherBase[i].textContent = "nouvelle personne modifiée";   //remplace le contenu des <li>
}

let newBleu = listeBleus.push("you");
console.log(listeBleus);
*/
//console.log(liste);

let parite = function (nombrePersonnes) {
  for (let i=0 ; i<liste.length; i++) {
      if (liste[i][2] === "female") {    //d'abord trier par genre
        femmes.push(liste[i]);       //rajouter les femmes ds un tableau
      }else {
        hommes.push(liste[i]);       //rajouter les hommes ds un tableau
      }
  }
  console.log(femmes.length);
  console.log(hommes.length);
  console.log(liste.length);
  //console.log(femmes);  //liste des femmes
  //console.log(hommes);  //liste des hommes
}

parite();

//puis répartir équitablement (moduLo?)

let repartirFemmes = function (nombreFemmes) {
    for (let i = 0; i<femmes.length ; i++){   //répartir les femmes : créer des <li> qui se rajoutent à chaque couleur : COMMENT DIVISER LES COULEURS? Mathrandom???
      jaunes.innerHTML += "<li class='femmes'></li>";               //rajouter TOUTES LES FEMMES dans la liste jaune e
      let femmesLi = document.getElementsByClassName("femmes");
      let contenuFemme = femmesLi[i].textContent += femmes[i][1];                    //rajouter le CONTENU du tableau (le prénom) dans le HTML
      //console.log(femmesLi[i].textContent);
      console.log(contenuFemme);
      while (femmes.length !== 0 ) {
        listeCouleurs[i].push(contenuFemme);
        //let cas = ["1","2","3","4"];
        //let nbAleatoire = cas[Math.floor(Math.random()*4)];
        //console.log(nbAleatoire);
        /*switch (couleurs) {
          case r : listeBleus.push(contenuFemme);
          console.log("je rajoute une femme chez les bleus");
          break;
          case 2 : listeRouges.push(contenuFemme);
          console.log("je rajoute une femme chez les rouges");
          break;
          case 3 : listeVerts.push(contenuFemme);
          console.log("je rajoute une femme chez les verts");
          break;
          case 4 : listeJaunes.push(contenuFemme);
          console.log("je rajoute une femme chez les jaunes");
          break;
          default:
        } */
        femmes.pop();
      }
      //console.log(listeBleus);
    }
}


//console.log(femmes);

/*  let repartirHommes = function (nombreHommes) {
  for (let i = 0; i<hommes.length; i++) {
    bleus.innerHTML += "<li class='hommes'></li>";
    let hommesLi = document.getElementsByClassName("hommes");
    hommesLi[i].textContent += hommes[i][1];
  }
}  */
repartirFemmes();
//repartirHommes();




/*
for (let i=0; i<person.length; i++) {
  listeBleus.push(person[i]);
}
console.log(listeBleus);
*/

//pour voir si on peut rajouter des <li> "randoms"
/*for (let i=0; i<person.length; i++) {
  bleus.innerHTML += "<li>Nouveauté</li>" ;
  rouges.innerHTML += "<li>Nouveauté</li>" ;
  jaunes.innerHTML += "<li>Nouveauté</li>" ;
  verts.innerHTML += "<li>Nouveauté</li>" ;
} */

/*let rajouter = document.querySelectorAll("ul li");
for(let i=0;i<rajouter.length ; i++) {
    console.log(rajouter[i].textContent);     //affiche le CONTENU de chaque <li>
}
*/
/*switch (person) {
  case bleus :

    break;
  case rouges:

    break;

    case verts:

      break;

    case jaunes:

      break;

  default:

}


if (person[i][2] = "male") {

} else {

}

*/

/* for (let i=0; i<liste.length ; i++) {
  //let newPerson = document.getElementsByTagName("ul");   //pourquoi querySelectorAll ne marche pas?
  //newPerson.innerHTML += "<li>A</li>";   //marche pas
  let newPerson = document.createElement("li");
  newPerson.textContent = "nouvelle personne";
  document.getElementById("bleus").appendChild(newPerson);
  document.getElementById("verts").appendChild(newPerson);
  document.getElementById("rouges").appendChild(newPerson);
  document.getElementById("jaunes").appendChild(newPerson);
}   */


//getPersonnes(); //referenceError (il est sur l'autre fichier)
