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



    this.name = 'AWESOMENESS'

    var btnNum = col.target.id

 



    for (var row = 5; row >= 0; row--) {
      

       if (this.gameboard[row][btnNum] == 0) {
        console.log("if pased")

        this.gameboard[row][btnNum] = this.active_player;

        if (this.active_player == 1) {

          this.active_player = 2;

        } else {

          this.active_player = 1;

        } 
        console.log(this.gameboard)
        
        return true;

      }


    }
  }


  render(html) {

    return html`
       <div>
         <section>
  
           <h3>This is ${this.name}</h3>
  
           <button id=0 class=click_button click=onChangeName >Drop</button>
           <button id=1 class=click_button click=onChangeName  >Drop</button>
           <button id=2 class=click_button click=onChangeName >Drop</button>
           <button id=3 class=click_button click=onChangeName >Drop</button>
           <button id=4 class=click_button click=onChangeName >Drop</button>
           <button id=5 class=click_button click=onChangeName >Drop</button>
           <button id=6 class=click_button click=onChangeName >Drop</button>
  
         </section>
       </div>
      `

  }

}