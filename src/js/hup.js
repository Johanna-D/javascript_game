class hup extends Personnage{
    couleurPerso = 'black';

    drawHup(){
      ctx.save();
      ctx.fillStyle = this.couleur;
      ctx.fillRect(this.x, this.y, this.taille/2, this.taille);
      ctx.fillStyle = 'white';
      ctx.fillRect(this.x+10, this.y+24, 24, 6);
      ctx.restore();
    }
}
function deplacementHup(hup){
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