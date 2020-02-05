$(function(){

    $(".img1").css("background-image", "url(img/01.jpg)").css("z-index", "10");
    $(".img2").css("background-image", "url(img/02.jpg)").css("z-index", "9");
    $(".img3").css("background-image", "url(img/03.jpg)").css("z-index", "8");;
    $(".img4").css("background-image", "url(img/04.jpg)").css("z-index", "7");;
    $(".img5").css("background-image", "url(img/05.jpg)").css("z-index", "6");;

    for(let i= 1; i<=5; i++) {                 ///ne fonctionne qu'une seule fois à cause du callback, faut chercher comment changer l'intervalle
        $("section.img" +i).fadeOut("slow", function() {
        });
    
    }
});

