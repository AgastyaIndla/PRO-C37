var database;

var drawing = [];
var currentPath = [];
var form;
var isDrawing=false;

function setup(){
  canvas = createCanvas(1000,600);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);

  var form = new Form();
}

function startPath() {
  isDrawing=true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath(){
  isDrawing=false;
}


function draw() {
  background(0,100);
  
  if(mouseIsPressed) {
    var point = {
     x: mouseX,
     y: mouseY 
    }

    currentPath.push(point);
  }

  stroke(255);
  strokeWeight(4);
  noFill();

  for (var i = 0; i < drawing.length; i++ ) {
    var path = drawing[i];
    beginShape();
    for (var j = 0; j < path.length; j++) {
    vertex(path[j].x, path[j].y );
  }
   endShape();
  }

}
