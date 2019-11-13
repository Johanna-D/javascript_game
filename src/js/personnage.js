class personnage{
    constructor(){
      this.x = canvas.width/2;
      this.y = canvas.height/2;
      this.taille = 16;
      this.couleurPerso = 'black';
    }
    
    deplacementPerso(){
        window.onkeydown = function(e) {
          var key = e.keyCode || e.which;
          switch (key) {
              case 37:
              //-Move left
              this.x = this.x - 8;
              break;
          case 39:
              //-Move right
              this.x = this.x + 8;
              break;
          case 38:
              //-Move up
              this.y =this.y - 8;
              break;
          case 40:
              //-Move down
              this.y = this.y + 8;
              break;
          default:
              break;
          }
      }
      }
  }

  function deplacementPerso(hup){
      var i = 1;
  window.onkeydown = function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 37:
        //-Move left
        hup.x -= 8;
        return i = 1;
        break;
    case 39:
        //-Move right
        hup.x += 8;
        return i = 1;
        break;
    case 38:
        //-Move up
        hup.y -= 8;
        return i = 1;
        break;
    case 40:
        //-Move down
        hup.y += 8;
        return i = 1;
        break;
    default:
        break;
    }
    
}
}
function drawPerso(hup){
    ctx.save();
    ctx.fillStyle = hup.couleurPerso;
    ctx.fillRect(hup.x,hup.y,hup.taille,hup.taille);
    ctx.restore();
  }