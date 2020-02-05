//ANIMAL & VEGETAL : bleu
//mammifère, oiseaux, poissons & batraciens : rouge
//chien, chats, vaches: vert
//cochons : rose

$(function(){
    $("ol li:nth-child(4)").css("color", "pink");
    $("ol li:nth-child(1)").css("color", "green");
    $("ol li:nth-child(2)").css("color", "green");
    $("ol li:nth-child(3)").css("color", "green");
    $("ul li:last").css("color", "blue");
    $("ul li:first").css("color", "blue");
    $("ul li ul").css("color", "red");
});