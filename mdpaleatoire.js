alert("Je vais te générer un mot de passe aléatoire");

var quantMinLet = parseInt(prompt("Combien veux-tu de lettres minuscules dans ton mdp?"));
var quantMajLet = parseInt(prompt("Combien veux-tu de lettres majuscules dans ton mdp?"));
var quantNum = parseInt(prompt("Combien veux-tu de chiffres dans ton mdp?"));
var quantSpecChar = parseInt(prompt("Combien veux-tu de caractères spéciaux dans ton mdp?"));

const minLet = "abcdefghijklmnopqrstuvwxyz";
const majLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specChar = "&é'(-è_çà=)^$ù*,;:!²<>~#{[|`^@]}¤€£¨%µ";
const chiffres = "0123456789";

console.log(minLet.length);
console.log(majLet.length);
console.log(specChar.length);

var longueurMdp = quantMinLet + quantMajLet + quantNum + quantSpecChar;
console.log("Ton mot de passe va contenir " + longueurMdp + " caractères.");
var mdp = "";

for (var i=0; i < quantMinLet; i++) {
          mdp += minLet[Math.floor(Math.random()*25)];
          console.log(mdp);
     }

     for (var i=0; i < quantMajLet; i++) {
          mdp += majLet[Math.floor(Math.random()*25)];
          console.log(mdp);
     }

     for (var i=0; i < quantNum; i++) {
          mdp += chiffres[Math.floor(Math.random()*9)];
          console.log(mdp);
     }

     for (var i=0; i < quantSpecChar; i++) {
          mdp += specChar[Math.floor(Math.random()*37)];
          console.log(mdp);
     }


     alert("Voici ton mot de passe : " + mdp);

     for (var x=0 ; x>longueurMdp ; x--) {
          var randomiser = Math.floor(Math.random()*x);

          mdp -= 
     }



















   //  function melanger(mdp) {
     //     var mdpMelange = "";
       //   mdp = mdp.split("");
         // while (mdp.length > 0) {
           //    mdpMelange +=  mdp.splice(mdp.length * Math.random () << 0, 1);
         // }
         // return mdpMelange;
     //}

  /*   melanger();
//     for () {
          
        //  mdp = mdp[Math.floor(Math.random()*longueurMdp.length)];
    //      console.log(mdp);
  //   }


     alert("Voici ton mot de passe aléatoire : " + mdp);