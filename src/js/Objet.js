class Objet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.taille = 32;
        this.etat = true;
        }
    /* POUR DESSINER SANS TEXTURES 
    
    draw(){
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x,this.y,this.taille,this.taille);
        ctx.restore();
    }*/

    // --------- POUR DESSINER AVEC TEXTURES -------------
    draw(){
        ctx.save();
        ctx.fillStyle = "#D2A75C";
        if (this.couleur == "#0C5210"){
            var image = new Image();
            image.src = 'js/classesDecor/tree.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
            
            
        }
        else if (this.couleur == "#348D12"){
            var image = new Image();
            image.src = 'js/classesDecor/herbe.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
            
            
        }
        else if (this.couleur == "#3570A4" || this.couleur == "#0b2045"){
            ctx.fillStyle = this.couleur;
            var image = new Image();
            image.src = 'js/classesDecor/water.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
            
            
        }
        else {
            ctx.fillStyle = this.couleur;
            ctx.fillRect(this.x,this.y,this.taille,this.taille); 
        }
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
