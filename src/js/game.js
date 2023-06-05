import '../css/style.css';
import { Actor, Engine, Vector, Physics, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player';
import { Background } from './Background';
import { Ground } from './Ground';
import { Enemy } from './enemy';
import {GameScene} from './gameScene';
import { GameOverScene } from './gameOverScene';
import {Score} from "./score ";
import {UI} from './ui.js';
import { StartScene } from './startScene';


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
        this.score = new Score();
        this.add(this.score);
        this.player = new Player();
        console.log(this.player.hp)
        this.ui = new UI();
        this.addScene('startScene', new StartScene())
        this.addScene('gameScene', new GameScene());
        this.addScene('gameOver', new GameOverScene())
        this.goToScene('startScene');
        //this.currentScene.add(this.player);
        //this.currentScene.add(ui);
        
    }
}

new Game()
