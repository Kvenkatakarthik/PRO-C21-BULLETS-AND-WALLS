var bullet,wall;

var speed,weight ,thickness





function setup() {

 createCanvas(1500,800);

 wall=createSprite(1000, 200, thickness, weight/2);

bullet =createSprite(100, 200, 30, 10);

bullet.shapeColor="white"
wall.shapeColor="brown"
speed=random(50,100)

weight=random(30,52)

bullet.velocityX=speed

thickness=random(22,83)

}



function draw() {

background("black"); 

    if(hascollided(bullet,wall)){
    bullet.velocityx=speed
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness)
    }

if (damage>10){

 wall.shapeColor=color(255,0,0)

}



if (damage<10){

 wall.shapeColor=color(0,0,255)

}


drawSprites();

}



function hascollided(bullet1,wall1){

bulletRightEdge=bullet1.x +bullet1.width;

wallLeftEdge=wall1.x
if (bulletRightEdge>=wallLeftEdge){

  return true
 
  }
 
 
 return false
 


}
