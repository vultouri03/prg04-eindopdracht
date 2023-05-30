import { Actor, Engine, Vector, Physics, Scene} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player';
import { Background } from './Background';
import { Ground } from './Ground';
import { Enemy } from './enemy';

export class GameOverScene extends Scene {

    onInitialize(engine) {
        console.log("i am over")
    }

    onPostUpdate(engine) {
        
    }

    onActivate(ctx) {
        const backGround = new Background(Resources.GameOver, 0.8, 1);
        backGround.pos = new Vector(450, 300)
        this.add(backGround);
    }

}