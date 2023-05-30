import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, GraphicsGroup} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";

export class Background extends Actor {
    
    constructor(image, xScale, yScale) {
        
        super();
        this.image = image
        this.xScale = xScale;
        this.yScale = yScale;

    }

    onInitialize(engine){
        this.graphics.use(this.image.toSprite());
        this.scale = new Vector(this.xScale, this.yScale)
}}