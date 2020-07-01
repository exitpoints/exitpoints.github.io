function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw() {

  
  //fill(255, 120, 0, 10);
  //shearY(random(PI) / 4.0);
  //strokeWeight(0.2);
  //triangle(0, 0, 400, 100, 0, 600);
  textSize(130);
  text('14 JULY', windowWidth/2.5, windowHeight/2);
  
  let s = 'online audiovisual live performance';
  //noFill();
  textSize(15);
  text(s, 150, 120, 200, 500);
  
  textSize(20);
  fill(150);
  text('SOUND', 150, 200);
  
  textSize(20);
  fill(255);
  text('EMORY', 150, 230);
  
  textSize(20);
  text('JAIME THOMPSON', 150, 250);
  
  textSize(20);
  text('MICHAEL PALUMBO', 150, 270);
  
  textSize(20);
  fill(150);
  text('CARTOMANCY', 150, 320);
  
  textSize(20);
  fill(255);
  text('NEON DREAMER', 150, 350);
  
  textSize(20);
  fill(150);
  text('IMAGE', 150, 400);
  
  textSize(20);
  fill(255);
  text('KAVI', 150, 430);
  
  textSize(30);
  fill(0, 20);
  text('NO EXIT', 23,windowHeight/2);
  
  strokeWeight(0.9);
  fill(255, 10);
  shearY(random(PI) / 0.9);
  circle(0, height / 2, random(300));

  
  textSize(30);
  fill(250, 20);
  text('NO EXIT', 23,300);
  

}