class pouf extends Personnage{
    couleur = 'orange';
    vie = 3;
    couleurdegat = 'orange';
    vitesse = 2;

    detectionHupBasGauche(hup){
        if(hup.y>this.y && hup.y<=this.y+5*32 && (hup.x >=  this.x-5*32 && hup.x< this.x)){
        return true
        }  
    } 
    detectionHupBasDroite(hup){
        if(hup.y>this.y && hup.y<=this.y+5*32 && (hup.x <=  this.x+5*32 && hup.x>= this.x)){
        return true
        }  
    } 
    detectionHupHautGauche(hup){
        if(hup.y<=this.y && hup.y>=this.y-5*32 && (hup.x >=  this.x-5*32 && hup.x< this.x)){
        return true;
        }
    }
    detectionHupHautDroite(hup){
        if(hup.y<=this.y && hup.y>=this.y-5*32 && (hup.x <=  this.x+5*32 && hup.x>= this.x)){
        return true;
        }
    }
    deplacementPouf(hup){
        if(this.detectionHupHautGauche(hup) || this.detectionHupHautDroite(hup) || this.detectionHupBasGauche(hup) || this.detectionHupBasDroite(hup)){
            if(this.detectionHupHautGauche(hup)){
                let yh = this.y - hup.y;
                let xh = this.x - hup.x;
                if(yh>=xh && this.collisionDecorEnnemisH()){
                    this.y -= this.vitesse;
                }
                else if(this.collisionDecorEnnemisG()){
                    this.x -= this.vitesse;
                }
                else{
                    this.deplacement();
                    }
                }
            if(this.detectionHupHautDroite(hup)){
                let yh = this.y - hup.y;
                let xh = hup.x - this.x;
                if(yh>=xh && this.collisionDecorEnnemisH()){
                    this.y -= this.vitesse;
                }
                else if(this.collisionDecorEnnemisD()){
                    this.x += this.vitesse;
                }
                else{
                    this.deplacement();
                }
            }
            if(this.detectionHupBasGauche(hup)){
                let yh = hup.y - this.y;
                let xh = this.x - hup.x;
                if(yh>=xh && this.collisionDecorEnnemisB()){
                    this.y += this.vitesse;
                }
                else if(this.collisionDecorEnnemisG()){
                    this.x -= this.vitesse;
                }
                else{
                    if(!(this.collisionDecorEnnemisB() && (this.collisionDecorEnnemisG()) )){
                        this.x -= this.vitesse;
                        }
                }
            }
            if(this.detectionHupBasDroite(hup)){
                let yh = hup.y - this.y;
                let xh = hup.x - this.x;
                if(yh>=xh && this.collisionDecorEnnemisB()){
                    this.y += this.vitesse;
                }
                else if(this.collisionDecorEnnemisD()){
                    this.x += this.vitesse;
                }
                else{
                    if(!(this.collisionDecorEnnemisB()) && (this.collisionDecorEnnemisD())){
                    console.log("Test");
                    this.x += this.vitesse;
                    }
                    this.x+= 1;
                }
            }
        }
    
    else{
        this.deplacement();
    }
}
}