class hup extends Personnage{
    vg = 32;
    vd = 32;
    vh = 32;
    vb = 32;
    couleurPerso = 'black';
    vie = 3;
    black = 'black';
    clefs = 0;
    cleBoss =0 ;
    ennemiIndex;
    Epee=1;
    EpeeChiffre = 0;
    statutGameOver = false;
    image = new Image();
    braceletForce = 1;
    bottes = 0;
    /* DRAW HUP AVEC DES IMAGES */
    drawHup(){
        ctx.save();
        ctx.drawImage(this.image,this.x, this.y)
        ctx.restore();
    }

    drawHupEpee(chiffre){
      if(this.angle == 0){
        ctx.save();
        var sword = new Image();
        sword.src = 'js/objetsRamassables/swordGauche.png';
        ctx.drawImage(sword, this.x-4-chiffre, this.y+17);
        ctx.restore();
      }
      else if(this.angle == 90)
      {
        ctx.save();
        var sword = new Image();
        sword.src = 'js/objetsRamassables/swordBas.png';
        ctx.drawImage(sword, this.x+18, this.y+24+chiffre);
        ctx.restore();
      }
      else if(this.angle==180){
        ctx.save();
        var sword = new Image();
        sword.src = 'js/objetsRamassables/swordDroit.png';
        ctx.drawImage(sword, this.x+27+chiffre, this.y+17);
        ctx.restore();
      }
      else if(this.angle == 360){
        ctx.save();
        var sword = new Image();
        sword.src = 'js/objetsRamassables/swordHaut.png';
        ctx.drawImage(sword, this.x-3, this.y-1-chiffre);
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
    collisionEnnemisHup(ennemis){
      ennemis.forEach( ennemi => {
      if((this.x > ennemi.x-taille && this.x < ennemi.x+taille && this.y>ennemi.y-taille && this.y < ennemi.y+taille ) && this.invinsibilite == false){
          if(this.angle == 0){
          this.red =setInterval("hup.image.src = 'js/hupGaucheR.png'", 50);
          this.black =setInterval("hup.image.src = 'js/hupGauche.png'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          this.invinsibilite = true;
          this.vie = this.vie - ennemi.degatcac;
          setTimeout("hup.invinsibilite = false",1201);
        }
        if(this.angle == 180){
          this.red =setInterval("hup.image.src = 'js/hupDroitR.png'", 50);
          this.black =setInterval("hup.image.src = 'js/hupDroite.png'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          this.invinsibilite = true;
          this.vie = this.vie - ennemi.degatcac;
          setTimeout("hup.invinsibilite = false",1201);
        }
        if(this.angle == 90){
          this.red =setInterval("hup.image.src = 'js/hupFaceR.png'", 50);
          this.black =setInterval("hup.image.src = 'js/hupFace.png'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          this.invinsibilite = true;
          this.vie = this.vie - ennemi.degatcac;
          setTimeout("hup.invinsibilite = false",1201);
        }
        if(this.angle == 360){
          this.red =setInterval("hup.image.src = 'js/hupDosR.png'", 50);
          this.black =setInterval("hup.image.src = 'js/hupDos.png'", 100);
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

    Interface(){
      let cleAffiche = new Image();
      cleAffiche.src='js/objetsRamassables/cleInterface.png';
      let cleAfficheOmbre = new Image();
      cleAfficheOmbre.src='js/objetsRamassables/cleInterfaceOmbre.png';
      let bracelet = new Image();
      bracelet.src='js/objetsRamassables/braceletInterface.png';
      let braceletOmbre = new Image();
      braceletOmbre.src='js/objetsRamassables/braceletInterfaceOmbre.png';
      let bottes = new Image();
      bottes.src='js/objetsRamassables/bottesInterface.png';
      let bottesOmbre = new Image();
      bottesOmbre.src='js/objetsRamassables/bottesInterfaceOmbre.png';
      let cleboss = new Image();
      cleboss.src='js/objetsRamassables/clebossInterface.png';
      let clebossOmbre = new Image();
      clebossOmbre.src='js/objetsRamassables/clebossInterfaceOmbre.png';
      let coeur = new Image();
      coeur.src = 'css/heart.png';
      let coeurvide = new Image();
      coeurvide.src = 'css/emptyheart.png';
      let demicoeur = new Image();
      demicoeur.src = 'css/halfheart.png';
      let sword = new Image();
      sword.src = 'js/objetsRamassables/swordInterface.png';
      let swordOmbre = new Image();
      swordOmbre.src = 'js/objetsRamassables/swordInterfaceOmbre.png';
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
    if(this.clefs == 0){
      ctx.drawImage(cleAfficheOmbre, 720,576,64,64);
      ctx.drawImage(cleAfficheOmbre, 700,576,64,64);
      ctx.drawImage(cleAfficheOmbre, 680,576,64,64);
    }
    if(this.clefs ==1){
      ctx.drawImage(cleAfficheOmbre, 720,576,64,64);
      ctx.drawImage(cleAfficheOmbre, 700,576,64,64);
      ctx.drawImage(cleAffiche, 680,576,64,64);
    }
    if(this.clefs ==2){
      ctx.drawImage(cleAfficheOmbre, 720,576,64,64);
      ctx.drawImage(cleAffiche, 700,576,64,64);
      ctx.drawImage(cleAffiche, 680,576,64,64);
    }
    if(this.clefs ==3){
      ctx.drawImage(cleAffiche, 720,576,64,64);
      ctx.drawImage(cleAffiche, 700,576,64,64);
      ctx.drawImage(cleAffiche, 680,576,64,64);
    }
    if(this.Epee == 1){
      ctx.drawImage(sword, 204,576,48,64);
    }
    if(this.Epee == 0){
      ctx.drawImage(swordOmbre, 204,576,48,64);
    }
    if(this.cleBoss == 1){
      ctx.drawImage(cleboss, 616,576);
    }
    if(this.cleBoss == 0){
      ctx.drawImage(clebossOmbre, 616,576);
    }
    if(this.bottes == 1){
      ctx.drawImage(bottes, 540,576);
    }
    if(this.bottes == 0){
      ctx.drawImage(bottesOmbre, 540,576);
    }
    if(this.braceletForce == 2){
      ctx.drawImage(bracelet, 456,576);
    }
    if(this.braceletForce == 1){
      ctx.drawImage(braceletOmbre, 456,576);
    }
  }

}

function saut(hup,map){
  if(hup.angle ==0 && (map[(hup.x/32)-1][(hup.y/32)]) instanceof vide && ((map[(hup.x/32)-2][(hup.y/32)]) instanceof sol || (map[(hup.x/32)-2][(hup.y/32)]) instanceof fleur || (map[(hup.x/32)-2][(hup.y/32)]) instanceof herbe || (map[(hup.x/32)-2][(hup.y/32)]) instanceof neige || (map[(hup.x/32)-2][(hup.y/32)]) instanceof solRoche || (map[(hup.x/32)-2][(hup.y/32)]) instanceof eau || (map[(hup.x/32)-2][(hup.y/32)]) instanceof bois)) {
    hup.y = hup.y-32;
    hup.x = hup.x -32;
    setTimeout("hup.y = hup.y +32",5);
    setTimeout("hup.x = hup.x -32;",5);
  }
  if(hup.angle ==180 && (map[(hup.x/32)+1][(hup.y/32)]) instanceof vide && ((map[(hup.x/32)+2][(hup.y/32)]) instanceof sol || (map[(hup.x/32)+2][(hup.y/32)]) instanceof fleur || (map[(hup.x/32)+2][(hup.y/32)]) instanceof herbe || (map[(hup.x/32)+2][(hup.y/32)]) instanceof neige || (map[(hup.x/32)+2][(hup.y/32)]) instanceof solRoche || (map[(hup.x/32)+2][(hup.y/32)]) instanceof eau || (map[(hup.x/32)+2][(hup.y/32)]) instanceof bois)) {
    hup.y = hup.y-32;
    hup.x = hup.x +32;
    setTimeout("hup.y = hup.y +32",5);
    setTimeout("hup.x = hup.x +32;",5);
  }
  if(hup.angle ==90 && (map[(hup.x/32)][(hup.y/32)+1]) instanceof vide && ((map[(hup.x/32)][(hup.y/32)+2]) instanceof sol || (map[(hup.x/32)][(hup.y/32)+2]) instanceof fleur || (map[(hup.x/32)][(hup.y/32)+2]) instanceof herbe || (map[(hup.x/32)][(hup.y/32)+2]) instanceof neige || (map[(hup.x/32)][(hup.y/32)+2]) instanceof solRoche || (map[(hup.x/32)][(hup.y/32)+2]) instanceof eau || (map[(hup.x/32)][(hup.y/32)+2]) instanceof bois)) {
    hup.y = hup.y+32;
    hup.x = hup.x +16;
    setTimeout("hup.y = hup.y +32",5);
    setTimeout("hup.x = hup.x -16;",5);
  }
  if(hup.angle ==360 && (map[(hup.x/32)][(hup.y/32)-1]) instanceof vide && ((map[(hup.x/32)][(hup.y/32)-2]) instanceof sol || (map[(hup.x/32)][(hup.y/32)-2]) instanceof fleur || (map[(hup.x/32)][(hup.y/32)-2]) instanceof herbe || (map[(hup.x/32)][(hup.y/32)-2]) instanceof neige || (map[(hup.x/32)][(hup.y/32)-2]) instanceof solRoche || (map[(hup.x/32)][(hup.y/32)-2]) instanceof eau || (map[(hup.x/32)][(hup.y/32)-2]) instanceof bois)) {
    hup.y = hup.y-32;
    hup.x = hup.x +16;
    setTimeout("hup.y = hup.y -32",5);
    setTimeout("hup.x = hup.x -16;",5);
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
            ennemi.vie -= 1*hup.braceletForce;
            if(ennemi.vie >0){
              if(ennemi.collisionDecorEnnemisAttaqueG()){
                ennemi.x -=32;
                ennemi.cpt=true;
              }
              else if(ennemi.cpt == true ) {
                ennemi.x -=(ennemi.x%32);
                ennemi.cpt=false;
              }
              if(ennemi.angle ==90){
                if(ennemi.type == "poulpeR"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRfaceR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRface.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
                if(ennemi.type == "poulpeB"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBfaceR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBface.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
                if(ennemi.type == "pouf"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightfaceR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightface.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
              }
              if(ennemi.angle ==360){
                if(ennemi.type == "poulpeR"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdosR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdos.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
                if(ennemi.type == "poulpeB"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdosR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdos.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
                if(ennemi.type == "pouf"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightdosR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightdos.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
              }
              if(ennemi.angle ==0){
                if(ennemi.type == "poulpeR"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRgaucheR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRgauche.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
                if(ennemi.type == "poulpeB"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBgaucheR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBgauche.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
                if(ennemi.type == "pouf"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightGaucheR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightGauche.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
              }
              if(ennemi.angle ==180){
                if(ennemi.type == "poulpeR"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdroiteR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdroite.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
                if(ennemi.type == "poulpeB"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdroiteR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdroite.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
                if(ennemi.type == "pouf"){
                  ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightDroitR.png'", 50);
                  ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightDroit.png'", 100);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                  setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                  setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                  ennemi.invinsibilite = true;
                }
              }
            }
        }
      }
      if(hup.angle == 180){
        if(hup.x+taille > ennemi.x-taille && hup.x+taille < ennemi.x+taille && hup.y>ennemi.y-taille && hup.y < ennemi.y+taille){
          hup.ennemiIndex = ennemis.indexOf(ennemi);
          ennemi.vie -= 1*hup.braceletForce;
          if(ennemi.vie >0){
            if(ennemi.collisionDecorEnnemisAttaqueD()){
              ennemi.x +=32;
              ennemi.cpt=true;
            }
            else if(ennemi.cpt == true ) {
              ennemi.x +=((32-ennemi.x%32)%32);
              ennemi.cpt=false;
            }
            if(ennemi.angle ==90){
              if(ennemi.type == "poulpeR"){
                console.log("ennemis[hup.ennemiIndex].image.src"); 
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==360){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==0){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRgaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRgauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBgaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBgauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightGaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightGauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==180){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdroiteR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdroite.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdroiteR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdroite.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightDroitR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightDroit.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            }
        }
      }
      if(hup.angle == 90){
        if(hup.x > ennemi.x-taille && hup.x < ennemi.x+taille && hup.y+taille>ennemi.y-taille && hup.y+taille < ennemi.y+taille){
          hup.ennemiIndex = ennemis.indexOf(ennemi);
          ennemi.vie -= 1*hup.braceletForce;
          if(ennemi.vie >0){
            if(ennemi.collisionDecorEnnemisAttaqueB()){
              ennemi.y +=32;
              ennemi.cpt=true;
            }
            else if(ennemi.cpt == true ) {
              ennemi.y +=((32-ennemi.y%32)%32);
              ennemi.cpt=false;
            }
            if(ennemi.angle ==90){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==360){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==0){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRgaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRgauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBgaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBgauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightGaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightGauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==180){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdroiteR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdroite.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdroiteR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdroite.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightDroitR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightDroit.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            }
        }
      }
      if(hup.angle == 360){
        if(hup.x > ennemi.x-taille && hup.x < ennemi.x+taille && hup.y-taille > ennemi.y-taille && hup.y-taille < ennemi.y+taille){
          hup.ennemiIndex = ennemis.indexOf(ennemi);
          ennemi.vie -= 1*hup.braceletForce;
          if(ennemi.vie >0){
            if(ennemi.collisionDecorEnnemisAttaqueH()){
              ennemi.y -=32;
              ennemi.cpt=true;
            }
            else if(ennemi.cpt == true ) {
              ennemi.y -=(ennemi.y%32);
              ennemi.cpt=false;
            }
            if(ennemi.angle ==90){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightfaceR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightface.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==360){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightdosR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightdos.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==0){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRgaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRgauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBgaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBgauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightGaucheR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightGauche.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
            if(ennemi.angle ==180){
              if(ennemi.type == "poulpeR"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdroiteR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeR/poulpeRdroite.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "poulpeB"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdroiteR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spritePoulpeB/poulpeBdroite.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
              if(ennemi.type == "pouf"){
                ennemi.black = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightDroitR.png'", 50);
                ennemi.couleurtemp = setInterval("ennemis[hup.ennemiIndex].image.src = 'js/spriteKnight/knightDroit.png'", 100);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].black)",601);
                setTimeout("clearInterval(ennemis[hup.ennemiIndex].couleurtemp)",601);
                setTimeout("ennemis[hup.ennemiIndex].invinsibilite = false",601);
                ennemi.invinsibilite = true;
              }
            }
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
        hup.image.src = "js/hupGauche.png";
        if(hup.invinsibilite == true){
          clearInterval(hup.red);
          clearInterval(hup.black);
          hup.red =setInterval("hup.image.src = 'js/hupGaucheR.png'", 50);
          hup.black =setInterval("hup.image.src = 'js/hupGauche.png'", 100);
        }
        break;
        case 39:
          //-Move right
          hup.x += hup.vd;
          hup.angle = 180
          hup.image.src = "js/hupDroite.png";
          if(hup.invinsibilite == true){
            clearInterval(hup.red);
            clearInterval(hup.black);
            hup.red =setInterval("hup.image.src = 'js/hupDroitR.png'", 50);
            hup.black =setInterval("hup.image.src = 'js/hupDroite.png'", 100);
          }
          break;
      case 38:
          //-Move up
          hup.y -= hup.vh;
          hup.angle = 360;
          hup.image.src = "js/hupDos.png";
          if(hup.invinsibilite == true){
            clearInterval(hup.red);
            clearInterval(hup.black);
            hup.red =setInterval("hup.image.src = 'js/hupDosR.png'", 50);
            hup.black =setInterval("hup.image.src = 'js/hupDos.png'", 100);
          }
          break;
      case 40:
          //-Move down
          hup.y += hup.vb;
          hup.angle = 90;
          hup.image.src = "js/hupFace.png";
          if(hup.invinsibilite == true){
            clearInterval(hup.red);
            clearInterval(hup.black);
            hup.red =setInterval("hup.image.src = 'js/hupFaceR.png'", 50);
            hup.black =setInterval("hup.image.src = 'js/hupFace.png'", 100);
          }
          break;
      case 90:
          if(hup.bottes ==1){
            saut(hup,map);
          }
          break;
      case 32:
          attaqueHup(hup,ennemis);
          break;
      case 13:
          if(hup.vie <=0){
          hup.statutGameOver = true;
          }
          break;
      default:
          break;
      }

  }


  }
