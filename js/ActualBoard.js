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



    player_color = [];

    active_player = 1;
    gameboard = []











    constructor() {
        super();
        this.player_color[1] = "red";
        this.player_color[2] = "blue";

    }



    onChangeName() {
        alert("Hello!");

        console.log("test");


        for (var row = 5; row >= 0; row--) {
            if (gameboard[row][col] == 0) {

                this.gameboard[row][col] = this.active_player;
                if (this.active_player == 1) {
                    this.active_player = 2;
                } else {
                    this.active_player = 1;
                }




            }


        }

        console.log(this.gameboard);
    }



















    render(html) {
        return html`
            <section>
               <thead>
                  <tr>
                      <td><button click="onChangeName">Click ME</button></td>
                      <td><button click="dropBtn(1)">Drop</button></td>
                      <td><button click="dropBtn(2)">Drop</button></td>
                      <td><button click="dropBtn(3)">Drop</button></td>
                      <td><button click="dropBtn(4)">Drop</button></td>
                      <td><button click="dropBtn(5)">Drop</button></td>
                      <td><button click="dropBtn(6)">Drop</button></td>
                  </tr>
               </thead>
            </section>

        `
    }
}
