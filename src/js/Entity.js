import { Actor, Animation, CollisionType, SpriteSheet, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Entity extends Actor {
  constructor(x, y) {
    super({
      x: x,
      y: y,
      width: 100,
      height: 130,
      collisionType: CollisionType.Active,
    });

    
  };
  MoveRigth() {
    this.vel = new Vector(300, 0);
    this.graphics.use(this.animation);

  }

  MoveLeft() {
    this.vel = new Vector(-300, 0);
    this.graphics.use(this.animation);
  }
  animationHandler = (image, rows, collumns, width, heigth, length,) => {
    const spriteSheet = SpriteSheet.fromImageSource({
      image: image,
      grid: {
        rows: rows,
        columns: collumns,
        spriteWidth: width,
        spriteHeight: heigth,
      },
    });
    spriteSheet.sprites.forEach((sprite) => {
      sprite.width = width;
      sprite.height = heigth;
    });

    this.animation = Animation.fromSpriteSheet(
      spriteSheet,
      [0, 1, 2,3,4,5,6,7],
      length,
      
    );
  
  };
}