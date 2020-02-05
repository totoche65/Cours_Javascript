var name = prompt("Comment tu t'appelles?");
alert("Tu t'appelles " + name); 
console.log(name + " souhaite entrer");

var autorisation = false;
var msgEntrez = "Vous êtes autorisé à entrer";
var msgRefus = "Désolé, vous ne pouvez pas entrer";

var age = prompt("Quel âge as-tu?");
var ageNb = parseInt(age);
var seize18 = false;

console.log(age);
console.log(ageNb);

if(ageNb >= 18) {
    console.log(name + " est majeur(e)");
    ageNb = true;
    var shoes = prompt("Quelles chaussures portez-vous?");
    console.log("On vérifie les chaussures !");
    if (shoes == "baskets") {
        console.log(name + " porte des baskets");
        shoes = false;
    }else{
    console.log( name + " porte des chaussures adaptées");
    shoes = true;
    }
} else if (ageNb >= 16){
    console.log(name + " a entre 16 et 18 ans");
    ageNb = false;
    seize18 = true;
    console.log(accomp);
    var accomp = prompt("Es-tu seul(e) ou accompagné?") ;
    if (accomp == "accompagné") {
        console.log(name + " est accompagné");
        accomp = true;
    }else {
        console.log(name + " est venu seul");
        accomp = false;
    }
} else {
    console.log(name + " est mineur et ne pourra pas entrer");
    ageNb = false;
}

if ((ageNb && shoes) || (accomp && seize18)) {
    alert(msgEntrez);
    autorisation = true;
}else { 
    alert(msgRefus);
    autorisation = false;
}
