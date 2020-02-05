var jour = prompt("Quel jour on est?");
var demain = " ";
var error = false;

switch (jour) {
    case "lundi": demain = "mardi";
    break;
    case "mardi": demain = "mercredi";
    break;
    case "mercredi": demain = "jeudi";
    break;
    case "jeudi": demain = "vendredi";
    break;
    case "vendredi":  demain = "samedi";
    break;
    case "samedi": demain = "dimanche";
    break;
    case "dimanche": demain = "lundi";
    break;
    default: error = true;
}
if (!error) {
    alert("Aujourd'hui on est " + jour + " et demain on sera " + demain);
}else {
    alert("Veuillez recommencer");
    prompt("Quel jour on est?");
}