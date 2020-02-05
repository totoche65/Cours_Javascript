$(function() {
 $("#listedecourses")   //cette écriture = plus lisible mais du coup il ne faut pas mettre de ; car normalement on met tout sur la même ligne à la suite
    .append('<li>Grenouille: append</li>')
    .prepend("<li>boeuf: prepend</li>")
    .before("<h1>Liste des courses :before</h1>")                    
    .after("<h2>Fin de la liste : after</h2>");

 //append & after st similaires, tt comme prepend & before st similaires, mais la différence c'est l'endroit où est effectué le déplacement :
 //append & prepend déplacent DANS le conteneur (avant la balise de fin) alors que before & after déplacent après/avant (en dehors du conteneur)


$("h4").replaceWith("<h3>Coincoin : replaceWith</h3>");

//déplacer des éléments les uns avant/après les autres

$(".pos4").after($(".pos1"));     //place le 1 APRES le 4  (du coup : 2 3 4 1 5 )

$("#listedecourses").clone().appendTo("body");          //clone la liste entière et place le clone APRES la première liste (ici je la rattache au body car c'est le parent)

/* différence prepend & prependTo : 
    Font quasi la même chose mais syntaxe différente ds le placement du contenu & de la cible

    .prepend()   : le sélecteur avant la méthode est le CONTENEUR dans lequel le contenu est inséré
    .prependTo() : le contenu est placé AVANT la méthode & est inséré ds la cible

    IDEM avec append() & appendTo()
*/

$('body').on('keydown', function(event) {
    if(event.keyCode == 38) {
        alert("tu as appuyé sur la flèche du haut");
    }
})

});




