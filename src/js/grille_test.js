window.onload = init;
var canvas;
let moved = true;
let moveg = true;
let moveb = true;
let moveh = true;
var newElement;
var taille = 32
var map = new Array(24);
for (var i = 0; i < 24; i++)
{
  map[i] = new Array(18);
  for(var j = 0; j < 18; j++)
 {
   map[i][j] = new sol(i*taille,j*taille);
  }
}

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

function ajoute(element){
  newElement = element;
}

function anime() {

  // 1) On efface l'Ã©cran
  ctx.clearRect(1,1, canvas.width, canvas.height);
  //drawMap(grille);
  // 2) On dessine et on déplace le char 1
  moveg = true;
  moved = true;
  moveh = true;
  moveb = true;
  for(a =0; a<24;a++){
    for(b = 0;b<18;b++){
      if(map[a][b] instanceof sol){
        map[a][b].draw();
      }
      if(map[a][b] instanceof roche){
        map[a][b].draw();
        hup.collision(map[a][b]);
      }
      if(map[a][b] instanceof arbre){
        map[a][b].draw();
      }
      if(map[a][b] instanceof eau){
        map[a][b].draw();
      }
      if(map[a][b] instanceof herbe){
        map[a][b].draw();
      }
    }
  }
  hup.draw();
  deplacementHup(hup);
    if(moveg == true)
        hup.vg =32;
    else
        hup.vg =0;
    if(moved == true)
        hup.vd =32;
    else
        hup.vd =0;
    if(moveb == true)
        hup.vb =32;
    else
        hup.vb =0;
    if(moveh == true)
        hup.vh =32;
    else
        hup.vh =0;
  // On demande une nouvelle frame d'animation
  window.requestAnimationFrame(anime);

}

function init() {

  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  //grille = new quadrillageMap;
  hup = new personnage;
  canvas.onmousedown = (event) => {
    processMouseMouve(event);
    let x = Math.floor(mousePos.x/taille);
    let y = Math.floor(mousePos.y/taille);
    if(newElement == "roche"){
      map[x][y] = new roche(x*taille,y*taille);
    }
    if(newElement == "arbre"){
      map[x][y] = new arbre(x*taille,y*taille);
    }
    if(newElement == "eau"){
      map[x][y] = new eau(x*taille,y*taille);
    }
    if(newElement == "herbe"){
      map[x][y] = new herbe(x*taille,y*taille);
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
