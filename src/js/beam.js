import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, Physics, Timer} from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";

export class Beam extends Actor {

constructor() {
    super({ 
        width: Resources.Beam.width,
        height: Resources.Beam.height,
        collisionType: CollisionType.Passive,
    })

    this.attack = 10;
    
}
onInitialize(engine){
    this.graphics.use(Resources.Beam.toSprite())
    this.on('collisionstart', (event) => this.collisionCheck(event));
    this.vel = new Vector(500, 0);
    this.actions.blink(100, 200, 1000)
}
collisionCheck(event) {
    console.log("hallo")
    if(event.other instanceof Enemy) {
        console.log(event.other.defense)
        this.pos = new Vector(5000, 5000);
        event.other.hp -= this.attack/event.other.defense;
    }
}
}
