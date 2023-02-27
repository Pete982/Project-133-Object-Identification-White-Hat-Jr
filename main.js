image1 = "";

Status1 = "";

objects  = [];

results = [];

function preload(){
    loadImage("IMG_4790.jpg");

}

function setup(){
   canvas = createCanvas(300, 300);

   canvas.center();

   objectDetector = ml5.objectDetector('cocossd', moddelloaded);

   document.getElementById("status").innerHTML = "Hi! Time for me to detect your objects!";

}

function moddelloaded(){
     console.log("The Model is Loaded!!!");

    Status1 = true;

   objectDetector.detect(image1, gotResult);

}

function gotResult(error, results){
    if(error){

      console.error(error);
    }

    console.log(results);

    object = results;
}

function draw(){
   if( Status1 =! empty){

      for(i = 0; i < objects.length; i++){

                document.getElementById("status").innerHTML = "Status: Object Detected";

                fill("#FF0000");

                percent = floor(objects[i].confidence*100);

                text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y);

                noFill(); 

                stroke("#FF0000");

                rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);

                
              }      
   }


}