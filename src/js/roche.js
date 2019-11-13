
class roche{
  constructor(){
    this.x = 1;
    this.y = 1;
    this.taille = 16;
    this.couleurRoche = "#655b5b";
  }
  drawrectClic(x,y, couleurRoche){
    ctx.save();
    ctx.fillStyle = couleurRoche;
    ctx.fillRect(this.x * x,this.y * y,this.taille,this.taille);
    ctx.restore();
  }
}