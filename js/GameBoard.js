class Board extends Domer {


 
  boardwrite = "";
  gameboard = [];

  constructor(){

    super();

    this.gameboard = [];
    this.boardwrite = "";

    this.gameboard = [];
        
    for (var row=0; row<=5; row++) {
      this.gameboard[row] = [];
      for (var col=0; col<=6; col++) {
        this.gameboard[row][col] = 0;
      }	
    }
    for (var row=0; row<=5; row++) {  
      this.boardwrite = this.boardwrite + `<tr>
      `;
      for (var col=0; col<=6; col++) {
        this.boardwrite = this.boardwrite + `<td id='square_${row}_${col}' class='board_square'></td>
        `;
      }}
    this.boardwrite = this.boardwrite + `</tr>
    `;
  
    }
  
      	

    



    


 

 


    
  
  
    
  



    


  

  render(html) {
    return html`

	
        <thead>
          <tr>	

          
         
           ${this.boardwrite}
          </tr>	
        </thead>

    `
  }
}
