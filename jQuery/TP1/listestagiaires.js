$(function(){
    $("li").hide();
    $("li.filles").css("color", "pink");
    $("li.garcons").css("color", "blue");
    $("li.filles").fadeIn("slow", function(){
        $("li.garcons").fadeIn("slow");
    });
});