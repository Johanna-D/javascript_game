window.onload = init;
var canvas;
let moved = true;
let moveg = true;
let moveb = true;
let moveh = true;
const roches =[];
var map = new Array(20);
for (var i = 0; i < 20; i++)
{
 map[i] = new Array(20);
}
var newElement;
class quadrillageMap{
  constructor(){
    this.x = 1;
    this.y = 1;
    this.taille = 16;
    this.ligne = canvas.height/this.taille;
    this.colonne = canvas.width/this.taille;
  }
  drawrect(multl,multc){
    ctx.strokeRect(this.x * multl,this.y * multc,this.taille,this.taille);
  }
  drawrectClic(x,y, couleur){
    ctx.save();
    ctx.fillStyle = couleur;
    ctx.fillRect(this.x * x,this.y * y,this.taille,this.taille);
    ctx.restore();
  }
}

function processMouseMouve(evt) {
  let rect = evt.target.getBoundingClientRect()
  let mouseX = evt.clientX - rect.left;
  let mouseY = evt.clientY - rect.top;

  mousePos = {
    x: mouseX,
    y: mouseY
  }
 }



 function collision(map,hup) {
       if ( hup.x==map.x+map.taille && (hup.y >=  map.y-8 && hup.y<= map.y+8))
         moveg = false;

       if ( hup.x==map.x-map.taille && (hup.y >=  map.y-8 && hup.y<= map.y+8))
           moved = false;

       if( hup.y==map.y-map.taille && (hup.x >=  map.x-8 && hup.x<= map.x+8))
           moveb = false;
       if( hup.y==map.y+map.taille && (hup.x >=  map.x-8 && hup.x<= map.x+8))
           moveh = false;

}

function drawMap(grille){
  for(let i =0;i< grille.ligne ;i++){
    let multl = grille.taille * i;
    for(let j = 0;j<grille.colonne;j++){
      let multc = grille.taille * j;
      map[i][j]= grille.drawrect(multl,multc);
    }
  }
}

function changeCouleur(c) {
  couleurCourante = c;
  console.log(c);
}

function ajouteRoche(){
  newElement = "roche";
}

function anime() {

  // 1) On efface l'Ã©cran
  ctx.clearRect(grille.x,grille.y, canvas.width, canvas.height);
  //drawMap(grille);
  // 2) On dessine et on déplace le char 1
  hup.draw();

  moveg = true;
    moved = true;
    moveh = true;
    moveb = true;
    deplacementHup(hup);
  for(a =0; a<20;a++){
    for(b = 0;b<20;b++){
      if(map[a][b] instanceof roche){
        drawRoche(map[a][b]);
        collision(map[a][b],hup);
      }
    }

  }
    if(moveg == true)
        hup.vg =8;
    else
        hup.vg =0;
    if(moved == true)
        hup.vd =8;
    else
        hup.vd =0;
    if(moveb == true)
        hup.vb =8;
    else
        hup.vb =0;
    if(moveh == true)
        hup.vh =8;
    else
        hup.vh =0;
  // On demande une nouvelle frame d'animation
  window.requestAnimationFrame(anime);

}

function init() {

  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  grille = new quadrillageMap;
  hup = new personnage;
  canvas.onmousedown = (event) => {
    processMouseMouve(event);
    let x = Math.floor(mousePos.x/grille.taille);
    let y = Math.floor(mousePos.y/grille.taille);
    if(newElement == "roche"){
      map[x][y] = new roche(x*grille.taille,y*grille.taille);
      console.log("map x=" + x + " y = " + y + " c = " + map[x][y]);
    }
  }
   anime();
   }

/* -----------------INFOS POUR PLUS TARD -------------------------------------
   const assestsToLoadURLs{ // pour charger les éléments AVANT que le jeu ne démarre
       backgroundImage: { url :'lien'},
       plop : { url:'son', buffer :false On veut que ce soit chargé en mémoire. true, c'est qu'on veut en streeming, loop : false, volume: 1.0 volume du son}
   }

   -------------------------------------------------------------------------*/
