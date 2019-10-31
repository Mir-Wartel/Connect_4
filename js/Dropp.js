class Drop extends Domer {
    name = '';

    gameboard = [];
    player_color = [];

    active_player = 1;


    constructor(name) {
  
      super();
  
      this.name = name;
      this.player_color[1] = "red";
      this.player_color[2] = "blue";
      this.active_player = 1;

      for (var row=0; row<=5; row++) {
        this.gameboard[row] = [];
        for (var col=0; col<=6; col++) {
          this.gameboard[row][col] = 0;
        }	
  
    }}
  
  
    // bind click-events with click="methodHandlingClick"
  
    onChangeName(col) {

        
        
   
      this.name = 'AWESOMENESS'

      for (var row = 5; row >= 0; row--) {
        if (this.gameboard[row][col] == 0) {

            this.gameboard[row][col] = this.active_player;
            if (this.active_player == 1) {
                this.active_player = 2;
            } else {
                this.active_player = 1;
            }




        }
        console.log(this.gameboard)
        console.log(this.active_player)

        return true;


    }}
  
  
    render(html) {
  
      return html`
  
        <section>
  
          <h3>This is ${this.name}</h3>
  
          <button click=onChangeName (0)>Click ME</button>
  
        </section>
  
      `
  
    }
  
  }