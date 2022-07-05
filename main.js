Nose_x = 0;
Nose_y = 0;

function preload(){
    mustache= loadImage('https://i.postimg.cc/7P9jWmKj/mustache-removebg-preview-1.png');

}

function setup(){
    canvas = createCanvas(400,300);
    canvas.position(480,250);
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){
  image(video,0,0,400,300);
  image(mustache,Nose_x,Nose_y,80,40);
}

function takeSnapshot(){
    save("image.png");
}

function  modelLoaded(){
    console.log("poseNet has been initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x" + results[0].pose.nose.x);
        console.log("nose y  "+ results[0].pose.nose.y);
        Nose_x = results[0].pose.nose.x-34;
        Nose_y = results[0].pose.nose.y;
    }
    
}