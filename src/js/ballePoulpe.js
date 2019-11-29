class ballePoulpe{
  constructor(x,y,angle){
      this.x = x;
      this.y = y;
      this.taille = 32;
      this.etat = true;
      this.angle = angle;
      }
  drawTir(){
    if(this.angle ==0){
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.arc(this.x, this.y+16, 8, 0, 2 * Math.PI);
      ctx.fill();
    }
    if(this.angle ==180){
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.arc(this.x+32,this.y+16, 8, 0, 2 * Math.PI);
      ctx.fill();
    }
    if(this.angle ==90){
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.arc(this.x+16, this.y+32, 8, 0, 2 * Math.PI);
      ctx.fill();
    }
    if(this.angle ==360){
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.arc(this.x+16, this.y, 8, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}
