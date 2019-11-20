class personnage{
    constructor(){
      this.x = canvas.width/2;
      this.y = canvas.height/2;
      this.taille = 32;
      this.couleurPerso = 'black';
      this.vg=32;
      this.vd=32;
      this.vh=32;
      this.vb=32;
    }
    collision(map) {
      if ( this.x==map.x+map.taille && (this.y >=  map.y-8 && this.y<= map.y+8))
        moveg = false;
      if ( this.x==map.x-map.taille && (this.y >=  map.y-8 && this.y<= map.y+8))
          moved = false;
      if( this.y==map.y-map.taille && (this.x >=  map.x-8 && this.x<= map.x+8))
          moveb = false;
      if( this.y==map.y+map.taille && (this.x >=  map.x-8 && this.x<= map.x+8))
          moveh = false;

    }
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

 