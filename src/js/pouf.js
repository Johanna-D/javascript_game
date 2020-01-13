class pouf extends Personnage{
    vie = 9;
    image = new Image();
    vitesse = 1.9;
    degatcac = 1;
    type = "pouf";
    mort = 0;

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
      return false;
    }
    else{return true;}
  }
  else if(map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof roche || map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof eau || map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <= 32){
    return false;
  }
  else if(map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof arbre || this.x <= 32){
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
    return false;
  }
  else{return true;}
}
else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)] instanceof arbre || this.y <  32){
  return false;
}
else if(map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)] instanceof arbre || this.y <  32){
  return false;
}
else{return true;}
}
    deplacementPouf(hup){
            if(this.detectionHupHautGauche(hup)){
                let yh = this.y - hup.y;
                let xh = this.x - hup.x;
                /*this.poufPosition = "haut";
                console.log(this.poufPosition);*/
                if(yh>=xh && this.collisionDecorEnnemisH()){
                    this.y -= this.vitesse;
                    this.angle=360;
                }
                else if(this.collisionDecorEnnemisG()){
                    this.x -= this.vitesse;
                    this.angle=0;
                }
                }
                if(this.detectionHupHautDroite(hup)){
                    let yh = this.y - hup.y;
                    let xh = hup.x - this.x;
                    if(yh>=xh && this.collisionDecorEnnemisH()){
                        this.y -= this.vitesse;
                        this.angle=360;
                    }
                    else if(this.collisionDecorEnnemisD()){
                        this.x += this.vitesse;
                        this.angle=180;
                    }
                }
            if(this.detectionHupBasGauche(hup)){
                let yh = hup.y - this.y;
                let xh = this.x - hup.x;
                if(this.collisionDecorEnnemisB()){
                    this.y += this.vitesse;
                    this.angle=90;
                }
                if(yh>=xh && this.collisionDecorEnnemisG()){
                    this.x -= this.vitesse;
                    this.angle=0;
                }
            }
            if(this.detectionHupBasDroite(hup)){
                let yh = hup.y - this.y;
                let xh = hup.x - this.x;
                if(yh>=xh && this.collisionDecorEnnemisB()){
                    this.y += this.vitesse;
                    this.angle=90;
                }
                else if(this.collisionDecorEnnemisD()){
                    this.x += this.vitesse;
                    this.angle=180;
                }
            }
}
}
