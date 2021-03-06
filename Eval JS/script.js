
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

//Je ne comprends pas pourquoi il rajoute des <li> vides
//Parfois (mais pas tout le temps!!!) il y a une erreur dans la console (femmes[i] is undefined) et je ne sais pas pourquoi

const liste = getPersonnes();
let bleus = document.getElementById("bleus");
let rouges = document.getElementById("rouges");
let verts = document.getElementById("verts");
let jaunes = document.getElementById("jaunes");
let femmes = [];
let hommes = [];

const listeCouleurs = [];
listeCouleurs['listeBleus'] = [];
listeCouleurs['listeRouges'] = [];
listeCouleurs['listeVerts'] = [];
listeCouleurs['listeJaunes'] = [];

//séparer hommes & femmes
let separer = function (nombrePersonnes) {
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
};
separer();

let repartirFemmes = function (nombreFemmes) {
    for (let i = 0; i< femmes.length ; i++){
      let compteur = 1;
      for (let p=0; p <= femmes.length ; p++) {
      switch (compteur) {
        case 1:
        bleus.innerHTML += "<li class='femmesBleues'></li>";
        let selectBleu = document.getElementsByClassName("femmesBleues");
          selectBleu[i].innerHTML = femmes[i][1];
          femmes.shift();
        compteur = 2;
        break;
        case 2:
        rouges.innerHTML += "<li class='femmesRouges'></li>";
        let selectRouge = document.getElementsByClassName("femmesRouges");
          selectRouge[i].innerHTML = femmes[i][1];
          femmes.shift();
        compteur = 3;
        break;
        case 3:
        verts.innerHTML += "<li class='femmesVertes'></li>";
        let selectVert = document.getElementsByClassName("femmesVertes");
          selectVert[i].innerHTML = femmes[i][1];
          femmes.shift();
        compteur = 4;
        break;
        case 4:
        jaunes.innerHTML += "<li class='femmesJaunes'></li>";
        let selectJaune = document.getElementsByClassName("femmesJaunes");
          selectJaune[i].innerHTML = femmes[i][1];
          femmes.shift();
        compteur = 1;
        break;
        default: compteur=0;
      }
    }
  }
};

 let repartirHommes = function (nombreHommes) {
  for (let i = 0; i<hommes.length; i++) {
    let compteur = 1;
    for (let p=0; p <= hommes.length ; p++) {
    switch (compteur) {
      case 1:
      bleus.innerHTML += "<li class='hommesBleus'></li>";
      let selectBleu = document.getElementsByClassName("hommesBleus");
        selectBleu[i].innerHTML = hommes[i][1];
        hommes.shift();
      compteur = 2;
      break;
      case 2:
      rouges.innerHTML += "<li class='hommesRouges'></li>";
      let selectRouge = document.getElementsByClassName("hommesRouges");
        selectRouge[i].innerHTML = hommes[i][1];
        hommes.shift();
      compteur = 3;
      break;
      case 3:
      verts.innerHTML += "<li class='hommesVerts'></li>";
      let selectVert = document.getElementsByClassName("hommesVerts");
        selectVert[i].innerHTML = hommes[i][1];
        hommes.shift();
      compteur = 4;
      break;
      case 4:
      jaunes.innerHTML += "<li class='hommesJaunes'></li>";
      let selectJaune = document.getElementsByClassName("hommesJaunes");
        selectJaune[i].innerHTML = hommes[i][1];
        hommes.shift();
      compteur = 1;
      break;
      default: compteur=0;
      }
    }
  }
};

repartirFemmes();
repartirHommes();
