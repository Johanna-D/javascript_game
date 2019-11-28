class Objet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.taille = 32;
        this.etat = true;
        }
    draw(){
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x,this.y,this.taille,this.taille);
        ctx.restore();
    }
    collisionObjetHup(hup){
        if (hup.x == this.x && hup.y == this.y && this.etat == true){
            if (hup.vie < 3 && this.type == "coeur"){
                hup.vie += 0.5;
                this.etat = false;
            }
            if(this.type == "clef"){
                hup.clefs += 1;
                this.etat = false;
            }
        }
    }
    drawObjet(){
        if (this.etat == true){
            this.draw();
        }
    }
}
