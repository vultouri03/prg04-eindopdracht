import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, Random, DeactivateEvent} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";

export class Enemy extends Entity {
    hp;
    defense;
    attack;
    game;
    constructor(x,y) {
        super({
            x: x,
            y: y,
            width: 100,
            heigth: 100,
            CollisionType: CollisionType.PreventCollision,
        })
        this.x = x;
        this.y = y;
        this.hp = 10
        this.defense = 6;
        this.attack = 10;
        this.animationHandler(Resources.Slime, 1, 5, 100, 100, 100);
        this.graphics.use(this.animation);
    }
    onInitialize(engine) {
        this.game = engine
        this.pos = new Vector(this.x, this.y);
        
        this.enemyMovement(engine);
        
    }

    onPostUpdate(engine) {
        this.enemyDeath();
        
        
    }

    onPostKill() {
        this.game.score.addPoints();
    }

    enemyMovement(engine) {
        this.time -= 1000;
        
        this.randomX = Math.random() * (400 - -400) + -400;
        this.vel = new Vector(this.randomX, 0)
    }
    
    enemyDeath() {
        if(this.hp <= 0) {
            this.kill()
        }
    }

    playerDeath() {
        
    }

    
}