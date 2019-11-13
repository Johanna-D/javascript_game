window.onload = init;
var canvas;
var map = new Array(40);
for (var i = 0; i < 40; i++)
{
 map[i] = new Array(40);
}

var couleurCourante="black";

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

function anime() {
  
  // 1) On efface l'Ã©cran
  ctx.clearRect(grille.x,grille.y, canvas.width, canvas.height);

  drawMap(grille);
  // 2) On dessine et on déplace le char 1
  drawPerso(hup);
  deplacementPerso(hup);
  //if(inputStates.SPACE) {
    //char1.addBullet(Date.now()); 
  //}

  // On demande une nouvelle frame d'animation
  window.requestAnimationFrame(anime);

}

function init() {
  
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  grille = new quadrillageMap;
  hup = new personnage;
  drawMap(grille);
   //drawPerso(hup);
   //hup.deplacementPerso();
   
  canvas.onmousedown = (event) => {
    processMouseMouve(event);
    let x = Math.floor(mousePos.x/grille.taille); 
    let y = Math.floor(mousePos.y/grille.taille); 
    map[y][x] = couleurCourante;
    console.log("map x=" + x + " y = " + y + " c = " + couleurCourante);
    grille.drawrectClic(x*grille.taille,y*grille.taille, couleurCourante)
  }
   anime(); 
   }

/* -----------------INFOS POUR PLUS TARD -------------------------------------
   const assestsToLoadURLs{ // pour charger les éléments AVANT que le jeu ne démarre
       backgroundImage: { url :'lien'},
       plop : { url:'son', buffer :false On veut que ce soit chargé en mémoire. true, c'est qu'on veut en streeming, loop : false, volume: 1.0 volume du son}
   }

   -------------------------------------------------------------------------*/