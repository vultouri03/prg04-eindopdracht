import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, Physics,} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";
import { Sword } from "./sword.js";
import { Enemy } from "./enemy.js";


export class Player extends Entity {
  animation
  weapon  
  hp
  defense
  constructor(x, y) {
        super({
        x: x,
        y: y,
        width: 100,
        height: 130,
        collisionType: CollisionType.Active,
        
        })
        
        this.weapon = new Sword;
        this.addChild(this.weapon);
        this.pos = new Vector(10, 400);
        this.graphics.use(Resources.Alice.toSprite());
        this.animationHandler(Resources.AliceWalk, 1, 8, 100, 130, 100);
        this.walkingAnimation = this.animation;
        this.animationHandler(Resources.AliceAttack, 1, 5, 100, 130, 100);
        this.attackAnimation = this.animation;
        Physics.gravity = new Vector(0, 800);
        
        
    }

    
//activates on initialization sets the player spawn and also 
    onInitialize(engine) {
        console.log("i figth for world peace"); 
        
           
    }

    onPostUpdate (engine, delta)  {
      this.playerLeaveScreen();
      this.playerInput(engine);
      this.playerAttack(engine);
      this.playerJump(engine)
    };

    //handles the attack input
    playerAttack(engine) {
      if(engine.input.keyboard.wasPressed(Input.Keys.Z)  ) {
        
        this.graphics.use(this.attackAnimation);
        
        this.weapon.weaponAttack();
        
        
    }}

    //activates on collision with enemy and takes hp
    playerColliosion(event) {
      
      if(event.other instanceof Enemy) {
        this.hp -= event.other.attack/ this.defense;
      }

    }

    //handles the jump input
    playerJump(engine) {
      if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {
        this.vel.y = -600
      }
    }

    //handles the player movement input, and sets the correct animation.
    playerInput(engine) {
      let xSpeed = 0;
      
      this.graphics.use(Resources.Alice.toSprite());

      if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
        xSpeed = 400;
        this.graphics.use(this.walkingAnimation);
      } else if(engine.input.keyboard.isHeld(Input.Keys.Left)) {
        xSpeed = -400;
        this.graphics.use(this.walkingAnimation);
      }
      this.vel.x = xSpeed;
      
    }

    playerLeaveScreen() {
      this.on("exitviewport", (event) => {
        this.pos = new Vector(0, 400);
      })
    }
    
   };
