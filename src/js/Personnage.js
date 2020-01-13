class Personnage {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.taille = 32;
    this.invinsibilite = false;
    this.angle = 0;
    this.mouvx = this.x;
    this.mouvy = this.y;
    this.black = 'black';
    this.couleurtemp;
    this.d1 = true;
    this.d2 = false;
    this.poufPosition;

  }
  collisionDecorEnnemisAttaqueD(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof vide || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof murDroit || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof murGauche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof murBas || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof murHaut || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >= 736){
      return false;
    }
    else{return true;}
  }
  else if(map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof vide ||map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof murDroit ||map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof murGauche ||map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof murHaut ||map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof murBas ||map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof arbre || this.x >= 736){
    return false;
  }
  else if(map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof vide || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof murGauche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof murDroit || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof murBas || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof murHaut || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >= 736){
    return false;
  }
  else{
    return true;
  }
}

  collisionDecorEnnemisAttaqueG(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof vide || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof murGauche || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof murDroit || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof murBas || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof murHaut || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <= 32){
      return false;
    }
    else{return true;}
  }
  else if(map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof vide || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof murGauche|| map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof murDroit || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof murHaut || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof murBas || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <= 32){
    return false;
  }
  else if(map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof vide || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof murHaut || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof murGauche || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof murDroit || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof murBas || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof roche || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof eau || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof arbre || this.x <= 32){
    return false;
  }
  else{return true;}
}

  collisionDecorEnnemisAttaqueB(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof vide || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof murGauche || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof murDroit || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof murBas || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof murHaut || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof roche || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eauProfonde ||map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof arbre || this.y >= 544){
      return false;
    }
    else{return true;}
  }
  else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof vide || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof murGauche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof murDroit || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof murHaut || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof murBas || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof roche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof eau || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof arbre || this.y >= 544){
    return false;
  }
  else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof vide || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof murDroit || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof murGauche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof murBas || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof murHaut || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+2] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+2] instanceof eau || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+2] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)+2] instanceof arbre || this.y >= 544){
    return false;
  }
  else{return true;}
}

  collisionDecorEnnemisAttaqueH(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof vide || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof murDroit || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof murGauche || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof murBas || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof murHaut || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof arbre || this.y <  32){
      return false;
    }
    else{return true;}
  }
  else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof vide || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof murGauche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof murDroit || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof murBas || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof murHaut || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof arbre || this.y <  32){
    return false;
  }
  else if(map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof vide || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof murGauche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof murDroit || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof murHaut || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof murBas || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof arbre || this.y <  32){
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisD(){
  if(map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof vide || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof murGauche || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof murDroit || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof murHaut || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof murBas || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >canvas.width-33){
    return false;
  }
  else{return true;}
}

collisionDecorEnnemisG(){
  if(map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof vide || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof murDroit || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof murGauche || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof murBas || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof murHaut || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <0){
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisB(){
  if(map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof vide || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof murGauche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof murBas || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof murDroit || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof murHaut || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof arbre || this.y >=canvas.height-96){
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisH(){
  if(map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof vide || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof murDroit || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof murGauche || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof murBas || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof murHaut || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof arbre || this.y <0){
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisHD(){
  if(map[Math.ceil(this.x/32+1)][Math.ceil(this.y/32)-1] instanceof vide || map[Math.ceil(this.x/32+1)][Math.ceil(this.y/32)-1] instanceof murDroit || map[Math.ceil(this.x/32+1)][Math.ceil(this.y/32)-1] instanceof murGauche || map[Math.ceil(this.x/32+1)][Math.ceil(this.y/32)-1] instanceof murBas || map[Math.ceil(this.x/32+1)][Math.ceil(this.y/32)-1] instanceof murHaut || map[Math.ceil(this.x/32+1)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32+1)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)-1] instanceof arbre || this.y <0){
    return false;
  }
  else{
    return true;
    }
}
  draw() {
      ctx.save();
      // -------- POULPE ROUGE --------------//
      if (this.type == "poulpeR" && this.angle == 90){
            this.image.src = 'js/spritePoulpeR/poulpeRface.png';
            ctx.drawImage(this.image, this.x, this.y);
      }
      else if (this.type == "poulpeR" && this.angle == 180){
        this.image.src = 'js/spritePoulpeR/poulpeRdroite.png';
        ctx.drawImage(this.image, this.x, this.y);
      }
      else if (this.type == "poulpeR" && this.angle == 0){
        this.image.src = 'js/spritePoulpeR/poulpeRgauche.png';
        ctx.drawImage(this.image, this.x, this.y);
      }
      else if (this.type == "poulpeR" && this.angle == 360){
        this.image.src = 'js/spritePoulpeR/poulpeRdos.png';
        ctx.drawImage(this.image, this.x, this.y);
      }

      // ---------- POULPE BLEU ------------ //
      if (this.type == "poulpeB" && this.angle == 90){
        var poulpeBface = new Image();
        poulpeBface.src = 'js/spritePoulpeB/poulpeBface.png';
        ctx.drawImage(poulpeBface, this.x, this.y);
  }
  else if (this.type == "poulpeB" && this.angle == 180){
    var poulpeBdroite = new Image();
    poulpeBdroite.src = 'js/spritePoulpeB/poulpeBdroite.png';
    ctx.drawImage(poulpeBdroite, this.x, this.y);
  }
  else if (this.type == "poulpeB" && this.angle == 0){
    var poulpeBgauche = new Image();
    poulpeBgauche.src = 'js/spritePoulpeB/poulpeBgauche.png';
    ctx.drawImage(poulpeBgauche, this.x, this.y);
  }
  else if (this.type == "poulpeB" && this.angle == 360){
    var poulpeBdos = new Image();
    poulpeBdos.src = 'js/spritePoulpeB/poulpeBdos.png';
    ctx.drawImage(poulpeBdos, this.x, this.y);
  }
      // ---------- POUF --------------- //
  if (this.type == "pouf" && this.angle == 90){
      var poufface = new Image();
      poufface.src = 'js/spritePouf/poufface.png';
      ctx.drawImage(poufface, this.x, this.y);
  }
  else if (this.type == "pouf" && this.angle == 180){
    var poufdroite = new Image();
    poufdroite.src = 'js/spritePouf/poufdroite.png';
    ctx.drawImage(poufdroite, this.x, this.y);
  }
  else if (this.type == "pouf" && this.angle == 0){
    var poufgauche = new Image();
    poufgauche.src = 'js/spritePouf/poufgauche.png';
    ctx.drawImage(poufgauche, this.x, this.y);
  }
  else if (this.type == "pouf" && this.poufPosition=="haut"){
    var poufdos = new Image();
    poufdos.src = 'js/spritePouf/poufdos.png';
    ctx.drawImage(poufdos, this.x, this.y);
  }
  if(this.type == "PNJ"){
    var pnj = new Image();
    pnj.src = 'js/spritePNJ/PNJ.png';
    ctx.drawImage(pnj, this.x, this.y);
  }
      ctx.restore();
  }

  mortEnnemi(ennemis,objets){
    if(this.vie <= 0){
      mortEnnemi = true;
      ennemiX = this.x;
      ennemiY = this.y;
      clearInterval(ennemis[ennemis.indexOf(this)].couleurtemp);
      clearInterval(ennemis[ennemis.indexOf(this)].black);
      ennemis[ennemis.indexOf(this)].invinsibilité = false;
      if((Math.random()*100)<=25){
        objets.push(new coeur(this.x,this.y));
      }
      ennemis.splice(ennemis.indexOf(this),1);
    }
  }
  deplacement(){
    if(this.x < (this.mouvx + (8*32)) && this.d1 == true && this.collisionDecorEnnemisD()){// ALLER A DROITE
      this.angle = 180;
      this.x += this.vitesse;
    }
    else if(this.y < (this.mouvy + (8*32))  && this.d1 == true && this.collisionDecorEnnemisB()){// ALLER EN BAS
      this.y += this.vitesse;
      this.angle = 90;
    }
    else if(!(this.collisionDecorEnnemisB()) && this.d1 == true){
        this.d1 = false;
        this.d2 = true;
    }
    else if(this.d1==true){
      this.d1 = false;
      this.d2 = true;
    }
    else if(this.x > this.mouvx && this.d2 == true && this.collisionDecorEnnemisG()){ // ALLER A GAUCHE
      this.x -= this.vitesse;
      this.angle = 0;
    }
    else if(this.y > this.mouvy && this.d2 == true && this.collisionDecorEnnemisH()){ // ALLER EN HAUT
      this.y -= this.vitesse;
      this.angle = 360;
    }
    else if(!(this.collisionDecorEnnemisH()) && this.d2 == true){
      this.d2 = false;
      this.d1 = true;
    }
    else if(this.d2 ==true){
      this.d2 = false;
      this.d1 = true;
    }
}
}
