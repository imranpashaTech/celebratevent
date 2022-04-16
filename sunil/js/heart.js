const heart = [];
let colors = ['#fadde1', '#ffc4d6', '#ffa6c1', '#ff87ab', '#ff5d8f'];

let a = 0;

// let inconsolata;

// function preload() {
//   // inconsolata = loadFont('http://fonts.googleapis.com/css?family=Berkshire+Swash');
// }

function setup() {
  // createCanvas(windowWidth-30, windowHeight/2);
  let myCanvas = createCanvas(windowWidth-30, windowHeight*0.65);
    myCanvas.parent("canvasHeart");
//   background(30);
  // textFont("Yesteryear");
  textFont("Cedarville Cursive");
  // textSize(width / 40);
  textSize((windowHeight/windowWidth)*18);
  fill(255, 165, 0);
  textAlign(CENTER, CENTER);
}

function draw() {
    clear();
    text('Sunil\n  weds\n Xxyyz', width/2, height/2);

  background(224,224,224,0.20);
  translate(width/2, height/2);

  let r = 6;
  let x = r * 16 * pow(sin(a), 3);
  let y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
  
  heart.push(new Particle(x,y));
  
  stroke(255);
  for(i=0; i< heart.length; i++){
    heart[i].update();
    heart[i].show();
    
    if(heart[i].size < 1){
      heart.splice(i,1);
    }
  }

  if (a > TWO_PI) {
    a = 0;
  }

  a += 0.1;
}

class Particle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D().setMag(0.1);
    this.acc = p5.Vector.random2D().setMag(0.3);
    
    this.size = 10;
    this.color = colors[Math.floor(random(colors.length))];
  }
  
  show(){
    noStroke();
    push();
    translate(this.pos.x, this.pos.y);
    fill(this.color);
    
	drawingContext.shadowColor = color(this.color);
	drawingContext.shadowBlur = 30;
    
    ellipse(0,0,this.size);
    pop();
  }
  
  update(){
    this.size = 0.98 * this.size;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(1);
  }
}

/* ** reference
https://codepen.io/chendf/pen/MWarQYz

**/