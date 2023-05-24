import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent,} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";

export class Enemy extends Entity {
    hp
    defense
    constructor(x,y) {
        super({
            x: x,
            y: y,
            width: 100,
            heigth: 130,
            CollisionType: CollisionType.PreventCollision,
        })
        this.hp = 10
        this.defense = 6;
    }
    onInitialize() {
        this.pos = new Vector(500, 300);
        this.graphics.use(Resources.Alice.toSprite());
        
    }

    onPostUpdate() {
        this.enemyDeath();
        console.log(this.hp);
    }
    
    enemyDeath() {
        if(this.hp <= 0) {
            this.kill()
        }
    }
}