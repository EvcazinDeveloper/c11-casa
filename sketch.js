var corredor;
var corredor_imagem;

var estrada;
var estrada_image;

var limit_scale_right;
var limit_scale_left;

function preload(){
  //imagens pré-carregadas
  corredor_imagem = loadAnimation("Runner-1.png", "Runner-2.png");
  estrada_image = loadImage("path.png");
}

function setup() {
  createCanvas(400,400);

  //crie sprite aqui
  estrada = createSprite(200, 200);
  estrada.addImage(estrada_image);
  estrada.velocityY = 5;

  limit_scale_right = createSprite(410, 0, 100, 800);
  limit_scale_right.visible = false;

  limit_scale_left = createSprite(0, 0, 100, 800);
  limit_scale_left.visible = false;

  corredor = createSprite(180, 340, 30, 30);
  corredor.scale = 0.05;
  corredor.addAnimation("running", corredor_imagem);
}

function draw() {
  background(0);

  drawSprites();

  if (estrada.y > 400) {
    estrada.y = height / 2;
  }
  corredor.x = World.mouseX;

  corredor.collide(limit_scale_left);
  corredor.collide(limit_scale_right);
}
