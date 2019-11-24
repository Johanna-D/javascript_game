window.onload = init;
var canvas;
let moved = true;
let moveg = true;
let moveb = true;
let moveh = true;
let d1 = true;
let d2 = false;
var ennemis = [];
var newElement;

/* pour la sauvegarde des maps, à ne pas toucher !! */
let maps = [];
var map1;
var solMap = new sol();
var eauMap = new eau();
var herbeMap = new herbe();
var arbreMap = new arbre();
var rocheMap = new roche();
/* fin variables pour sauvegarde des maps */

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

function ajoute(element){
  newElement = element;
}


function anime() {
  ctx.clearRect(1,1, canvas.width, canvas.height);
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
        hup.collisiondecor(map[a][b]);
      }
      if(map[a][b] instanceof arbre){
        map[a][b].draw();
        hup.collisiondecor(map[a][b]);
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
  ennemis[0].draw();
  ennemis[0].deplacement1();
  deplacementHup(hup);
    if(moveg == true){
        hup.vg =32;
    }
    else{
        hup.vg =0;
    }
    if(moved == true){
        hup.vd =32;
    }
    else{
        hup.vd =0;
    }
    if(moveb == true){
        hup.vb =32;
    }
    else{
        hup.vb =0;
    }
    if(moveh == true){
        hup.vh =32;
    }
    else{
        hup.vh =0;
    }
  // On demande une nouvelle frame d'animation
  window.requestAnimationFrame(anime);

}

function init() {
  
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  loadMap();
  hup = new hup((canvas.width/2)-32,(canvas.height/2)-32);
  ennemis.push(new ennemi1(128,128));
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
    if(newElement == "sol"){
      map[x][y] = new sol(x*taille,y*taille);
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
