import '../css/style.css';
import { Actor, Engine, Vector, Physics } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player';
import { Background } from './Background';
import { Ground } from './Ground';
import { Enemy } from './enemy';


export class Game extends Engine {

    constructor() {
        super({ width: 900, height: 600 });
        this.start(ResourceLoader).then(() => this.startGame());
        
        this.showDebug(true);
        this.debug.transform.showAll = true;
    }

    startGame() {
        
        console.log("start de game!");
        const background = new Background();
        this.add(background);
        const floor = new Ground(900, 400);
        this.add(floor);

        const ground = new Ground(0, 500);
        this.add(ground);
        
        this.add(new Enemy);
        const player = new Player();
        this.add(player);

        





    }
}

new Game()
