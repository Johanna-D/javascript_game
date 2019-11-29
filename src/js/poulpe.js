class poulpe extends Personnage{
    couleur = 'red';
    mouvx = this.x;
    mouvy = this.y;
    black = 'black';
    vie = 20 ;
    tir = 0;
    deplacement(){
      if(this.x < (this.mouvx + (8*32)) && d1 == true && this.collisionDecorEnnemisD()){
        this.angle = 180;
        this.x += this.vd/32;
      }
      else if(this.y < (this.mouvy + (8*32))  && d1 == true && this.collisionDecorEnnemisB()){
        this.y += this.vb/32;
        this.angle = 90;
      }
      else if(!(this.collisionDecorEnnemisB()) && d1 == true){
          d1 = false;
          d2 = true;
      }
      else if(d1==true){
        d1 = false;
        d2 = true;
      }
      else if(this.x > this.mouvx && d2 == true && this.collisionDecorEnnemisG()){
        this.x -= this.vg/32;
        this.angle = 0;
      }
      else if(this.y > this.mouvy && d2 == true && this.collisionDecorEnnemisH()){
        this.y -= this.vh/32;
        this.angle = 360;
      }
      else if(!(this.collisionDecorEnnemisH()) && d2 == true){
        d2 = false;
        d1 = true;
      }
      else if(d2 ==true){
        d2 = false;
        d1 = true;
      }
}
}
