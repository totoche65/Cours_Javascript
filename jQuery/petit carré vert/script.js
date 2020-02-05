$(function() {
 
$('body').on('keydown', function(event) {
   // console.log(event.keyCode);          pour voir le code de chaque touche du clavier

   let obj = $(".obj01");
   let objPosition = obj.position();
   console.log(objPosition);

    switch(event.keyCode) {
        case 37 : 
            //console.log("gauche");
            obj.css('left', objPosition.left-1);
        break;
        case 38 :
            //console.log("haut");
            obj.css('top', objPosition.top-1);
        break;
        case 39 :
            //console.log("droite");  
            obj.css('left', objPosition.left+1);
        break;
        case 40 : 
            //console.log("bas");
            obj.css('top', objPosition.top+1);
        break;
        default:     
    }
})

});




