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
