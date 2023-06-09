import { ScreenElement,Label,Font, FontUnit, Color, Vector } from "excalibur";

export class UI extends ScreenElement {
    
    scoreText
    healthText
    game

    constructor() {
        super({ x: 10, y: 10 })
    }

    onInitialize(engine) {
        this.game = engine;
        this.scoreText = new Label({
            text: `Score: ${this.game.score.points}`,
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(50, 50)
        });
        this.healthText = new Label({
            text: `HP: ${this.game.player.hp}`,
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(50, 100)
        });
        this.addChild(this.scoreText);
        this.addChild(this.healthText);
    }

    onPreUpdate() {
        this.scoreText.text = `Score: ${this.game.score.points}`;
        this.healthText.text = `HP: ${this.game.player.hp}`
    }
}