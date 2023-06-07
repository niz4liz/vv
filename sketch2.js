let extraCanvas;
let numb, rad;
let img;
let s = 'color picker';
let font;
fontsize = 40;

function preload() {
  img = loadImage("./assets/10door.jpg");
  img2 = loadImage("./assets/10floor.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  extraCanvas = createGraphics(100, 100);
  extraCanvas.clear();
  noStroke();
  colorPicker = createColorPicker("#FFA500");
  colorPicker.position(15,170);
  font = loadFont("./assets/OCRAEXT.TTF")

  noStroke();
  ambientMaterial(100);

  // Lights
  pointLight(255, 255, 255, 0, 0, 10);
  ambientLight(190, 200, 178);

  // Back wall
  push();
  texture(img);
  plane(400, 200);
  pop();
  
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

}

function changebg(){
  
}

function draw() {
  
  let planeWidth = windowWidth * (2/3);

  
  // Left wall
  push();
  translate(-200, 0, 200);
  fill("black");
  rotateY((90 * PI) / 180);
  plane(400, 200);
  pop();

  // Right wall
  push();
  fill("black");
  translate(200, 0, 200);
  rotateY((90 * PI) / 180);
  plane(400, 200);
  pop();

  // Top wall
  push();
  fill("black");
  translate(0, -100, 200);
  rotateX((90 * PI) / 180);
  plane(400, 400);
  pop();

  ambientLight(190, 200, 170);

  // Bottom wall
  push();
  texture(img2);
  translate(0, 100, 200);
  rotateX((90 * PI) / 180);
  plane(400, 400);
  pop();

  
  col = colorPicker.color();
  if (mouseIsPressed == true) {
    fill(col.levels[0] + random(-25, 25), col.levels[1] + random(-25, 25), col.levels[2] + random(-25, 25),6);
    for (i = 0; i < 3; i++) {
      push();
      translate(mouseX - width/2, mouseY - height/2);
      rotate(random(PI * 2));
      beginShape();
      for (m = 0; m < PI * 2; m += 1) {
        r = random(2, 10);
        let x = cos(m) * r;
        let y = sin(m) * r;
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
    }
  }
}
