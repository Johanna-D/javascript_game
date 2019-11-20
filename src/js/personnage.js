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


    /*deplacement2(){
      if(inputStates.left){
        this.x = this.x-this.vg
      }
    if(inputStates.right){
      this.x = this.x+this.vd
    }
    if(inputStates.up){
    this.y = this.y-this.vh
    }
    if(inputStates.down){
    this.y = this.y+this.vb
    }
    }*/
    
    draw(){
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x,this.y,this.taille,this.taille);
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

 