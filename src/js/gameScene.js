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

        console.log("start de game!");
        const background = new Background(Resources.Background, 1.5, 1.5);
        this.add(background);
        const floor = new Ground(900, 400);
        this.add(floor);

        const ground = new Ground(0, 500);
        this.add(ground);
       

         

        const timer = new Timer({      
            fcn: () => this.spawnEnemy(),      
            repeats: true,      
            interval: this.time,  })
          engine.currentScene.add(timer)  
          timer.start()
    }

    onPreUpdate(engine) {
        
    }

    spawnEnemy() {
        this.time -= 1000;
        this.randomY = Math.random() * (400 - 300) + 300 
        this.randomX = Math.random() * (700 - 0) + 0
        this.add(new Enemy(this.randomX, this.randomY));
    }

    Gameover() {
        this.game.goToScene('gameOver')
    }

    
}