import { ScreenElement,Label,Font, FontUnit, Color, Vector, Input, Actor } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class StartButton extends Actor {
    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: Resources.Button.width * 0.6,
            height: Resources.Button.height * 0.6,
        })
    }
    
    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.Button.toSprite());
        this.scale = new Vector(0.6, 0.6)
        
        this.actions.blink(500, 200, 1000)
}

onPostUpdate(engine) {
    this.on('pointerup', (event => {
        this.startGame();
    }))
    if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {
        this.startGame();
    }
}
startGame(){
    this.game.goToScene('gameScene');
}
    }
    
        