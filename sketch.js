//variavel raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//veriável de chance de erro
let chanceErro = 0.05;

//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;
let bolinhaTrava

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
    createCanvas(600, 400);
  describe('Controles_jogador_1: Apertar W para mover raquete para cima. apertar S para mover raquete para baixo.');
  describe('Multiplayer: remover (//) de (SegundoJogador) localizado em function draw.' )
  describe('Jogador_2: Apertar ↑ para mover raquete para cima. apertar ↓ para mover raquete para baixo')
}

let colidiu = false;

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentoMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  //segundoJogador();
  incluirPlacar();
  marcarPonto();
  verificaColisaoRaquete2();
   movimentaRaqueteOponente()
}

 function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
      raquetada.play();
    }
}

function movimentoMinhaRaquete() {
  if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if (keyIsDown(83)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete2() {
  
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}
function verificaColisaoRaquete(x, y) {
  
colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1
  }
}

function movimentaRaqueteOponente() {
  
  velocidadeYOponente = velocidadeYBolinha;
  
   if (xBolinha > width / 2 && velocidadeXBolinha > 0) {
     
 if (random() < chanceErro) {
   
   velocidadeYOponente *= -1;
 }
}
   yRaqueteOponente += velocidadeYOponente;
}
  

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
  
}

function marcarPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 5) {
    pontosDoOponente += 1;
   ponto.play();
  }
  }
function bolinhaTravando() {
if (xBolinha < 5) {
  pg.reset()
}
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function segundoJogador(){
    if (keyIsDown(38)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(40)){
        yRaqueteOponente += 10;
    }
}
