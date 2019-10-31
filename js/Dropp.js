class Drop extends Domer {
    player_color = [];

    active_player = 1;
    gameboard = []
    dropBtn = function dropBtn(col) {
        for (var row=5; row>=0; row--) {
            if (gameboard[row][col] == 0) {
    
                this.gameboard[row][col] = this.active_player;
                if (this.active_player == 1) {
                    this.active_player = 2;
                } else {
                    this.active_player = 1;
                }


                
    
            }


         }
    
     console.log(this.gameboard)
    }
        
    


    

   



    constructor(){
        super();
        this.player_color[1] = "red";
        this.player_color[2] = "blue";
            
            


        

    
    }





    onDropClick() {

        var col = 1


        this.dropBtn
        console.log(gameboard)
    
    
    }
    
    
 

            
    








    
    
    render(html) {
        return html`
               <thead>
                  <tr>
                      <td><button click="onDropClick">Drop</button></td>
                      <td><button click="dropBtn(1);">Drop</button></td>
                      <td><button click="dropBtn(2);">Drop</button></td>
                      <td><button click="dropBtn(3);">Drop</button></td>
                      <td><button click="dropBtn(4);">Drop</button></td>
                      <td><button click="dropBtn(5);">Drop</button></td>
                      <td><button click="dropBtn(6);">Drop</button></td>
                  </tr>
               </thead>

        `
      }
}
