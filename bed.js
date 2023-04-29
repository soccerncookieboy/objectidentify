function setup(){
    canvas = createCanvas(700,500)
    canvas.center()
}
function preload(){
    img = loadImage("bed.jpg")
}
function draw(){
    image(img,0,0,700,500)
    fill("#FF0000")
    text("Bed", 10 , 170)
    noFill()
    stroke("#FF0000") 
    rect( 1,150,250,349)
    text("Bedside Table ", 300 , 240)
    stroke("#FF0000") 
    rect(230,200,150,250)
}