export class Score {
    points;
    name;
    scoreArray;
    constructor(){
        this.points = 0;
        this.scoreArray = [];
        this.getScores();
        
        
        
        
    }

    addPoints(){
        this.points++
        
        
    }

    getScores(){
        if(localStorage.getItem("scores")) {
            this.scoreArray = JSON.parse(localStorage.getItem("scores"))
        }
    
    }
    postScores(){
        if (confirm("Do you want to save your score?") == true) {
            this.name = prompt("Please enter your name", "Youri de Gier");
            this.scoreArray.push(`${this.points} : ${this.name}`)
            this.scoreArray.sort();
            localStorage.setItem("scores", JSON.stringify(this.scoreArray));
          } else {
          }
            this.scoreArray.sort();
           this.scoreArray.reverse();
            
        
    } 
    
    showScore(){
        for(let i=0; i < this.scoreArray.length; i++) {

        }
    }
}