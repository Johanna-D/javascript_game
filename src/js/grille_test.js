window.onload = init;
var canvas;
let moved = true;
let moveg = true;
let moveb = true;
let moveh = true;
let d1 = true;
let d2 = false;
var ennemis = [];
var portes=[];
var newElement;


var taille = 32
var map = new Array(25);

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

function ajoute(element){
  newElement = element;
}

function tirBalle(ennemi){
  if((Math.random()*100)<=1){
    balle = new ballePoulpe(ennemi.x,ennemi.y,ennemi.angle);
    ennemi.tir = 1;
}
}
function anime() {
  ctx.clearRect(1,1, canvas.width, canvas.height);
  //console.log(hup.vie);
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
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof arbre){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof eau){
        map[a][b].draw();
      }
      if(map[a][b] instanceof herbe){
        map[a][b].draw();
      }
      if(map[a][b] instanceof fleur){
        map[a][b].draw();
      }
      if(map[a][b] instanceof neige){
        map[a][b].draw();
      }
      if(map[a][b] instanceof eauProfonde){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof solRoche){
        map[a][b].draw();
      }
    }
  }
  portes.forEach( porte =>{
    porte.drawObjet();
    porte.collisionPorteHup(hup);
  })
  clef1.drawObjet();
  clef1.collisionObjetHup(hup);
  coeur.drawObjet();
  coeur.collisionObjetHup(hup);
  ennemis.forEach( ennemi =>{
    ennemi.draw();
    ennemi.deplacement();
    if(ennemi.tir ==0){
      tirBalle(ennemi);
    }
    if(ennemi.tir ==1){
      balle.drawTir();
    }
    ennemi.mortEnnemi(ennemis);
  })
  hup.drawHup();
  if(hup.Epee ==1){
    hup.drawHupEpee(hup.EpeeChiffre);
  }
  deplacementHup(hup,ennemis);
  hup.collisionEnnemisHup(ennemis);
  hup.gameover();
  changeMap();
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
  window.requestAnimationFrame(anime);

}

function init() {

  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");

  loadMap(C1); // permet de charger la première map dès le début. En paramètre, prends la map que l'on veut charger
  hup = new hup((canvas.width/2)-32,(canvas.height/2)-32);
  ennemis.push(new poulpe(128,160));
  clef1 = new clef(12*32,32*15);
  coeur = new coeur(10*32,32*13);
  portes.push(new porte(10*32,0));
  portes.push(new porte(11*32,0));
  portes.push(new porte(12*32,0));
  portes.push(new porte(13*32,0));
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
    if(newElement == "solRoche"){
      map[x][y] = new solRoche(x*taille,y*taille);
    }
    if(newElement == "eauProfonde"){
      map[x][y] = new eauProfonde(x*taille,y*taille);
    }
    if(newElement == "neige"){
      map[x][y] = new neige(x*taille,y*taille);
    }
    if(newElement == "fleur"){
      map[x][y] = new fleur(x*taille,y*taille);
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
