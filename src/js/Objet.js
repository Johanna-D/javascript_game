class Objet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.taille = 16;
        }
    draw(){
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x,this.y,this.taille,this.taille);
        ctx.restore();
    }
}
