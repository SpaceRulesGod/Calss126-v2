var silhouette = "";
var colors = "";

function preload(){
    silhouette = loadSound("KANA-BOON - Silhouette.mp3");
    colors = loadSound("Flow - COLORS.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}
