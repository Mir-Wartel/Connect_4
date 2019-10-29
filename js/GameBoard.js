class Board extends Domer {

 
  boardwrite = "";
  gameboard = [];

  constructor(){

    super();

    this.gameboard = [];
    this.boardwrite = "";

    

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
    console.log(this.boardwrite)
    }
  



    

  render(html) {
    return html`
      <section>
			<table id="game_table">
				<thead>
					<tr>
						<td><button>Drop</button></td>
						<td><button>Drop</button></td>
						<td><button>Drop</button></td>
						<td><button>Drop</button></td>
						<td><button>Drop</button></td>
						<td><button>Drop</button></td>
						<td><button>Drop</button></td>
					</tr>
        
          <tr>	

          
         
           ${this.boardwrite}
          </tr>	
        </thead>
      </table>
      </section>
    `
  }
}
