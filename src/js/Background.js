import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, GraphicsGroup} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";

export class Background extends Actor {
    
    constructor() {
        super();
    }

    onInitialize(engine){
        this.graphics.use(Resources.Background.toSprite());
        this.scale = new Vector(1.2, 1.2)
}}