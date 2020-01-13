

var canvas;
let moved = true;
let moveg = true;
let moveb = true;
let moveh = true;
var ennemis = [];
var portes=[];
var porteD=[];
var porteD2=[];
var porteD3=[];
var porteD4=[];
var porteD5=[];
var porteD6=[];
var porteMiniB=[];
var porteCristal=[];
var newElement;
var clicMenu = false;
var mortEnnemi = false;
var coeurDrop;
var ennemiX;
var ennemiY;



var taille = 32
var map = new Array(26);




/* ------------ IMAGES -----------------*/
Gover = new Image();
Gover.src = 'js/gameoverScreen.png';

menuImage = new Image();
menuImage.src = 'js/menuScreen.png';

commandes = new Image();
commandes.src = 'js/commandes.png';

var finJeu = new Image();
finJeu.src = 'js/congrats.png';

