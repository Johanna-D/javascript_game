
class roche{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.taille = 16;
    this.couleurRoche = "#655b5b";
  }
  
}
function draw(roche){
  ctx.save();
  ctx.fillStyle = roche.couleurRoche;
  ctx.fillRect(roche.x,roche.y,roche.taille,roche.taille);
  ctx.restore();
}