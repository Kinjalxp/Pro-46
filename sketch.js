const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload(){
    
}

function setup(){
    var canvas = createCanvas(1500,800);
    myEngine = Engine.create();
    myWorld = myEngine.world;

}
function draw()
{
    background(0);
    Engine.update(myEngine);

}