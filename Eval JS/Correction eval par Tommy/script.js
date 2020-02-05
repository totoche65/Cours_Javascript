const candidats = getPersonnes();
//console.log(candidats);
const candidatsHommes = [];
const candidatsFemmes = [];
const teamBleu = [];
const teamRouge = [];
const teamVert = [];
const teamJaune = [];

for (let i = 0 ; i< candidats.length ; i++) {     //séparer les hommes & les femmes
  //console.log(i); pour vérifier si on rentre bien dans la boucle
    if (candidats[i][2] == "male") {
    candidatsHommes.push(candidats[i]);
  }else{
    candidatsFemmes.push(candidats[i]);
  }
}
//console.log(candidatsFemmes);
//console.log(candidatsHommes);
let incre = 0;
for (let i = 0 ; i<candidatsHommes.length ; i++) {         //on répartit les hommes dans les 4 catégories (tableaux)
    incre++;
  switch (incre) {
    case 1:
          teamBleu.push(candidatsHommes[i]);
      break;
    case 2:
          teamVert.push(candidatsHommes[i]);
      break;
    case 3:
          teamRouge.push(candidatsHommes[i]);
      break;
    case 4:
          teamJaune.push(candidatsHommes[i]);
      break;

  }
}
//console.log(teamVert, teamBleu, teamJaune, teamRouge);
for (let i = 0 ; i<candidatsFemmes.length ; i++) {                  //on répartit les femmes dans 4 tableaux
    incre++;
  switch (incre) {
    case 1:
          teamBleu.push(candidatsFemmes[i]);
      break;
    case 2:
          teamVert.push(candidatsFemmes[i]);
      break;
    case 3:
          teamRouge.push(candidatsFemmes[i]);
      break;
    case 4:
          teamJaune.push(candidatsFemmes[i]);
      break;
  }
}
//console.log(teamVert, teamBleu, teamJaune, teamRouge);

var cibleBleu = document.getElementById("teamBleu");
var cibleVert = document.getElementById("teamVert");
var cibleRouge = document.getElementById("teamRouge");
var cibleJaune = document.getElementById("teamJaune");

for (let i=0 ; i<teamBleu.length ; i++) {
  cibleBleu.innerHTML += '<li>'+teamBleu[i].join(" ")+'</li>';
}

for (let i=0 ; i<teamVert.length ; i++){
cibleVert.innerHTML += '<li>'+teamVert[i].join(" ")+'</li>';
 }

for (let i=0 ; i<teamRouge.length ; i++) {
  cibleRouge.innerHTML += '<li>' +teamRouge[i].join(" ")+'</li>' ;
}

for (let i=0 ; i<teamJaune.length ; i++) {
  cibleJaune.innerHTML += '<li>'+ teamJaune[i].join(" ")+'</li>' ;
}
