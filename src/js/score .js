export class Score {
    points;
    name;
    scoreArray;
    constructor(){
        this.points = 0;
        this.scoreArray = [];
        this.getScores();
        
        this.scoreArray.sort();
            this.scoreArray.reverse();
        
        
        
    }

    addPoints(){
        this.points++
        if (this.points >= 999) {
            this.points = 999;
        }
        
        
    }

    getScores(){
        if(localStorage.getItem("scores")) {
            this.scoreArray = JSON.parse(localStorage.getItem("scores"))
        }
    
    }
    postScores(){
        if(this.points.toString().length === 1) {
            this.points = `00${this.points}`;
        }else if(this.points.toString().length === 2){
            this.points = `0${this.points}`;
        }

        if (confirm("Do you want to save your score?") == true) {
            this.name = prompt("Please enter your name", "Youri de Gier");
            this.scoreArray.push(`${this.points} : ${this.name}`)
            this.scoreArray.sort();
            this.scoreArray.reverse();
            
          } else {
            this.scoreArray.sort();
            this.scoreArray.reverse();
          }
          localStorage.setItem("scores", JSON.stringify(this.scoreArray)); 
            
        
    } 
    
    showScore(){
        for(let i=0; i < this.scoreArray.length; i++) {

        }
    }
}