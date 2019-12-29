class hup extends Personnage{
    vg = 32;
    vd = 32;
    vh = 32;
    vb = 32;
    couleurPerso = 'black';
    vie = 3;
    black = 'black';
    clefs = 0;
    ennemiIndex;
    Epee=1;
    EpeeChiffre = 0;
    statutGameOver = false;
    /* DRAW HUP AVEC DES FORMES 
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
    }*/

    /* DRAW HUP AVEC DES IMAGES */
    drawHup(){
      if(this.angle == 0){
        var image = new Image();
        image.src = "js/hupGauche.png";
        ctx.save();
        ctx.drawImage(image,this.x, this.y)
        ctx.restore();
      }
      else if(this.angle == 90)
      {
        var image = new Image();
        image.src = "js/hupFace.png";
        ctx.save();
        ctx.drawImage(image,this.x, this.y)
        ctx.restore();
      }
      else if(this.angle==180){
        var image = new Image();
        image.src = "js/hupDroite.png";
        ctx.save();
        ctx.drawImage(image,this.x, this.y)
        ctx.restore();
      }
      else if(this.angle == 360){
        var image = new Image();
        image.src = "js/hupDos.png";
        ctx.save();
        ctx.drawImage(image,this.x, this.y)
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

      if (this.x==map.x+map.taille && (this.y >=  map.y-8 && this.y<= map.y+8))
          moveg = false;
      if (this.x==map.x-map.taille && (this.y >=  map.y-8 && this.y<= map.y+8))
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
          this.vie = this.vie - ennemi.degatcac;
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
          this.vie = this.vie - ennemi.degatcac;
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
          this.vie = this.vie - ennemi.degatcac;
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
          this.vie = this.vie - ennemi.degatcac;
          setTimeout("hup.invinsibilite = false",1201);
        }
      }
  })
}
gameover(){
    if(this.vie <=0){
      ctx.drawImage(Gover, 0, 0);
      if (this.statutGameOver){
        loadMap(C1);
        this.x = (canvas.width/2)-32;
        this.y = (canvas.height/2)-32;
        ennemis =[]
        for(i = 0; i<ennemis.length;i++){
             ennemis[i].balles = [];
        }
        clearInterval(this.red);
        clearInterval(this.black);
        this.couleurPerso = 'black';
        this.invinsibilite = 0;
        this.vie = 3;
        this.statutGameOver = false;
      }
    } }

    vieHup(){
      var coeur = new Image();
      coeur.src = 'css/heart.png';
      var coeurvide = new Image();
      coeurvide.src = 'css/emptyheart.png';
      var demicoeur = new Image();
      demicoeur.src = 'css/halfheart.png';
      
      if(this.vie == 3){
        ctx.drawImage(coeur, 0,576,64,64);
        ctx.drawImage(coeur, 64,576,64,64);
        ctx.drawImage(coeur, 124,576,64,64);
      }
      if(this.vie == 2.5){
        ctx.drawImage(coeur, 0,576,64,64);
        ctx.drawImage(coeur, 64,576,64,64);
        ctx.drawImage(demicoeur, 124,576,64,64);
      }
      if(this.vie == 2){
        ctx.drawImage(coeur, 0,576,64,64);
        ctx.drawImage(coeur, 64,576,64,64);
        ctx.drawImage(coeurvide, 124,576,64,64);
      }
      if(this.vie == 1.5){
        ctx.drawImage(coeur, 0,576,64,64);
        ctx.drawImage(demicoeur, 64,576,64,64);
        ctx.drawImage(coeurvide, 124,576,64,64);
      }
      if(this.vie == 1){
        ctx.drawImage(coeur, 0,576,64,64);
        ctx.drawImage(coeurvide, 64,576,64,64);
        ctx.drawImage(coeurvide, 124,576,64,64);
      }
      if(this.vie == 0.5){
        ctx.drawImage(demicoeur, 0,576,64,64);
        ctx.drawImage(coeurvide, 64,576,64,64);
        ctx.drawImage(coeurvide, 124,576,64,64);
      }

    }
}
  


function attaqueHup(hup,ennemis){
    if(hup.Epee == 1){
      hup.EpeeChiffre = 16;
      setTimeout("hup.EpeeChiffre = 0",10);
      ennemis.forEach(ennemi => {
        if(ennemi.invinsibilite == false){
        if(hup.angle == 0){
          if(hup.x-taille > ennemi.x-taille && hup.x-taille < ennemi.x+taille && hup.y>ennemi.y-taille && hup.y < ennemi.y+taille){
            hup.ennemiIndex = ennemis.indexOf(ennemi);
            ennemi.vie -= 1;
            if(ennemi.vie >0){
              if(ennemi.collisionDecorEnnemisAttaqueG()){
                ennemi.x -=32;
                ennemi.cpt=true;
              }
              else if(ennemi.cpt == true ) {
                ennemi.x -=(ennemi.x%32);
                ennemi.cpt=false;
              }
              ennemi.black = setInterval("ennemis[hup.ennemiIndex].couleur = 'black'", 50);
              ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].couleur = ennemis[hup.ennemiIndex].couleurdegat", 100);
              setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
              setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
              setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
              ennemi.invinsibilite = true;
            }
        }
      }
      if(hup.angle == 180){
        if(hup.x+taille > ennemi.x-taille && hup.x+taille < ennemi.x+taille && hup.y>ennemi.y-taille && hup.y < ennemi.y+taille){
          hup.ennemiIndex = ennemis.indexOf(ennemi);
          ennemi.vie -= 1;
          if(ennemi.vie >0){
            if(ennemi.collisionDecorEnnemisAttaqueD()){
              ennemi.x +=32;
              ennemi.cpt=true;
            }
            else if(ennemi.cpt == true ) {
              ennemi.x +=((32-ennemi.x%32)%32);
              ennemi.cpt=false;
            }
            ennemi.black = setInterval("ennemis[hup.ennemiIndex].couleur = 'black'", 50);
            ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].couleur = ennemis[hup.ennemiIndex].couleurdegat", 100);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
            ennemi.invinsibilite = true;
            setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
            }
        }
      }
      if(hup.angle == 90){
        if(hup.x > ennemi.x-taille && hup.x < ennemi.x+taille && hup.y+taille>ennemi.y-taille && hup.y+taille < ennemi.y+taille){
          hup.ennemiIndex = ennemis.indexOf(ennemi);
          ennemi.vie -= 1;
          if(ennemi.vie >0){
            if(ennemi.collisionDecorEnnemisAttaqueB()){
              ennemi.y +=32;
              ennemi.cpt=true;
            }
            else if(ennemi.cpt == true ) {
              ennemi.y +=((32-ennemi.y%32)%32);
              ennemi.cpt=false;
            }
            ennemi.black = setInterval("ennemis[hup.ennemiIndex].couleur = 'black'", 50);
            ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].couleur = ennemis[hup.ennemiIndex].couleurdegat", 100);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
            ennemi.invinsibilite = true;
            setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
            }
        }
      }
      if(hup.angle == 360){
        if(hup.x > ennemi.x-taille && hup.x < ennemi.x+taille && hup.y-taille > ennemi.y-taille && hup.y-taille < ennemi.y+taille){
          hup.ennemiIndex = ennemis.indexOf(ennemi);
          ennemi.vie -= 1;
          if(ennemi.vie >0){
            if(ennemi.collisionDecorEnnemisAttaqueH()){
              ennemi.y -=32;
              ennemi.cpt=true;
            }
            else if(ennemi.cpt == true ) {
              ennemi.y -=(ennemi.y%32);
              ennemi.cpt=false;
            }
            ennemi.black = setInterval("ennemis[hup.ennemiIndex].couleur = 'black'", 50);
            ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].couleur = ennemis[hup.ennemiIndex].couleurdegat",100);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
            setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
            ennemi.invinsibilite = true;
            setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
            }
        }
      }
    }
  })
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
        
          attaqueHup(hup,ennemis);
      case 13:
          if(hup.vie <=0){
          hup.statutGameOver = true;
          }
      default:
          break;
      }

  }


  }
