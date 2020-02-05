let element = document.getElementById("maDiv");
console.log(element);   //affiche '<div id="maDiv">

let listes = document.getElementsByTagName("li");
console.log(listes);                //affiche HTMLCollection(4) [ li, li , li , li]; c'est donc un tableau
console.log(listes[0]);             //affiche le premier <li>

for (let i=0; i<listes.length ; i++) {
    console.log(listes[i].innerHTML);   //récupérer le contenu de chaque balise <li> donc affiche le lien <a href='https://www.google.fr">uno</a> puis idem pour les 3  autres
};

// on refait pareil mais avec querySelector qui permet de sélectionner un élément précis

let bonjour = document.querySelector('ul li');
console.log(bonjour);    //n'affiche QUE LE PREMIER <li>

//querySelectorAll

let rebonjour = document.querySelectorAll('ul li');
console.log(rebonjour);                    //affiche NodeList(4) et la liste des <li> sous forme de tableau
for(let i=0; i<rebonjour.length ; i++) {
    console.log(rebonjour[i].innerHTML);    //idem mais affiche chaque élément & son contenu
}

// 

let rajouter = document.querySelector('ul');
rajouter.innerHTML += "<li><a href='https://microsoft.com'>Microsoft</a></li>" ;    //rajoute un <li> à la fin 
//on peut faire la même chose mais en ECRASANT le contenu précédent si on met = au lieu de +=

//innerHTML & innerText (pour IE) ne sont pas standardisés !

//mieux vaut donc utiliser textContent

let elements2 = document.querySelectorAll("ul li");

for(let i=0;i<elements2.length ; i++) {
    console.log(elements2[i].textContent);     //affiche le CONTENU de chaque <li> 
}

let element3 = document.querySelector('ul li a');

element3.className = 'vert';    //on donne une classe au premier élément <li> qui du coup prend les attributs style qu'on a rajouté ds le HTML

let element4 = document.querySelectorAll('ul li a');

// marche pas
//for (let i=0; i<element4.length ; i++) {
//    element4.className = 'vert';    //on donne une classe àtous les <li> qui du coup prend les attributs style qu'on a rajouté ds le HTML
//}

alert(element3.className);  //affiche la classe de l'élément (ici "vert")



//récupérer & changer l'attribut

let elements5 = document.querySelectorAll ("ul li a");
let element5 = elements5[0];
console.log(element5.getAttribute("href"));   //affiche le contenu de l'attribut (ici : https://wwww.google.fr)
element5.setAttribute('href', 'https://lycos.fr');   //modifie l'attribut href
console.log(element5.getAttribute('href'));   //affiche le NOUVEAU contenu (ici : https://lycos.fr)