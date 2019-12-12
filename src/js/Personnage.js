class Personnage {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.taille = 32;
    this.vg = 32;
    this.vd = 32;
    this.vh = 32;
    this.vb = 32;
    this.red = 'red';
    this.invinsibilite = false;
    this.angle = 0;
    this.cpt = true;
  }
  collisionDecorEnnemisAttaqueD(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >= 736){
      console.log("Fine");
      return false;
    }
    else{return true;}
  }
  else if(map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)+1][Math.ceil(this.y/32)] instanceof arbre || this.x >= 736){
    return false;
  }
  else if(map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >= 736){
    console.log("collision");
    return false;
  }
  else{
    return true;
  }
}

  collisionDecorEnnemisAttaqueG(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <= 32){
      return false;
    }
    else{return true;}
  }
  else if(map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <= 32){
    return false;
  }
  else if(map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof roche || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof eau || map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.floor(this.x/32)-1][Math.ceil(this.y/32)-1] instanceof arbre || this.x <= 32){
    console.log("collision");
    return false;
  }
  else{return true;}
}

  collisionDecorEnnemisAttaqueB(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof roche || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eauProfonde ||map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof arbre || this.y >= 544){
      return false;
    }
    else{return true;}
  }
  else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof roche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof eau || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)+2] instanceof arbre || this.y >= 544){
    return false;
  }
  else if(map[Math.ceil(this.x/32)][Math.floor(this.y/32)+2] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+2] instanceof eau || map[Math.ceil(this.x/32)][Math.floor(this.y/32)+2] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)+2] instanceof arbre || this.y >= 544){
    console.log("collision");
    return false;
  }
  else{return true;}
}

  collisionDecorEnnemisAttaqueH(){
    if((this.x%32 == 0) && (this.y%32 == 0)){
    if(map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof arbre || this.y <  32){
      return false;
    }
    else{return true;}
  }
  else if(map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.floor(this.y/32)-1] instanceof arbre || this.y <  32){
    return false;
  }
  else if(map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.floor(this.y/32)-1] instanceof arbre || this.y <  32){
    console.log("collision");
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisD(){
  if(map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >canvas.width-33){
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisG(){
  if(map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <0){
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisB(){
  if(map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof roche || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eauProfonde ||map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof arbre || this.y >=canvas.height-32){
    return false;
  }
  else{return true;}
}
collisionDecorEnnemisH(){
  if(map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof arbre || this.y <0){
    return false;
  }
  else{return true;}
}
  draw() {
      ctx.save();
      ctx.fillStyle = this.couleur;
      ctx.fillRect(this.x, this.y, this.taille, this.taille);
      ctx.restore();
  }
  mortEnnemi(ennemis){
    if(this.vie <= 0){
      clearInterval(ennemis[ennemis.indexOf(this)].couleurtemp);
      clearInterval(ennemis[ennemis.indexOf(this)].black);
      ennemis[ennemis.indexOf(this)].invinsibilité = false;
      ennemis.splice(ennemis.indexOf(this),1);
    }
  }
}
