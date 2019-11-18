class personnage{
    constructor(){
      this.x = canvas.width/2;
      this.y = canvas.height/2;
      this.taille = 16;
      this.couleurPerso = 'black';
      this.vg=8;
      this.vd=8;
      this.vh=8;
      this.vb=8;
    }
  }

 function deplacementPerso(hup){
  window.onkeydown = function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 37:
        //-Move left
      hup.x -= hup.vg;
      break;
      case 39:
        //-Move right
        hup.x += hup.vd;
        break;
    case 38:
        //-Move up
        hup.y -= hup.vh;
        break;
    case 40:
        //-Move down
        hup.y += hup.vb;
        break;
    default:
        break;
    }

}
}
/*function deplacementPerso(hup){
  if(inputStates.left){
    hup.x = hup.x-hup.vg
  }
if(inputStates.right){
  hup.x = hup.x+hup.vd
}
if(inputStates.up){
hup.y = hup.y-hup.vh
}
if(inputStates.down){
hup.y = hup.y+hup.vb
}
}*/

function drawPerso(hup){
    ctx.save();
    ctx.fillStyle = hup.couleurPerso;
    ctx.fillRect(hup.x,hup.y,hup.taille,hup.taille);
    ctx.restore();
  }
