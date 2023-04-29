//https://content.fortune.com/wp-content/uploads/2019/07/BRB08.19.smart-tv.jpg
function setup(){
    canvas = createCanvas(700,500)
    canvas.center()
}
function preload(){
    img = loadImage("https://i.rtings.com/assets/pages/PtBw4Lf8/best-tv-medium.jpg")
}
function draw(){
    image(img,0,0,700,500)
    fill("#FF0000")
    text("TV", 250 , 240)
    noFill()
    stroke("#FF0000") 
    rect(180,150,350,250)
    text("Other TV", 560 , 230)
    stroke("#FF0000") 
    rect(550,200,200,250)
}