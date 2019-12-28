

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


function tirBalle(ennemi){
  if(ennemi.tir < ennemi.tirmax){
    if((Math.random()*100)<=6){
     ennemi.tir = ennemi.tir + 1;
      ennemi.balles.push(new ballePoulpe(ennemi.x,ennemi.y,ennemi.angle));
    }
  }
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
      if(map[a][b] instanceof bois){
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
      if(map[a][b] instanceof gameover){
        map[a][b].draw();
      }
    }
  }
  if(map[24]=="B8"){
    portes.forEach( porte =>{
      porte.drawObjet();
      porte.collisionPorteHup(hup);
    })
  }
  /**/
  if(map[24]=="A2key"){
    clef1.drawObjet();
  clef1.collisionObjetHup(hup);
  }
  if(map[24]=="N7"){
    clef2.drawObjet();
  clef2.collisionObjetHup(hup);
  }
  if(map[24]=="M1"){
    clef3.drawObjet();
  clef3.collisionObjetHup(hup);
  }
  

  cleAffiche = new Image();
cleAffiche.src='js/objetsRamassables/cle.png';
  if(hup.clefs ==1){
    ctx.drawImage(cleAffiche, 700,590);
  }
  if(hup.clefs ==2){
    ctx.drawImage(cleAffiche, 700,590);
    ctx.drawImage(cleAffiche, 680,590);
  }
  if(hup.clefs ==3){
    ctx.drawImage(cleAffiche, 700,590);
    ctx.drawImage(cleAffiche, 680,590);
    ctx.drawImage(cleAffiche, 660,590);
  }
  if(mortEnnemi == true){
    coeur.drawObjet();
    coeur.collisionObjetHup(hup);
  }
  
    for(i = 0;i< ennemis.length;i++){
    if(ennemis[i] instanceof pouf){
      ennemis[i].deplacementPouf(hup);
    }
    ennemis[i].draw();
    if(ennemis[i] instanceof poulpeR || ennemis[i] instanceof poulpeB){
      ennemis[i].deplacement();
      tirBalle(ennemis[i]);
      if(ennemis[i].balles != null){
        for(j = 0;j< ennemis[i].balles.length;j++){
        ennemis[i].balles[j].drawTir();
        ennemis[i].balles[j].moveTir(ennemis[i],hup,ennemis[i].balles);
        }
      }
    }
    ennemis[i].mortEnnemi(ennemis);
  }
  hup.drawHup();
  if(hup.Epee ==1){
    hup.drawHupEpee(hup.EpeeChiffre);
  }
  hup.vieHup();
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
      hup.vd =16;
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

  loadMap(C1); // permet de charger la première map dès le début. En paramètre, prends la map que l'on veut charger
  hup = new hup(14*32,14*32);
  ennemis.push(new pouf(8*32,8*32));
  clef1 = new clef(12*32,9*32);
  clef2 = new clef(14*32,8*32);
  clef3 = new clef(12*32,13*32);
  //coeur = new coeur(10*32,32*13);
  
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
    if(newElement == "bois"){
      map[x][y] = new bois(x*taille,y*taille);
    }
    if(newElement == "gameover"){
      map[x][y] = new gameover(x*taille,y*taille);
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
