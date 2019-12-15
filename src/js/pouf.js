class pouf extends Personnage{
    couleur = 'orange';
    vie = 3;
    couleurdegat = 'orange';
    vitesse = 2;

    detectionHupBasGauche(hup){
        if(hup.y>this.y && hup.y<=this.y+5*32 && (hup.x >=  this.x-5*32 && hup.x< this.x)){
        return true
        }
    }
    detectionHupBasDroite(hup){
        if(hup.y>this.y && hup.y<=this.y+5*32 && (hup.x <=  this.x+5*32 && hup.x>= this.x)){
        return true
        }
    }
    detectionHupHautGauche(hup){
        if(hup.y<=this.y && hup.y>=this.y-5*32 && (hup.x >=  this.x-5*32 && hup.x< this.x)){
        return true;
        }
    }
    detectionHupHautDroite(hup){
        if(hup.y<=this.y && hup.y>=this.y-5*32 && (hup.x <=  this.x+5*32 && hup.x>= this.x)){
        return true;
        }
    }
    collisionDecorEnnemisPoufB(){
      if((this.x%32 == 0) && (this.y%32 == 0)){
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
  else if(map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof roche || map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof eau || map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)][Math.ceil(this.y/32)] instanceof arbre || this.x <= 32){
  console.log("hey2");
      console.log(Math.floor(this.x/32)+"et"+Math.ceil(this.y/32));
    return false;
  }
  else if(map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.floor(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.floor(this.x/32)][Math.ceil(this.y/32)-2] instanceof arbre || this.x <= 32){
    console.log("hey3");
    console.log((Math.floor(this.x/32))+"et"+(Math.ceil(this.y/32)-1))
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisPoufD(){
  if((this.x%32 == 0) && (this.y%32 == 0)){
  if(map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >= 736){
    return false;
  }
  else{return true;}
}
else if(map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.ceil(this.y/32)] instanceof arbre || this.x >= 736){
  return false;
}
  if(map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)] instanceof arbre || this.x >= 736){
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
else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)] instanceof arbre || this.y <  32){
  console.log("haut2");
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
                if(yh>=xh && this.collisionDecorEnnemisH()){
                    this.y -= this.vitesse;
                }
                else if(this.collisionDecorEnnemisPoufG()){
                    this.x -= this.vitesse;
                }
                }
            if(this.detectionHupHautDroite(hup)){
                let yh = this.y - hup.y;
                let xh = hup.x - this.x;
                if(yh>=xh && this.collisionDecorEnnemisH()){
                    this.y -= this.vitesse;
                }
                else if(this.collisionDecorEnnemisPoufD()){
                    this.x += this.vitesse;
                }
            }
            if(this.detectionHupBasGauche(hup)){
                let yh = hup.y - this.y;
                let xh = this.x - hup.x;
                if(yh>=xh && this.collisionDecorEnnemisPoufB()){
                    this.y += this.vitesse;
                }
                else if(this.collisionDecorEnnemisG()){
                    this.x -= this.vitesse;
                }
            }
            if(this.detectionHupBasDroite(hup)){
                let yh = hup.y - this.y;
                let xh = hup.x - this.x;
                if(yh>=xh && this.collisionDecorEnnemisPoufB()){
                    this.y += this.vitesse;
                }
                else if(this.collisionDecorEnnemisPoufD()){
                    this.x += this.vitesse;
                }
            }
}
}
