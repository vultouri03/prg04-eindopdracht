import { Actor, Engine, Vector, Physics, Scene} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player';
import { Background } from './Background';
import { ScoreUI } from "./ScoreUI.js";
import { Ground } from './Ground';
import { Enemy } from './enemy';
import { StartButton } from "./StartButton.js";

export class StartScene extends Scene {

    constructor() {
        super();
    }

    onInitialize(engine) {
        console.log("lets a go")
    }

    onPostUpdate(engine) {
        
    }

    onActivate(ctx) {
        const ui = new ScoreUI();
        const startButton = new StartButton(450, 350);
        const backGround = new Background(Resources.Start, 1, 1);
        backGround.pos = new Vector(450, 300)
        this.add(backGround);
        this.add(ui);
        this.add(startButton);
    }

}