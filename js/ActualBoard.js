class ActualBoard extends Domer {
    gameboard = [];

    constructor(){
  
      super();
  
      this.gameboard = [];

      for (var row=0; row<=5; row++) {
        this.gameboard[row] = [];
        for (var col=0; col<=6; col++) {
          this.gameboard[row][col] = 0;
        }	
      }






    }

    get board(){
        return this.gameboard
    }
}