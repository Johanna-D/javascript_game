class pouf extends Personnage{
    couleur = 'orange';
    vie = 3;
    couleurdegat = 'orange';
    vitesse = 1;

    detectionHupBasGauche(hup){
        if(hup.y>this.y && hup.y<=this.y+5*32 && (hup.x >=  this.x-5*32 && hup.x< this.x)){
        console.log("Collision Bas Gauche");
        return true
        }  
    } 
    detectionHupBasDroite(hup){
        if(hup.y>this.y && hup.y<=this.y+5*32 && (hup.x <=  this.x+5*32 && hup.x>= this.x)){
        console.log("Collision Bas Droite");
        return true
        }  
    } 
    detectionHupHautGauche(hup){
        if(hup.y<=this.y && hup.y>=this.y-5*32 && (hup.x >=  this.x-5*32 && hup.x< this.x)){
        console.log("Collision Haut Gauche");
        return true;
        }
    }
    detectionHupHautDroite(hup){
        if(hup.y<=this.y && hup.y>=this.y-5*32 && (hup.x <=  this.x+5*32 && hup.x>= this.x)){
        console.log("Collision Haut Droite");
        return true;
        }
    }
    deplacementPouf(hup){
        if(this.detectionHupHaut(hup)){
            let xh = Math.abs(this.x-hup.x);
        }
    }
}