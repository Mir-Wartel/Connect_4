class Drop extends Board {

  name = '';


  player_color = [];

  active_player = 0;


  constructor() {

    super();


    this.player_color[1] = "red";
    this.player_color[2] = "blue";




  }


  // bind click-events with click="methodHandlingClick"

  onChangeName(col) {

    this.col = 0

    var row = 0 




    this.name = 'AWESOMENESS'



    for (var row = 5; row >= 0; row--) {
      console.log(row)

      if (this.gameboard[row][this.col] == 0) {
        console.log("if pased")

        this.gameboard[row][this.col] = this.active_player;

        if (this.active_player == 1) {

          this.active_player = 2;

        } else {

          this.active_player = 1;

        }
        return true;

      }

      console.log(this.gameboard)
      console.log(this.active_player)




    }
  }


  render(html) {

    return html`
       <div>
         <section>
  
           <h3>This is ${this.name}</h3>
  
           <button click=onChangeName '0'>Drop</button>
           <button click=onChangeName (1)>Drop</button>
           <button click=onChangeName (2)>Drop</button>
           <button click=onChangeName (3)>Drop</button>
           <button click=onChangeName (4)>Drop</button>
           <button click=onChangeName (5)>Drop</button>
           <button click=onChangeName (6)>Drop</button>
  
         </section>
       </div>
      `

  }

}