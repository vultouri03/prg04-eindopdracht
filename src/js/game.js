import '../css/style.css';
import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player';
import { Entity } from './Entity';
import { Background } from './Background';
import { Ground } from './Ground';

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
        const floor = new Ground();
        this.add(floor);
        const player = new Player();
        this.add(player);





    }
}

new Game()
