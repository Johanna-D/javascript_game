class ennemi1 extends Personnage{
    couleur = 'red';
    mouvx = this.x;
    mouvy = this.y;
    value = this.vg/32;
    collisiondecord(){
      if(map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.floor(this.x/32)+1][Math.floor(this.y/32)] instanceof arbre){
        return false;
      }
      else{return true;}
    }
    collisiondecorg(){
      if(map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil(this.x/32)-1][Math.ceil(this.y/32)] instanceof arbre){
        return false;
      }
      else{return true;}
    }
    collisiondecorb(){
      if(map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof roche || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eau || map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof eauProfonde ||map[Math.floor(this.x/32)][Math.floor(this.y/32)+1] instanceof arbre){
        return false;
      }
      else{return true;}
    }
    collisiondecorh(){
      if(map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.ceil(this.y/32)-1] instanceof arbre){
        return false;
      }
      else{return true;}
    }

    deplacement(){
      if(this.x < (this.mouvx + (8*32)) && d1 == true && this.collisiondecord()){
        this.x += this.vd/32;
      }
      else if(this.y < (this.mouvy + (8*32))  && d1 == true && this.collisiondecorb()){
        this.y += this.vb/32;
      }
      else if(!(this.collisiondecorb()) && d1 == true){
          d1 = false;
          d2 = true;
      }
      else if(d1==true){
        d1 = false;
        d2 = true;
      }
      else if(this.x > this.mouvx && d2 == true && this.collisiondecorg()){
        this.x -= this.vg/32;
      }
      else if(this.y > this.mouvy && d2 == true && this.collisiondecorh()){
        this.y -= this.vh/32;

      }
      else if(!(this.collisiondecorh()) && d2 == true){
        d2 = false;
        d1 = true;
      } 
      else if(d2 ==true){
        d2 = false;
        d1 = true;
      }

}
}
