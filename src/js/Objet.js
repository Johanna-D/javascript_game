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
        else if (this.couleur == "#fc056c"){
            var image = new Image();
            image.src = 'js/classesDecor/flower1.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
           /* test pour du random mais clignote
           
           var randF = Math.round(Math.random()*4);
            if (randF==0){
                var image = new Image();
            image.src = 'js/classesDecor/flower1.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
            }
            else if (randF==1){
                var image = new Image();
            image.src = 'js/classesDecor/flower2.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
            }
            else if (randF==2){
                var image = new Image();
            image.src = 'js/classesDecor/flower3.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
            }
            else if (randF==3){
                var image = new Image();
            image.src = 'js/classesDecor/flower4.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
            }*/
            
            
            
            
        }
        else if (this.couleur == "#655b5b"){
            if (map[24]=="C1sword" || map[24]=="C3" || map[24]=="C4"|| map[24]=="D4"|| map[24]=="B4"|| map[24]=="B3"|| map[24]=="B2"|| map[24]=="A2"|| map[24]=="A2key" || map[24]=="F7"|| map[24]=="E8"|| map[24]=="E7"|| map[24]=="E6"|| map[24]=="D8"|| map[24]=="D7"|| map[24]=="D6"|| map[24]=="C6"|| map[24]=="C7"|| map[24]=="C8"|| map[24]=="C5"|| map[24]=="B5"|| map[24]=="A5"|| map[24]=="A6"|| map[24]=="A7"|| map[24]=="B7"|| map[24]=="B8"){
                ctx.fillStyle = "#adadad";
            }
            var image = new Image();
            image.src = 'js/classesDecor/stone.png';
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            ctx.drawImage(image, this.x, this.y,32,32);
            
            
        }
        else if(this.type =="coeur"){
            var image = new Image();
            image.src = 'js/objetsRamassables/heartdrop.png';
            ctx.drawImage(image, this.x, this.y);
        }
        else if(this.type =="clef"){
            var image = new Image();
            image.src = 'js/objetsRamassables/cle.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="solDonjon"){
            var image = new Image();
            image.src = 'js/classesDecor/solDonjon.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="murHaut"){
            var image = new Image();
            image.src = 'js/classesDecor/murHaut.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="murBas"){
            var image = new Image();
            image.src = 'js/classesDecor/murBas.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="murGauche"){
            var image = new Image();
            image.src = 'js/classesDecor/murGauche.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="murDroit"){
            var image = new Image();
            image.src = 'js/classesDecor/murDroit.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="trou"){
            var image = new Image();
            image.src = 'js/classesDecor/vide.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="stairs"){
            var image = new Image();
            image.src = 'js/classesDecor/stairs.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="bottes"){
            var image = new Image();
            image.src = 'js/objetsRamassables/bottes.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="cleBoss"){
            var image = new Image();
            image.src = 'js/objetsRamassables/cleboss.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="cristal"){
            var image = new Image();
            image.src = 'js/objetsRamassables/cristal.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.type =="porteFinBoss"){
            ctx.fillStyle = this.couleur;
            ctx.fillRect(this.x,this.y,this.taille,this.taille);
            
        }
        else if(this.type =="vide"){
            var image = new Image();
            image.src = 'js/classesDecor/vide.png';
            ctx.drawImage(image, this.x, this.y);
            
        }
        else if(this.couleur =="#610303"){
            if (this.type == "porte"){
                var image = new Image();
            image.src = 'js/classesDecor/porteentree.png';
            ctx.drawImage(image, this.x, this.y);
            }
            
            else {
                var image = new Image();
            image.src = 'js/classesDecor/portedonjon.png';
            ctx.drawImage(image, this.x, this.y);
            }
            
        }
        else if(this.type =="porteboss"){
            var image = new Image();
        image.src = 'js/classesDecor/porteboss.png';
        ctx.drawImage(image, this.x, this.y);
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
                //mortEnnemi = false;
                this.etat = false;
                
                
            }
            if(this.type == "clef"){
                
                hup.clefs += 1;
                
                this.etat = false;

            }
            if(this.type == "cleBoss"){
                
                hup.cleBoss += 1;
                
                this.etat = false;

            }
            if(this.type == "bottes"){
                
                hup.bottes = 1;
                
                this.etat = false;

            }
            if(this.type == "cristal"){
                   
                ctx.drawImage(finJeu, 0, 0,768,640);
                //this.etat = false;

            }
        }
    }
    drawObjet(){
        if (this.etat == true){
            this.draw();
        }
    }
}
