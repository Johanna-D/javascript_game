class poulpe extends Personnage{
    couleur = 'red';
    mouvx = this.x;
    mouvy = this.y;
    black = 'black';
    vie = 3;
    tir = 0;
    d1 = true;
    d2 = false;
    deplacement(){
      if(this.x < (this.mouvx + (8*32)) && this.d1 == true && this.collisionDecorEnnemisD()){
        this.angle = 180;
        this.x += this.vd/32;
      }
      else if(this.y < (this.mouvy + (8*32))  && this.d1 == true && this.collisionDecorEnnemisB()){
        this.y += this.vb/32;
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
      else if(this.x > this.mouvx && this.d2 == true && this.collisionDecorEnnemisG()){
        this.x -= this.vg/32;
        this.angle = 0;
      }
      else if(this.y > this.mouvy && this.d2 == true && this.collisionDecorEnnemisH()){
        this.y -= this.vh/32;
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
