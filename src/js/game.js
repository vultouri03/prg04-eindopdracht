import '../css/style.css';
import { Actor, Engine, Vector, Physics, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player';
import { Background } from './Background';
import { Ground } from './Ground';
import { Enemy } from './enemy';
import {GameScene} from './gameScene';
import { GameOverScene } from './gameOverScene';
import {UI} from './ui.js'


export class Game extends Engine {
    ui
    player
    score
    playerHp;
    constructor() {
        super({ width: 900, height: 600 });
        this.start(ResourceLoader).then(() => this.startGame());
        
        //this.showDebug(true);
        //this.debug.transform.showAll = true;
    }

    startGame() {
        this.score = 0;
        this.player = new Player();
        console.log(this.player.hp)
        const ui = new UI();
        this.addScene('gameScene', new GameScene());
        this.addScene('gameOver', new GameOverScene())
        this.goToScene('gameScene');
        this.currentScene.add(this.player);
        this.currentScene.add(ui);
        
    }


    addPoints() {
        this.score ++
    }
}

new Game()
