class hup extends Personnage{
    couleurPerso = 'black';
    vie = 3;
    black = 'black';
    clefs = 0;
    indexEnnemi;
    Epee=1;
    EpeeChiffre = 0;
    ;
    drawHup(){
      if(this.angle == 0){
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x+16, this.y, this.taille/2, this.taille);
        ctx.restore();
      }
      else if(this.angle == 90)
      {
        console.log("90");
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x, this.y, this.taille, this.taille/2);
        ctx.restore();
      }
      else if(this.angle==180){
        console.log("180");
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x, this.y, this.taille/2, this.taille);
        ctx.restore();
      }
      else if(this.angle == 360){
        console.log("360");
        ctx.save();
        ctx.fillStyle = this.couleurPerso;
        ctx.fillRect(this.x, this.y+16, this.taille, this.taille/2);
        ctx.restore();
      }
    }
    drawHupEpee(chiffre){
      if(this.angle == 0){
        ctx.save();
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x-chiffre, this.y+2, 16, 6);
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x+18-chiffre, this.y+2, 6, 6);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x+16-chiffre, this.y, 2, 10);
        ctx.restore();
      }
      else if(this.angle == 90)
      {
        ctx.save();
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x+2, this.y+16+chiffre, 6, 16);
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x+2, this.y+8+chiffre, 6, 6);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y+14+chiffre, 10, 2);
        ctx.restore();
      }
      else if(this.angle==180){
        ctx.save();
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x+16+chiffre, this.y+24, 16, 6);
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x+8+chiffre, this.y+24, 6, 6);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x+14+chiffre, this.y+22, 2, 10);
        ctx.restore();
      }
      else if(this.angle == 360){
        ctx.save();
        ctx.fillStyle = 'grey';
        ctx.fillRect(this.x+24, this.y-chiffre, 6, 16);
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x+24, this.y+18-chiffre, 6, 6);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x+22, this.y+16-chiffre, 10, 2);
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
    //Collision carré
    /*collisionEnnemisHup(ennemis){
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
  }*/

  //Colision demi carré en fonction de l'angle
  collisionEnnemisHup(ennemis){
    ennemis.forEach( ennemi => {
      if(this.angle == 0){
        if(this.x > ennemi.x-taille && this.x+16 < ennemi.x+taille && this.y>ennemi.y-taille && this.y < ennemi.y+taille && this.invinsibilite == false){
          this.red =setInterval("hup.couleurPerso = 'red'", 50);
          this.black =setInterval("hup.couleurPerso = 'black'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          this.invinsibilite = true;
          this.vie = this.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
        }
      }
      if(this.angle == 180){
        if(this.x-16 > ennemi.x-taille && this.x < ennemi.x+taille && this.y>ennemi.y-taille && this.y < ennemi.y+taille && this.invinsibilite == false){
          this.red =setInterval("hup.couleurPerso = 'red'", 50);
          this.black =setInterval("hup.couleurPerso = 'black'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          this.invinsibilite = true;
          this.vie = this.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
        }
      }
      if(this.angle == 90){
        if(this.x > ennemi.x-taille && this.x < ennemi.x+taille && this.y-16>ennemi.y-taille && this.y < ennemi.y+taille && this.invinsibilite == false){
          this.red =setInterval("hup.couleurPerso = 'red'", 50);
          this.black =setInterval("hup.couleurPerso = 'black'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          this.invinsibilite = true;
          this.vie = this.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
        }
      }
      if(this.angle == 360){
        if(this.x > ennemi.x-taille && this.x < ennemi.x+taille && this.y > ennemi.y-taille && this.y+16 < ennemi.y+taille && this.invinsibilite == false){
          this.red =setInterval("hup.couleurPerso = 'red'", 50);
          this.black =setInterval("hup.couleurPerso = 'black'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          this.invinsibilite = true;
          this.vie = this.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
        }
      }
  })
}
    gameover(){
      if(this.vie <=0){
        this.x = (canvas.width/2)-32;
        this.y = (canvas.height/2)-32;
        loadMap(C1);
        clearInterval(this.red);
        clearInterval(this.black);
        hup.invinsibilite = 0;
        this.vie = 3;
      }
  }
}
function attaqueHup(hup,ennemis){
    if(hup.Epee == 1){
      hup.EpeeChiffre = 16;
      setTimeout("hup.EpeeChiffre = 0",10);
      for(i = 0;i<ennemis.length;i++){
        hup.ennemiIndex = i;
        if(hup.angle == 0){
          if(hup.x-taille > ennemis[i].x-taille && hup.x-taille < ennemis[i].x+taille && hup.y>ennemis[i].y-taille && hup.y < ennemis[i].y+taille && ennemis[i].invinsibilite == false){
            ennemis[i].vie -= 1;
            if(ennemis[i].collisionDecorEnnemisAttaqueG()){
              ennemis[i].x -=32;
              ennemis[i].cpt=true;
            }
            else if(ennemis[i].cpt == true ) {
              ennemis[i].x -=(ennemis[i].x%32);
              ennemis[i].cpt=false;
            }
            if(ennemis[i].vie >0){
              ennemis[i].red = setInterval("ennemis[hup.ennemiIndex].couleur = 'black'", 50);
              ennemis[i].black = setInterval("ennemis[hup.ennemiIndex].couleur = 'red'", 100);
              setTimeout("clearInterval(ennemis[hup.ennemiIndex].red)",601);
              setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
              ennemis[i].invinsibilite = true;
              setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
            }
        }
      }
      if(hup.angle == 180){
        if(hup.x+taille > ennemis[i].x-taille && hup.x+taille < ennemis[i].x+taille && hup.y>ennemis[i].y-taille && hup.y < ennemis[i].y+taille && ennemis[i].invinsibilite == false){
          ennemis[i].vie -= 1;
          if(ennemis[i].collisionDecorEnnemisAttaqueD()){
            ennemis[i].x +=32;
            ennemis[i].cpt=true;
          }
          else if(ennemis[i].cpt == true ) {
            ennemis[i].x +=((32-ennemis[i].x%32)%32);
            ennemis[i].cpt=false;
          }
          if(ennemis[i].vie >0){
            ennemis[i].red = setInterval("ennemis[hup.ennemiIndex].couleur = 'black'", 50);
            ennemis[i].black = setInterval("ennemis[hup.ennemiIndex].couleur = 'red'", 100);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].red)",601);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
            ennemis[i].invinsibilite = true;
            setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
            }
        }
      }
      if(hup.angle == 90){
        if(hup.x > ennemis[i].x-taille && hup.x < ennemis[i].x+taille && hup.y+taille>ennemis[i].y-taille && hup.y+taille < ennemis[i].y+taille && ennemis[i].invinsibilite == false){
          ennemis[i].vie -= 1;
          if(ennemis[i].collisionDecorEnnemisAttaqueB()){
            ennemis[i].y +=32;
            ennemis[i].cpt=true;
          }
          else if(ennemis[i].cpt == true ) {
            ennemis[i].y +=((32-ennemis[i].y%32)%32);
            ennemis[i].cpt=false;
          }
          if(ennemis[i].vie >0){
            ennemis[i].red = setInterval("ennemis[hup.ennemiIndex].couleur = 'black'", 50);
            ennemis[i].black = setInterval("ennemis[hup.ennemiIndex].couleur = 'red'", 100);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].red)",601);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
            ennemis[i].invinsibilite = true;
            setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
            }
        }
      }
      if(hup.angle == 360){
        if(hup.x > ennemis[i].x-taille && hup.x < ennemis[i].x+taille && hup.y-taille > ennemis[i].y-taille && hup.y-taille < ennemis[i].y+taille && ennemis[i].invinsibilite == false){
          ennemis[i].vie -= 1;
          if(ennemis[i].collisionDecorEnnemisAttaqueH()){
            ennemis[i].y -=32;
            ennemis[i].cpt=true;
          }
          else if(ennemis[i].cpt == true ) {
            ennemis[i].y -=(ennemis[i].y%32);
            ennemis[i].cpt=false;
          }
          if(ennemis[i].vie >0){
            ennemis[i].red = setInterval("ennemis[hup.ennemiIndex].couleur = 'black'", 50);
            ennemis[i].black = setInterval("ennemis[hup.ennemiIndex].couleur = 'red'", 100);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].red)",601);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
            ennemis[i].invinsibilite = true;
            setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
            }
        }
      }
  }
  }
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
