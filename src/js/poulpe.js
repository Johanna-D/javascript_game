class poulpe extends Personnage{
  constructor(x,y){
    super(x,y);
    this.mouvx = this.x;
    this.mouvy = this.y;
    this.black = 'black';
    this.couleurtemp;
    this.tir = 0;
    this.d1 = true;
    this.d2 = false;
    this.vitesse = 1;
    this.balles= [];
  }
    deplacement(){
      if(this.x < (this.mouvx + (8*32)) && this.d1 == true && this.collisionDecorEnnemisD()){
        this.angle = 180;
        this.x += this.vitesse;
      }
      else if(this.y < (this.mouvy + (8*32))  && this.d1 == true && this.collisionDecorEnnemisB()){
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
      else if(this.x > this.mouvx && this.d2 == true && this.collisionDecorEnnemisG()){
        this.x -= this.vitesse;
        this.angle = 0;
      }
      else if(this.y > this.mouvy && this.d2 == true && this.collisionDecorEnnemisH()){
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
