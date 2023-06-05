import { ScreenElement,Label,Font, FontUnit, Color, Vector } from "excalibur";

export class ScoreUI extends ScreenElement {
    
    scoreText
    healthText
    game

    constructor() {
        super({ x: 10, y: 10 })
        
    }

    onInitialize(engine) {
        this.game = engine;
        
        
        this.scoreText = new Label({
            text: `Highscores`,
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(380, 400)
        });
        this.addChild(this.scoreText);
        if(this.scoreArray !== "") {
            for(let i=0; i < this.game.score.scoreArray.length; i++) {
                this.scoreText = new Label({
                    text: `${this.game.score.scoreArray[i]}`,
                    font: new Font({
                        unit: FontUnit.Px,
                        family: 'Impact',
                        size: 28,
                        color: Color.Black,
                    }),
                    pos: new Vector(380, 430 + i*50)
                });
                this.addChild(this.scoreText);
            }
        }
        
        
        
        
    }
}