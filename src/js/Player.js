import { Actor, Animation, CollisionType, SpriteSheet, Engine, Vector, Input, ExitViewPortEvent, Physics, Scene, Timer} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Entity } from "./Entity.js";
import { Sword } from "./sword.js";
import { Enemy } from "./enemy.js";


export class Player extends Entity {
  animation
  weapon  
  hp
  defense
  orientation
  attacking
  constructor(x, y) {
        super({
        x: x,
        y: y,
        width: 100,
        height: 130,
        collisionType: CollisionType.Active,
        
        })
        //adds the current weapon
        this.weapon = new Sword;
        this.addChild(this.weapon);

        //sets the spawnpoint
        this.pos = new Vector(10, 400);
        this.graphics.use(Resources.Alice.toSprite());

        //loads the animations
        this.animationHandler(Resources.AliceWalk, 1, 8, 100, 130, 100, false);
        this.walkingAnimation = this.animation;
        this.animationHandler(Resources.AliceWalk, 1, 8, 100, 130, 100, true);
        this.leftWalkingAnimation = this.animation;
        this.animationHandler(Resources.AliceAttack, 1, 5, 100, 130, 50);
        this.attackAnimation = this.animation;


        
        this.hp = 200
        this.defense = 10;
        this.attacking = false;
        
        
    }

    
//activates on initialization sets the player spawn and also 
    onInitialize(engine) {
      this.game = engine;
        console.log("i figth for world peace");  
        this.on('collisionstart', (event) => this.collisionCheck(event));       
    }

    onPostUpdate (engine)  {
      this.playerLeaveScreen();
      this.playerInput(engine);
      this.playerAttack(engine);
      this.playerJump(engine)
      this.playerDeath();
      console.log(this.hp);
    };

    //handles the attack input
    playerAttack(engine) {
      if(engine.input.keyboard.wasPressed(Input.Keys.Z)  ) {
        this.attacking = true

        const timer = new Timer({      
          fcn: () => this.attacking = false,      
          repeats: false,      
          interval: 200,  })
        engine.currentScene.add(timer)  
        timer.start()

        this.graphics.use(this.attackAnimation);
        if(this.orientation === 1) {
        this.weapon.weaponAttack(engine, 700);
      }
      if(this.orientation === 0) {
        this.weapon.weaponAttack(engine, -700)
      }
        
        
    }}

    //activates on collision with enemy and takes hp
    collisionCheck(event) {
      
      if(event.other instanceof Enemy) {
        this.hp -= event.other.attack/this.defense
        
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
      if(this.attacking === false) {
      this.graphics.use(Resources.Alice.toSprite());
      }
      if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
        xSpeed = 400;
        this.orientation = 1;
        this.graphics.use(this.walkingAnimation);
      } else if(engine.input.keyboard.isHeld(Input.Keys.Left)) {
        xSpeed = -400;
        this.graphics.use(this.walkingAnimation);
        this.orientation = 0;
      }
      this.vel.x = xSpeed;
    }

    playerDeath() {
      if(this.hp < 0) {
        this.kill();
      }
    }

    onPostKill(engine) {
      this.game.score.postScores();
      this.game.goToScene('gameOver');
    }

    playerLeaveScreen() {
      this.on("exitviewport", (event) => {
        this.hp = -100
      })
    }
    
   };
