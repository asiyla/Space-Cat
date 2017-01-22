var queue, stage;

function startGame() {
   //preload
   queue = new createjs.LoadQueue();
   queue.addEventListener('complete', completeHandler);
   queue.loadManifest([
     {id:"Cat", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Cat.png"},
     {id:"Planet1", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet1.png"},
     {id:"Planet2", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet2.png"},
     {id:"Planet3", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet3.png"},
     {id:"Planet4", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet4.png"},
     {id:"Planet5", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet5.png"},
     {id:"Planet6", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet6.png"},
     {id:"Planet7", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet7.png"},
     {id:"Planet8", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet8.png"},
     {id:"Planet9", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet9.png"},
     {id:"Planet10", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet10.png"},
     {id:"Planet11", src:"https://raw.githubusercontent.com/asiyla/Space-Cat/master/Planet11.png"}

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

    var bp5 = new createjs.Bitmap(queue.getResult('Planet4'));
    bp5.x = 340;
    bp5.y = 460;
    bp5.scaleX = 0.5;
    bp5.scaleY = 0.5; 
    stage.addChild(bp5);  

    var bp6 = new createjs.Bitmap(queue.getResult('Planet5'));
    bp6.x = 60;
    bp6.y = 230;
    bp6.scaleX = 0.5;
    bp6.scaleY = 0.5; 
    stage.addChild(bp6);  

    var bp7 = new createjs.Bitmap(queue.getResult('Planet6'));
    bp7.x = 90;
    bp7.y = 550;
    bp7.scaleX = 0.5;
    bp7.scaleY = 0.5; 
    stage.addChild(bp7);  

    var bp8 = new createjs.Bitmap(queue.getResult('Planet7'));
    bp8.x = 1300;
    bp8.y = 590;
    bp8.scaleX = 0.5;
    bp8.scaleY = 0.5; 
    stage.addChild(bp8);  

    var bp9 = new createjs.Bitmap(queue.getResult('Planet8'));
    bp9.x = 1028;
    bp9.y = 100;
    bp9.scaleX = 1;
    bp9.scaleY = 1; 
    stage.addChild(bp9);  

    var bp10 = new createjs.Bitmap(queue.getResult('Planet9'));
    bp10.x = 1020;
    bp10.y = 600;
    bp10.scaleX = 0.75;
    bp10.scaleY = 0.75; 
    stage.addChild(bp10);  

    var bp11 = new createjs.Bitmap(queue.getResult('Planet10'));
    bp11.x = 930;
    bp11.y = 390;
    bp11.scaleX = 0.5;
    bp11.scaleY = 0.5; 
    stage.addChild(bp11);  

    var bp12 = new createjs.Bitmap(queue.getResult('Planet11'));
    bp12.x = 210;
    bp12.y = 421;
    bp12.scaleX = 0.5;
    bp12.scaleY = 0.5; 
    stage.addChild(bp12);  

    var bp1 = new createjs.Bitmap(queue.getResult('Cat'));
    bp1.x = 500;
    bp1.y = 300; 
    bp1.scaleX = 0.5;
    bp1.scaleY = 0.5;
    stage.addChild(bp1);  



//Animate bitmaps

function tick(e) {   


    createjs.Tween.get(bp1, { loop: true })
    .to({ y: 320 }, 3000)
    .to({ x: 600, y: 100 }, 5000)
    .to({ x: 620, y: 130 }, 1000)
    .to({ x: 650, y: 100 }, 1000)
    .to({ x: 850, y: 200 }, 6000, createjs.Ease.getPowOut(8))
    .to({ x: 500, y: 300 }, 3000, createjs.Ease.getPowInOut(2));

    bp4.regX = bp4.regY = 63;
    bp4.rotation++;

    bp5.regX = bp5.regY = 57;
    bp5.rotation++;

    bp6.regX = bp6.regY = 53;
    bp6.rotation++;

    bp7.regX = bp7.regY = 41;
    bp7.rotation++;

    bp8.regX = bp8.regY = 30;
    bp8.rotation++;

    bp9.regX = bp9.regY = 28;
    bp9.rotation++;

    bp10.regX = bp10.regY = 46;
    bp10.rotation++;

    bp11.regX = bp11.regY = 150;
    bp11.rotation++;

    bp12.regX = bp12.regY = 34;
    bp12.rotation++;


   /* bp12.on("pressmove", function(evt) {
    evt.target.x = evt.stageX;
    evt.target.y = evt.stageY;
    });

    bp12.on("pressup", function(evt) { console.log("up"); })*/



    stage.update();
    }
}



    


   
  



