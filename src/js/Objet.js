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

    // --------- TEST POUR DESSINER LES TEXTURES -------------
    // --------- Pas d'erreur dans la console, mais ne fonctionne pas -------------
    /*draw(){
        ctx.save();
        ctx.fillStyle = this.couleur;
        if (this.couleur == "#0C5210"){
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            var img = new Image();   // Crée un nouvel élément img
            img.addEventListener('load', function() {
                
                ctx.drawImage(img, this.x, this.y);
            }, false);
            
            img.src = this.image; // définit le chemin de la source
            
        }
        else {
            ctx.fillRect(this.x,this.y,this.taille,this.taille); 
        }
        ctx.restore();
        
    }

    */
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
