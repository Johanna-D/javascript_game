class pouf extends Personnage{
    couleur = 'orange';
    vie = 3;
    couleurdegat = 'orange';
    vitesse = 2;
    degatcac = 1;
    type = "pouf";

    detectionHupBasGauche(hup){
        if(hup.y>this.y && hup.y<=this.y+5*32 && (hup.x >=  this.x-5*32 && hup.x<= this.x)){
        return true
        }
    }
    detectionHupBasDroite(hup){
        if(hup.y>this.y && hup.y<=this.y+5*32 && (hup.x <=  this.x+5*32 && hup.x> this.x)){
        return true
        }
    }
    detectionHupHautGauche(hup){
        if(hup.y<=this.y && hup.y>=this.y-5*32 && (hup.x >=  this.x-5*32 && hup.x<= this.x)){
        return true;
        }
    }
    detectionHupHautDroite(hup){
        if(hup.y<=this.y && hup.y>=this.y-5*32 && (hup.x <=  this.x+5*32 && hup.x> this.x)){
        return true;
        }
    }
    collisionDecorEnnemisPoufB(){
      if((this.x%32 == 0) || (this.y%32 == 0)){
      if(map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof roche || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eauProfonde ||map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof arbre || this.y >= 544){
        return false;
      }
      else{return true;}
    }
    else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+1] instanceof roche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+1] instanceof eau || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+1] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+1] instanceof arbre || this.y >= 544){
      return false;
    }
    else if(map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof arbre || this.y >= 544){
      return false;
    }
    else{return true;}
  }
  collisionDecorEnnemisPoufG(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <= 32){
        console.log("hey");
      return false;
    }
    else{return true;}
  }
  else if(map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof roche || map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof eau || map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <= 32){
  console.log("hey2");
      console.log(Math.floor(this.x/32)+"et"+Math.ceil(this.y/32));
    return false;
  }
  else if(map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof arbre || this.x <= 32){
    console.log("hey3");
    console.log((Math.floor(this.x/32))+"et"+(Math.ceil(this.y/32)-1))
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisPoufD(){
  if((this.x%32 == 0) && (this.y%32 == 0)){
  if(map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >= 736){
    return false;
  }
  else{return true;}
}
else if(map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)+1][Math.ceil(this.y/32)] instanceof arbre || this.x >= 736){
  console.log("droite2");
  return false;
}
  if(map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >= 736){
  return false;
}
else{
  return true;
}
}
collisionDecorEnnemisPoufH(){
  if((this.x%32 == 0) && (this.y%32 == 0)){
  if(map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof arbre || this.y <  32){
    console.log("haut");
    return false;
  }
  else{return true;}
}
else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)] instanceof arbre || this.y <  32){
  console.log("haut2");
  console.log((Math.ceil(this.x/32))+" et "+Math.floor(this.y/32))
  return false;
}
else if(map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)] instanceof arbre || this.y <  32){
  console.log("haut3");
  return false;
}
else{return true;}
}
    deplacementPouf(hup){
            if(this.detectionHupHautGauche(hup)){
                let yh = this.y - hup.y;
                let xh = this.x - hup.x;
                console.log("detection haut gauche");
                /*this.poufPosition = "haut";
                console.log(this.poufPosition);*/
                if(yh>=xh && this.collisionDecorEnnemisH()){
                    this.y -= this.vitesse;
                    this.angle=360;
                    console.log("avance haut gauche en Y");
                }
                else if(this.collisionDecorEnnemisG()){
                    this.x -= this.vitesse;
                    this.angle=0;
                    console.log("avance haut gauche en X");
                }
                }
                if(this.detectionHupHautDroite(hup)){
                  console.log("detection haut droit");
                    let yh = this.y - hup.y;
                    let xh = hup.x - this.x;
                    if(yh>=xh && this.collisionDecorEnnemisH()){
                      console.log("monte haut droit");
                        this.y -= this.vitesse;
                        this.angle=360;
                    }
                    else if(this.collisionDecorEnnemisD()){
                      console.log("droite  haut droite");
                        this.x += this.vitesse;
                        this.angle=180;
                    }
                }
            if(this.detectionHupBasGauche(hup)){
              console.log("detection bas gauche");
                let yh = hup.y - this.y;
                let xh = this.x - hup.x;
                if(this.collisionDecorEnnemisB()){
                    this.y += this.vitesse;
                    this.angle=90;
                    console.log("descend bas gauche");
                }
                if(yh>=xh && this.collisionDecorEnnemisG()){
                  console.log("bas gauche");
                    this.x -= this.vitesse;
                    this.angle=0;
                }
            }
            if(this.detectionHupBasDroite(hup)){
              console.log("detection bas droit");
                let yh = hup.y - this.y;
                let xh = hup.x - this.x;
                if(yh>=xh && this.collisionDecorEnnemisB()){
                  console.log("descend bas droite ");
                    this.y += this.vitesse;
                    this.angle=90;
                }
                else if(this.collisionDecorEnnemisD()){
                  console.log("va a droite bas droit");
                    this.x += this.vitesse;
                    this.angle=180;
                }
            }
}
}
