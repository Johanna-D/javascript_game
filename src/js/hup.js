class hup extends Personnage{
    couleurPerso = 'black';
    angle = 0;
    vie = 3;
    invinsibilite = false;
    black = 'black';
    clefs = 0;
    drawHup(){
      if(this.angle == 0){
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x+16, this.y, this.taille/2, this.taille);
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x, this.y+2, 16, 6);
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x+18, this.y+2, 6, 6);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x+16, this.y, 2, 10);
        ctx.restore();
      }
      else if(this.angle == 90)
      {
        console.log("90");
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x, this.y, this.taille, this.taille/2);
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x+2, this.y+16, 6, 16);
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x+2, this.y+8, 6, 6);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y+14, 10, 2);
        ctx.restore();
      }
      else if(this.angle==180){
        console.log("180");
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x, this.y, this.taille/2, this.taille);
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x+16, this.y+24, 16, 6);
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x+8, this.y+24, 6, 6);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x+14, this.y+22, 2, 10);
        ctx.restore();
      }
      else if(this.angle == 360){
        console.log("360");
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x, this.y+16, this.taille, this.taille/2);
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x+24, this.y, 6, 16);
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x+24, this.y+18, 6, 6);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x+22, this.y+16, 10, 2);
        ctx.restore();
      }
    }
    collisionDecorHup(map) {
    
      if ( this.x==map.x+map.taille && (this.y >=  map.y-8 && this.y<= map.y+8))
          moveg = false;
      if ( this.x==map.x-map.taille && (this.y >=  map.y-8 && this.y<= map.y+8))
          moved = false;
      if( this.y==map.y-map.taille && (this.x >=  map.x-8 && this.x<= map.x+8))
          moveb = false;
      if( this.y==map.y+map.taille && (this.x >=  map.x-8 && this.x<= map.x+8))
          moveh = false;
    }
    collisionEnnemisHup(ennemis){
      ennemis.forEach( ennemi => {
      if ((this.x > ennemi.x-taille && this.x < ennemi.x+taille && this.y>ennemi.y-taille && this.y < ennemi.y+taille ) && this.invinsibilite == false){
          this.red =setInterval("hup.couleurPerso = 'red'", 50);
          this.black =setInterval("hup.couleurPerso = 'black'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          this.invinsibilite = true;
          this.vie = this.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
        }
    })
  }
    gameover(){
      if(this.vie <=0){
        this.x = (canvas.width/2)-32;
        this.y = (canvas.height/2)-32;
        loadMap(map1);
        clearInterval(this.red);
        clearInterval(this.black);
        hup.invinsibilite = 0;
        this.vie = 3;
      }
  }
}
function attaqueHup(hup,ennemis){
    ennemis.forEach( ennemi => {
      if(hup.angle == 0){
        if(hup.x-taille > ennemi.x-taille && hup.x-taille < ennemi.x+taille && hup.y>ennemi.y-taille && hup.y < ennemi.y+taille){
          ennemi.vie -= 1;
        }
      }
      if(hup.angle == 180){
        if(hup.x+taille > ennemi.x-taille && hup.x+taille < ennemi.x+taille && hup.y>ennemi.y-taille && hup.y < ennemi.y+taille){
          ennemi.vie -= 1;
        }
      }
      if(hup.angle == 90){
        if(hup.x > ennemi.x-taille && hup.x < ennemi.x+taille && hup.y+taille>ennemi.y-taille && hup.y+taille < ennemi.y+taille){
          ennemi.vie -= 1;
        }
      }
      if(hup.angle == 360){
        if(hup.x > ennemi.x-taille && hup.x < ennemi.x+taille && hup.y-taille > ennemi.y-taille && hup.y-taille < ennemi.y+taille){
          ennemi.vie -= 1;
        }
      }
    }) 
}
function deplacementHup(hup,ennemis){
    window.onkeydown = function(e) {
      var key = e.keyCode || e.which;
      switch (key) {
        case 37:
          //-Move left
        hup.x -= hup.vg;
        hup.angle = 0;
        break;
        case 39:
          //-Move right
          hup.x += hup.vd;
          hup.angle = 180
          break;
      case 38:
          //-Move up
          hup.y -= hup.vh;
          hup.angle = 360;
          break;
      case 40:
          //-Move down
          hup.y += hup.vb;
          hup.angle = 90;
          break;
      case 32:
          attaqueHup(hup,ennemis)
      default:
          break;
      }

  }

  
  }
