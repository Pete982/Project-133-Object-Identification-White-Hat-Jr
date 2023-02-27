Bananas_Image3 = ""; //Used for The Bananas in This JS File.


Status1 = "";

objects  = [];

results = [];



function preload(){


Bananas_Image3 = loadImage("IMG_4796.jpg");


}

function setup(){
    canvas = createCanvas(640, 350);
 
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', moddelloaded);  //Object Detector is a object detecting variable. Pretty self explanatory huh lol.//

    document.getElementById("Status1").innerHTML= "HI I'm status! I'ma detect your objects:"

}

function moddelloaded(){
    console.log("The Model is Loaded!!!");

   Status1 = true;

  objectDetector.detect(Bananas_Image3 , gotResults);

}

function gotResults(error, results){
 if(error){

    console.error(error);
 }

   console.log(results);

   objects = results;
}

function draw(){
    image( Bananas_Image3 , 0, 0, 640, 350)
    if( Status1 =! ""){
 
       for(i = 0; i < objects.length; i++){
 
                 document.getElementById("Status1").innerHTML = "Status: Object Detected";
 
                 fill("#FF0000");
 
                 percent = floor(objects[i].confidence*100);
 
                 text(objects[i].label + " " + percent + "%", objects[i].x - 14 , objects[i].y - 175);
 
                 noFill(); 
 
                 stroke("#FF0000");
 
                 rect(objects[i].x - 14 , objects[i].y - 175, objects[i].width - 2,326 , objects[i].height - 2,850);
 
                 
               }      
    }
 
 
 }