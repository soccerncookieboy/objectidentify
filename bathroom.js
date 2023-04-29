
function setup(){
    canvas = createCanvas(700,500)
    canvas.center()
}
function preload(){
    img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGs3NuEnEk68WR6TUCgmpDnGGC-EILZtxsZG8toYPRnh-5OSn-05ga0_CJ_Jg1F4C6eY&usqp=CAU")
}
function draw(){
    image(img,0,0,700,500)
    fill("#FF0000")
    text("Shower", 2 , 10)
    noFill()
    stroke("#FF0000") 
    rect( 1,1,300,499)
    text("sink", 335 , 240)
    stroke("#FF0000") 
    rect(330,220,300,250)
}