import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, Physics, Timer} from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";



export class Sword extends Actor {
    attack
    speed
    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 80,
            height: 70,
            collisionType: CollisionType.Passive,
            });
        
        
    }

    onInitialize(engine) {
        this.game = engine;
        this.attack = 10;
        this.speed = 10;
        this.graphics.use(Resources.Sword.toSprite());
        this.on('collisionstart', (event) => this.collisionCheck(event));
        this.on("exitviewport", (event) => {
            this.pos = new Vector(0, 0);
            this.vel = new Vector(0,0);
          })
          
    }

    weaponAttack(engine, vel) {
        
        this.vel.x = vel;
        
        const timer = new Timer({      
            fcn: () => this.returnWeapon(engine),      
            repeats: false,      
            interval: 100,  })
          engine.currentScene.add(timer)  
          timer.start()
    }

    returnWeapon (engine) {
        this.pos = new Vector(0,0)
        this.vel.x = 0
        /*this.vel.x = -500;
        const timer2 = new Timer({      
            fcn: () => this.weaponNeutral(engine),      
            repeats: false,      
            interval: 100,  })
          engine.currentScene.add(timer2)  
          timer2.start()*/
    }

    weaponNeutral(engine) {
        this.vel.x = 0;
        this.pos = new Vector(0, 0);
    }

    collisionCheck(event) {
        console.log("hallo")
        if(event.other instanceof Enemy) {
            console.log(event.other.defense)
            event.other.hp -= this.attack/event.other.defense;
        }
    }
}