import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent,} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";

export class Enemy extends Entity {
    constructor(x,y) {
        super({
            x: x,
            y: y,
            width: 100,
            heigth: 130,
            CollisionType: CollisionType.PreventCollision,
        });
    }
    onInitialize() {
        this.pos = new Vector(500, 400);
    }
    
}