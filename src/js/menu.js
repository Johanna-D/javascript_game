window.onload = loadMenu;
function loadMenu(){
  
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  //menuImage = new Image();
 // menuImage.src = 'js/menuTest.png';
  ctx.drawImage(menuImage, 0, 0);
  window.onkeydown = function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
      case 32:
        //lancer le jeu
      init()
      break;
      case 67:
        // afficher les commandes
        ctx.drawImage(commandes, 0, 0,768,640);
        break;
      case 77 :
        // revenir au menu
        ctx.drawImage(menuImage, 0, 0);
        break;
    default:
        break;
    }
  }
}
