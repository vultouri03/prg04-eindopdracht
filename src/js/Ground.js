import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent,} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";

export class Ground extends Actor {

    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 700,
            height: 30,
            collisionType: CollisionType.Fixed,
        });
        this.graphics.use(Resources.Ground.toSprite())
    }

    
}