import { Actor, Engine, Vector, Physics, Scene, Timer, Random} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player';
import { Background } from './Background';
import { Ground } from './Ground';
import { Enemy } from './enemy';


export class GameScene extends Scene {
    game;
    randomX;
    randomY;
    time;


    constructor() {
        super();
        Physics.gravity = new Vector(0, 800);
        this.time = 2000;
    }

    onInitialize(engine) {
        console.log('new scene');
        this.game = engine;
        this.enemy= new Enemy();
        console.log("start de game!");
        const backGround = new Background(Resources.Background, 1, 1);
        backGround.pos = new Vector(450, 300)
        this.add(backGround);
        const floor = new Ground(900, 400);
        this.add(floor);

        const ground = new Ground(0, 500);
        this.add(ground);
        this.add(this.game.player);
        this.add(this.game.ui);
       

         

        this.timer = new Timer({      
            fcn: () => this.spawnEnemy(),      
            repeats: true,      
            interval: this.time,  })
          engine.currentScene.add(this.timer)  
          this.timer.start()
    }

    onPreUpdate(engine) {
        
    }

    spawnEnemy() {
        this.time -= 1000;
        this.randomY = Math.random() * (400 - 300) + 300 
        this.randomX = Math.random() * (700 - 0) + 0
        this.add(new Enemy(this.randomX, this.randomY));
    }

    onActivate(ctx) {
        
    }

    restartGame() {

    }
}