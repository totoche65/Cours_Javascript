$(function() {
    console.log("DOM chargé");  
    //tout ce qui est ici ne s'exécutera qu'une fois que le DOM est chargé*
    $("#hello").html("Bonjour à tous");          //on utilise des sélecteurs CSS pour accéder aux éléments du DOM & modifier le code html
    $(".ola")
    $("p.deux").html("Je suis le paragraphe 2");  //s'adresser à la balise p qui a la classe "deux"
    $("p.un").hide(); //méthode qui permet de masquer un élément
    $("p").fadeIn("slow");  //affiche un élément p lentement

    //modifier les propriétés CSS d'un élément
    $("p.un").css("color", "red");
    $("p.un").css("background", "black");

    //on peut chaîner ttes les méthodes les unes à la suite des autres
    $("p.deux").css('color', 'blue').css('background', 'yellow');
});




