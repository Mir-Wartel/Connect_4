class App extends Domer {
  inputText = '';
  dropBtnS = new Drop
  newBoard = new Board
  gameboard = this.newBoard.getboard









  // if we dont want to run any code at 
  // object creation, then we don't need
  // to have a constructor

  // render is a magical method, that works 
  // somewhat like toString() in an object
  render(html) {

    // we tag our templates with html
    // all components must have a single 
    // element surrounding all other elements
    return html`
      <div>
       <section>
         <h1>Start page</h1>

          We connect our input elements to an 
          instance-variable with the attribute 'bind'
         <input bind="inputText" type="text">

          The DOM gets updated everytime these variables value changes


          After creating new Person() objects in the class
          we can simply render these components the same way
          we add variables to strings with template literals

          

        </section>
          <section>
			     <table id="game_table">
             <thead>
                <tr>	

                  ${this.dropBtnS}
                  ${this.newBoard}



            
         
                </tr>	
              </thead>
            </table>

        </section>
      </div>
    `
  }


}




// in App is the only time we create an instance
// of the App globally, and this is to
// start the app and render it and its components
// to the DOM

new App();

