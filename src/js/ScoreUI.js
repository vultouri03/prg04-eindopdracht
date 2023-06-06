import { ScreenElement,Label,Font, FontUnit, Color, Vector } from "excalibur";
import { GameOverScene } from "./gameOverScene";

export class ScoreUI extends ScreenElement {
    
    scoreText
    healthText
    game

    constructor(gameOver) {
        super({ x: 10, y: 10 })
        this.gameOver = gameOver;
    }

    onInitialize(engine) {
        this.game = engine;
        if(this.gameOver) {
            this.text = `refresh the browser or press shift F5 to restart`
            this.location = 200;
        } else {
            this.text = 'use keyboard right and left to walk, space to jump and z to attack'
            this.location = 100
        }
        this.restartText = new Label({
            text: this.text,
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(this.location, 370)
        });
        this.addChild(this.restartText);
        
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
                    pos: new Vector(350, 430 + i*30)
                });
                this.addChild(this.scoreText);
            }
        }
        
        
        
        
    }
}