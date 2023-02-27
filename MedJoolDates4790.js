MedjoolDates_image4 = ""; //Used for The MedJool Dates in This JS File.


Status1 = "";

objects  = [];

results = [];



function preload(){


MedjoolDates_image4 = loadImage("IMG_4790.jpg");
}

function setup(){
    canvas = createCanvas(640, 350);
 
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', moddelloaded);  //Object Detector is a object detecting variable. Pretty self explanatory huh lol.//

    document.getElementById("status").innerHTML= "HI I'm status! I'ma detect your objects:"

}

function moddelloaded(){
    console.log("The Model is Loaded!!!");

   Status1 = true;

  objectDetector.detect(MedjoolDates_image4, gotResults);

}

function gotResults(error, results){
 if(error){

    console.error(error);
 }

   console.log(results);

   objects = results;
}

function draw(){
    image(MedjoolDates_image4, 0, 0, 640, 350)
    if( Status1 =! ""){
 
       for(i = 0; i < objects.length; i++){
 
                 document.getElementById("status").innerHTML = "Status: Object Detected";
 
                 fill("#FF0000");
 
                 percent = floor(objects[i].confidence*100);
 
                 text(objects[i].label + " " + percent + "%", objects[i].x - 800 , objects[i].y - 520);
 
                 noFill(); 
 
                 stroke("#FF0000");
 
                 rect(objects[i].x - 800 , objects[i].y - 520, objects[i].width - 910 , objects[i].height - 2,640);
 
                 
               }      
    }
 
 
 }