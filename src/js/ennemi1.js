class ennemi1 extends Personnage{
    couleur = 'red';
    a = this.x;
    b = this.y;

    deplacement1(){
        a = a + 104; 
        b = b + 110;
        console.log(b);
        console.log(a);
            if(this.x<= a + 320){
                console.log(a);
                this.x = this.x + this.vd/16;
            }
            else if(this.y <= b + 320){
                this.y = this.y + this.vb/16;
            }
            else if(d1){
                d2 = true;
                d1=false;
            }
    }
    deplacement2(){
        a = a + 104; 
        b = b + 110;
        if(this.x >= a){
            this.x = this.x - this.vd/16;
        }
        else if(this.y >= b){
            this.y = this.y - this.vb/16;
        }
        else if(d2){
            d1 = true;
            d2 = false;
        }
}
    
    
}