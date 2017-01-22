var queue, stage;

function startGame() {
   //preload
   queue = new createjs.LoadQueue();
   queue.addEventListener('complete', completeHandler);
   queue.loadManifest([
     {id:"Cat", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Cat.png"},
     {id:"Planet1", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet1.png"},
     {id:"Planet2", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet2.png"},
     {id:"Planet3", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet3.png"}
     ]);
  }

function completeHandler() {
    //setup creatjs
    stage = new createjs.Stage("demoCanvas");
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick);
    


 //add bitmaps
    var bp2 = new createjs.Bitmap(queue.getResult('Planet1'));
    bp2.x = 450;
    bp2.y = 350; 
    bp2.scaleX = 0.5;
    bp2.scaleY = 0.5;
    stage.addChild(bp2);  

    var bp3 = new createjs.Bitmap(queue.getResult('Planet2'));
    bp3.x = 1300;
    bp3.y = 250; 
    bp3.scaleX = 0.5;
    bp3.scaleY = 0.5;
    stage.addChild(bp3);  

    var bp4 = new createjs.Bitmap(queue.getResult('Planet3'));
    bp4.x = 300;
    bp4.y = 50;
    bp4.scaleX = 0.5;
    bp4.scaleY = 0.5; 
     stage.addChild(bp4);  

    var bp1 = new createjs.Bitmap(queue.getResult('Cat'));
    bp1.x = 500;
    bp1.y = 300; 
    bp1.scaleX = 0.5;
    bp1.scaleY = 0.5;
    stage.addChild(bp1);  


function tick(e) {   

    bp4.regX = bp4.regY = 340;
    bp4.x = bp4.y = 300;
    bp4.rotation++;

    stage.update();
    }
}



  /*function handleImageLoad(event) {
    var image = event.target;
    var bitmap = new createjs.Bitmap(image);
    stage.addChild(bitmap);
    bitmap.x = 500;
    bitmap.y = 100;
    bitmap.scaleX = 0.5;
    bitmap.scaleY = 0.5;*/
    


   
  



