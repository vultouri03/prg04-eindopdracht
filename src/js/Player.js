import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, Physics,} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";


export class Player extends Entity {
    constructor(x, y) {
        super({
        x: x,
        y: y,
        width: 100,
        height: 130,
        collisionType: CollisionType.Active,
        });

        
    }

    animation

    onInitialize(engine) {
        console.log("i figth for world peace"); 
        this.pos = new Vector(10, 400);
        this.graphics.use(Resources.Alice.toSprite());
        this.animationHandler(Resources.AliceWalk, 1, 8, 100, 130, 100, true);
        this.scale = new Vector(2, 2);
        Physics.useArcadePhysics;

        
        
    }

    onPostUpdate (engine, delta)  {
      this.playerLeaveScreen();
      
      this.playerInput(engine);
      this.playerJump(engine);
    };

    playerJump(engine) {
      
    }

    playerInput(engine) {
      let xSpeed = 0;
      let ySpeed = 0;
      this.graphics.use(Resources.Alice.toSprite());

      if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
        xSpeed = 120;
        this.graphics.use(this.animation);
      } else if(engine.input.keyboard.isHeld(Input.Keys.Left)) {
        xSpeed = -120;
        this.graphics.use(this.animation);
      } else if(engine.input.keyboard.isHeld(Input.Keys.Space)) {
        ySpeed = 500;
      }

    

    

    this.vel = new Vector(xSpeed, ySpeed);
    }

    playerLeaveScreen() {
      this.on("exitviewport", (event) => {
        this.pos = new Vector(0, 400);
      })
    }
    
   };
