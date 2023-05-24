import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, Physics, Entity,} from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";


export class Sword extends Actor {
    attack
    speed
    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 100,
            height: 70,
            collisionType: CollisionType.Passive,
            });
        
        
    }

    onInitialize(engine) {
        this.attack = 10;
        this.speed = 10;
        this.graphics.use(Resources.Sword.toSprite());
        this.on('collisionstart', (event) => this.collisionCheck(event));
    }

    weaponAttack() {
        this.pos = new Vector(0,0)
        this.vel.x = 200
        this.setTimeout(() => {
            
        }, timeout);
        this.pos = new Vector(0, 0)
    }

    collisionCheck(event) {
        console.log("hallo")
        if(event.other instanceof Entity) {
            console.log(event.other.defense)
            event.other.hp -= this.attack/event.other.defense;
        }
    }
}